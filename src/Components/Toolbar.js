import React from 'react'
import { Link } from 'react-router-dom'
const Toolbar = () => {
  return (
    <div className='Toolbar-Container'>
    <div className='Toolbar'>
        <div className='logo-container'>
            <img src={"/Assets/Logo.png"} />
        </div>

        <div className='side-buttons-container'>
            <div className='side-buttons'>
            <Link to='/'>
                <img src={"/Assets/Property 1=normal.png"} />
            </Link>

            <Link to='/Friends'>
                <img src={"/Assets/Property 1=Default.png"} />
            </Link>

                <img src={"/Assets/Add.png"} />

                <img src={"/Assets/Property 12=Default.png"} />

            <Link to='/Favorite'>  
                <img src={"/Assets/Property 123=Default.png"} />
            </Link>
            </div>

        </div>
            <div className='add-button'>
                <img src={"/Assets/Add-sidebar.png"} /> 
            </div>
    </div>
    </div>
  )
}

export default Toolbar