import React, { useEffect, useState } from 'react';
import './HomePage.css';
const HomePage = ({user, onLogout}) =>{
    const [quoteText, setQuoteText] = useState('');
    const [author, setAuthor] = useState('');
    const [daysLeft, setDaysLeft] = useState('');
    const [todayBday, setTodayBday] = useState(false);
    const url = 'https://type.fit/api/quotes';
    
    
    // Function to display a random quote from the array when its your bday!
    const displayRandomvalue = (dataArrayObj) =>{
        const randomIndex = Math.floor(Math.random() * dataArrayObj.length);
        const randomTextValue = dataArrayObj[randomIndex]['text'];
        const randomAuthorValue = dataArrayObj[randomIndex]['author'];
        console.log('randomAuthorValue '+randomAuthorValue);
        let newAuthorValue = '';
        if(randomAuthorValue.includes(', type.fit')){
            newAuthorValue = randomAuthorValue.replace(', type.fit','');
        }else if(randomAuthorValue.includes('type.fit')){
            newAuthorValue = randomAuthorValue.replace('type.fit','');
        }
    
        console.log('randomAuthorValue sub '+newAuthorValue+'quote'+ randomTextValue);
        setAuthor(newAuthorValue);
        setQuoteText(randomTextValue);
    }
    // Renders the JSON that was returned when the Promise from fetch resolves.
    const renderJsonResponse = (res) => {
        console.log(res);
        displayRandomvalue(res);
    }
    useEffect(()=>{
        const getData = async ()=>{  
            try{
                const response = await fetch(url,{cache:'no-cache'});
                if(response.ok){
                    const jsonResponse = await response.json();
                    renderJsonResponse(jsonResponse);
                }
        
            }catch(error){
                console.log(error);
            }
        }
        const bday = user.dateOfBirthValue;

        const d = new Date();
        const todaysDate = new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))

        const month = bday.split('-')[1];
        const day = bday.split('-')[2];
        const userBday = new Date(Date.UTC(d.getFullYear(), month - 1, day));

        // call setHours to take the time out of the comparison
        console.log(userBday.toISOString(), todaysDate.toISOString(), userBday.toISOString() === todaysDate.toISOString())
        //check if the bday is today
        if(userBday.toISOString() === todaysDate.toISOString()) {
            getData();
            setTodayBday(true);    
        }else{
            let todaysDate = new Date().setHours(0,0,0,0);
            const currentYear = new Date().getFullYear()
            let userBday = new Date(bday).setFullYear(currentYear);
            // let upcomingBday = new Date(todaysDate, userBday.getMonth(), userBday.getDate());
    
            if(todaysDate > userBday) {
                userBday= new Date(bday).setFullYear(currentYear + 1);
            }
            // console.log('upcomingBday '+upcomingBday);
            console.log('userbady', userBday, 'todayDate', todaysDate);
            const daysLeft = Math.round((userBday - todaysDate) / (1000 * 60 * 60 * 24))
            console.log(daysLeft);
            setDaysLeft(daysLeft);
        
        } 
    }, [])


    return(
        <div className='container'>
            <div>
                {todayBday && (<p><b><span className='secondText'>Hello {user.nameValue}</span><br/><span className='firstText'>Happy Birthday 🎂🎉!</span><br/> <br/><span className='secondText'>"{quoteText}"</span><br/><br/><span className='thirdText'>{author}</span></b></p>)}
                {!todayBday && (<p><b><span className='firstText'>{daysLeft} DAY LEFT</span> <br/><span className='secondText'> Until your next BIRTHDAY 🎂🎉!</span></b></p>)}
            </div>
            <br/>
            <button className='signOutBtn' type="button" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};
export default HomePage;