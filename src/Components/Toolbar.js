import React from 'react'
import { Link } from 'react-router-dom'
const Toolbar = () => {
  return (
    <div className='Toolbar-Container'>
    <div className='Toolbar'>
        <div className='logo-container'>
            <img src={require('../Assets/Logo.png')}/>
        </div>

        <div className='side-buttons-container'>
            <div className='side-buttons'>
            <Link to='/gaming-page-react'>
                <img src={ require("../Assets/Property 1=normal.png")}/>
            </Link>

            <Link to='/Friends'>
                <img src={require("../Assets/Property 1=Default.png")} />
            </Link>

                <img src={require("../Assets/Add.png")} />
            <Link to='/Shop'>

                <img src={require("../Assets/Property 12=Default.png")} />
            </Link>

            <Link to='/Favorite'>  
                <img src={require("../Assets/Property 123=Default.png")} />
            </Link>
            </div>

        </div>
            <div className='add-button'>
                <img src={require("../Assets/Add-sidebar.png")} /> 
            </div>
    </div>
    </div>
  )
}

export default Toolbar