import React from 'react'
import logoImg from './favicon.ico'
import './logo.css'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-container">
                <img src={logoImg} alt = ""/>
            </div> 
        )
    }
}

export default Logo
