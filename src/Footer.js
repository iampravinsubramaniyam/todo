import React from 'react'


const Footer = (props) =>{
    return(
        <div className = "footer">
            <p>{props.count} List item{props.count > 1 ? "s" :""}</p>
        </div>
    )
}



export default Footer;