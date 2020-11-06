import React from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <>
        <div class="login-wrapper">
            <div class="login-container">
                    <h1>Welcome to YouTube Library</h1>
                    <form id="login-form">
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <NavLink to="/playlists">
                        <button type="submit" id="login-button">Login</button>
                    </NavLink>
                    </form>
            </div>
        </div>
        
        </>
    )
}
