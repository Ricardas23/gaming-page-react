import React from 'react'

const BuyGamesCard = ({allGameCard}) => {
  return (
    <div className='buy-games-card-container'>
         <div className="shop-game-image">
  <img src={allGameCard.image} />
    </div>

  <div className="shop-about-games-container">
  <h3 className="font">{allGameCard.title}</h3>
  <p className="font">Price: {allGameCard.price} $</p>
    </div>
    <div className='add-to-cart-btn-container'>
  <button>Add to cart</button>
    </div>
    </div>
  )
}

export default BuyGamesCard