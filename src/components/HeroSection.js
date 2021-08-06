import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'

function HeroSection() {
    const handleClick = () => {
        window.open('/Resume.pdf');
    }
    return (
        <div className='hero-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>ALBERT TAN</h1>
            <p>Student, Thinker, Artist</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={handleClick}>
                    Resume
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    location='/portfolio'>
                    Portfolio {/*<i className='far fa-play-circle' />*/}
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
