import React, { useState } from 'react';
import InputField from './InputField';
import './RegisterForm.css';

const RegisterForm = ({onRegister, onToggleForm}) =>{
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword =()=>{
        setShowPassword(!showPassword);
    }
    const handleRegister = () =>{
        onRegister(name,email,password, dob);
    };
    const handleDateOfBirthInput = (e) =>{
        const today = new Date();
        const enteredDate = new Date(e.target.value);
        if(enteredDate > today){
            alert('Entered date is greater than today!');
        }else{
            setDob(e.target.value);
        }
     
    }
    return(
        <div className='signupForm'>
            <h1 className='h1Class'>Tell us your birthdate!</h1>
            <h2 className='createAnAccountText'>Create an account</h2>
            <div className='divClass'>
                <InputField 
                    name = "name"
                    label = "Name"
                    value={name}
                    placeholder="Enter your name"
                    type="text"
                    onChange={(e)=> setName(e.target.value)}
                />
                <InputField 
                    name = "dob"
                    label = "Date of Birth"
                    value={dob}
                    placeholder="YYYY-MM-DD"
                    type="date"
                    onChange={handleDateOfBirthInput}
                />
                <InputField 
                    name = "email"
                    label = "Email"
                    value={email}
                    placeholder="Enter your email"
                    type="email"
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <InputField 
                    name = "password"
                    label = "Password"
                    value={password}
                    placeholder="**********"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <label>
                    <input type="checkbox" checked={showPassword} onChange={handleTogglePassword} />
                    Show Password
                </label>
            </div>
            <button className='signUpButton' onClick={handleRegister}>Sign Up</button>
            <p className='alreadyUserText'>
                Already have an account? <a  href='#' onClick={onToggleForm}>Sign In</a>
            </p>   
        </div>
    );
    
};
export default RegisterForm;


