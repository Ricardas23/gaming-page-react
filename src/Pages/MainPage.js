import React from 'react'
import Toolbar from '../Components/Toolbar'

const MainPage = () => {
  return (
    <div className='Main-Container'>
        {/* <Toolbar/> */}

        <div className='game-container'>
            <div className='popularity-btns'>
            <button className='btn-popular'>
                <img src={require('../Assets/ant-design_fire-outlined.png')}/>
                Popular
            </button>

            <button className='steam-btn'>
            <img src={require('../Assets/ButtonSteam.png')}/>
            </button>

            <button className='epicgames-btn'>
            <img src={require('../Assets/ButtonEpicGames.png')}/>
            </button>

            </div>

            <div className='about-game'>
                <h2>Space Marine</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum. A erat nam at lectus urna duis.</p>
            </div>
            <img src={require('../Assets/image 48.png')}/>
            <img src={require('../Assets/image 47.png')}/>
        </div>

        <div className='othergames-container'>
            <div className='moregames'>
                <img className='gameimg' src={require('../Assets/leap.png')}/>
                <img className='downloading' src={require('../Assets/download1.png')}/>

            </div>

            <div className='moregames'>
                <img className='gameimg' src={require('../Assets/spacemarine.png')}/>
                <img className='downloading' src={require('../Assets/download2.png')}/>

            </div>

            <div className='moregames'>
                <img className='gameimg' src={require('../Assets/reddeadredemption.png')}/>
                <img className='downloading' src={require('../Assets/download3.png')}/>

            </div>
        </div>

        <div className='middle-section-games'>

            <div>
            <img src={require('../Assets/deep walker.png')}/>
            <img src={require('../Assets/overwatch.png')}/>
            <img src={require('../Assets/fortnite.png')}/>

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
                <img src={require('../Assets/shopping-cart.png')}/>
                    <p>Add to cart</p>
                </button>
            </div>

            <img src={ require('../Assets/kratos.png')}/>
            <img src={ require('../Assets/Radar .png')}/>


        </div>
        {/* <div className='users_online_offline'>
            <div className='users'></div>
        </div> */}
    </div>
  )
}

export default MainPage