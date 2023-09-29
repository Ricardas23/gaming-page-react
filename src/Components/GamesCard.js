import React from 'react'

const GamesCard = ({allGameCard}) => {
  return (
    <div className="gameCard-container">
        <div className="game-image">
      <img src={allGameCard.image} />
        </div>

      <div className="about-games">
      <h3 className="font">{allGameCard.title}</h3>
      <p className="font">About: {allGameCard.about}</p>
      </div>
      </div>
  )
}

export default GamesCard