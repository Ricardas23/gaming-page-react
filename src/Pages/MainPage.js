import React from 'react'
import Toolbar from '../Components/Toolbar'
const MainPage = () => {
  return (
    <div className='Main-Container'>
        {/* <Toolbar/> */}

        <div className='game-container'>
            <div className='popularity-btns'>
            <button className='btn-popular'>
                <img src='/Assets/ant-design_fire-outlined.png'/>
                Popular
            </button>

            <button className='steam-btn'>
            <img src='/Assets/ButtonSteam.png'/>
            </button>

            <button className='epicgames-btn'>
            <img src='/Assets/ButtonEpicGames.png'/>
            </button>

            </div>

            <div className='about-game'>
                <h2>Space Marine</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum. A erat nam at lectus urna duis.</p>
            </div>
            <img src={'/Assets/image 48.png'}/>
            <img src={'/Assets/image 47.png'}/>
        </div>

        <div className='othergames-container'>
            <div className='moregames'>
                <img className='gameimg' src={'/Assets/leap.png'}/>
                <img className='downloading' src={'/Assets/download1.png'}/>

            </div>

            <div className='moregames'>
                <img className='gameimg' src={'/Assets/spacemarine.png'}/>
                <img className='downloading' src={'/Assets/download2.png'}/>

            </div>

            <div className='moregames'>
                <img className='gameimg' src={'/Assets/reddeadredemption.png'}/>
                <img className='downloading' src={'/Assets/download3.png'}/>

            </div>
        </div>

        <div className='middle-section-games'>

            <div>
            <img src={'/Assets/deep walker.png'}/>
            <img src={'/Assets/overwatch.png'}/>
            <img src={'/Assets/fortnite.png'}/>

            </div>
        </div>

        <div className='top-weekend-game'>
            <div className='about-item'>
            <h3>Top Weekend</h3>
            <h2>Kratos</h2>
            <p>Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem loremLorem lorem lorem</p>
            </div>

            <div className='item-price'>
                <h3> Price: 30$ </h3>
                <button className='buy-item'>
                <img src={'/Assets/shopping-cart.png'}/>
                    <p>Add to cart</p>
                </button>
            </div>

            <img src={'/Assets/kratos.png'}/>
            <img src={'/Assets/Radar .png'}/>


        </div>
        {/* <div className='users_online_offline'>
            <div className='users'></div>
        </div> */}
    </div>
  )
}

export default MainPage