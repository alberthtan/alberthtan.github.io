import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, location}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]  // if you don't but anything, it defaults to btn--primary

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]



    return(
        <Link to={location} className='btn-mobile'>
        {/* <div className='btn-mobile'> */}
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        {/* </div> */}
         </Link>
    )
}