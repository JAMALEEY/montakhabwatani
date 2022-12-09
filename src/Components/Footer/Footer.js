import React from 'react'
import IconMaroc from '../Utils/IconMaroc'

const Footer = () => {
  return (
    <footer className='bck_blue'
    >Footer
    <div className='footer_logo'>
        <IconMaroc
        width="70px" height="70px" link={true} linkTo="/"
        >

        </IconMaroc>
    </div>
    <div className='footer_discl'>
        DIMA MAGHRIB 
    </div>
    </footer>
  )
}

export default Footer