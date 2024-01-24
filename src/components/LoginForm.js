import React, { useState } from 'react';
import InputField from './InputField';
import './LoginForm.css';

const LoginForm = ({ onToggleForm, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword =()=>{
        setShowPassword(!showPassword);
    }
    const handleLogin =  () => {
        onLogin(email, password);
    };
  
    return (
        <div>
            <form className='formClass' onSubmit={handleLogin}>
                <h1 className='h1Class'>Welcome Back!</h1>
                <h2 className='loginText'>Log in to access your account.</h2>
                <div className='divClass'>
                    <InputField
                        name="email"
                        label="Email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                        name="password"
                        label="Password"
                        value={password}
                        placeholder="Enter your password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>
                        <input type="checkbox" checked={showPassword} onChange={handleTogglePassword} />
                        Show Password
                    </label>
                    <button type="button" className='loginButton' onClick={handleLogin}>Sign In</button>
                    <br/>
                    <p className='createNewUserText'>
                        Don't have an account? <a href="#" onClick={onToggleForm}>Register here</a>
                    </p>
                </div>
            </form>
            
      </div>
      
    );
  };
  
  export default LoginForm;