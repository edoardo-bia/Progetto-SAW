import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import './form.css';

function Form() {
    const { user, signUp, signIn, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='form-container'>
            {user ? (
                <div className='logout_form'>
                    <h2>Welcome, {user.email}!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form className='login_form'>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Insert e-mail'/>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                    <div className='container-button'>
                        <button className='button-log' onClick={handleLogin}>Log in</button>
                        <button className='button-reg' onClick={handleRegister}>Register</button>
                    </div>
                    {error && <p>{error}</p>}
                </form>
            )}
        </div>
    );
}

export default Form;