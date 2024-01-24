import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import HomePage from './HomePage';
import { db,auth } from './Firebase';
import { set, ref,onValue} from 'firebase/database';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';

const App= ()=> {
  const [user, setUser] = useState('');
  const [view, setView] = useState('registration'); //login or registration

  const handleRegister = async(name, email, password, dob) =>{
    try{
      //create user in firebase
       await createUserWithEmailAndPassword(auth, email,password).then((userCredentials)=>{
          const user = userCredentials.user;
          console.log(user);
          const uid = user.uid;
          console.log('uid', uid);
          // Store additional user information in Firebase Realtime Database
          set(ref(db, 'UserAuthList/'+ uid), {
              nameValue: name,
              dateOfBirthValue : dob
            });
          console.log('details inserted', user);
          setTimeout(()=>{
            const userRef = ref(db,'UserAuthList/'+ uid);
            onValue(userRef , (snapshot) =>{
                const userDetails = snapshot.val();
                console.log(userDetails.nameValue,'-after registration---',userDetails.dateOfBirthValue);
                setUser(userDetails);
                setView('home');
            })
          },2000)
         
          
      });
    }catch(error){
        console.log("Registration Error:", error.message);
        if(error.message.includes('auth/email-already-in-use')){
          alert('The email address is already in use by another account.');
        }else if(error.message.includes('Password should be at least 6 characters')){
          alert('Password should be at least 6 characters ');
        }else if(error.message.includes('auth/invalid-email')){
          alert('Please enter email in correct format. ');
        }
    }  
  }
  const handleLogin =async(email, password)=>{
    // Perform Firebase authentication
    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredentials) =>{
          //Signed in
          const user = userCredentials.user;
          const uid = user.uid;
          console.log("logged in");
          const userRef = ref(db,'UserAuthList/'+ uid);
          onValue(userRef , (snapshot) =>{
              const userDetails = snapshot.val();
              console.log(userDetails.nameValue,'--after login--',userDetails.dateOfBirthValue);
              setUser(userDetails);
              setView('home');
          });
         
      });
     
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert('Invalid Login Credentials. Please enter correct details!');
    }
  };
  const handleToggleForm = () =>{
    setView(view === 'login' ? 'registration' : 'login');
  }
  const handleLogout = async() =>{
    try{
      await signOut(auth);
      console.log("user log out!!");
      setView('login');
    }catch(e){
      console.log(e.message);
    }
  }
  return (
    <div className="App">
      {view === 'login' && (<LoginForm onLogin={handleLogin} onToggleForm={handleToggleForm} />)}
      {view === 'registration' && (<RegisterForm onRegister={handleRegister} onToggleForm={handleToggleForm} />)}
      {user && view === 'home' && (<HomePage user={user} onLogout={handleLogout} />)}
    </div>
  );
};

export default App;
