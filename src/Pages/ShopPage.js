import React, { useState, useEffect } from 'react'
import BuyGamesCard from '../Components/BuyGamesCard'

const ShopPage = ({buyGames}) => {

//     const [randomGames, setRandomGames] = useState([])


//   useEffect(() => {
//     fetch(
//         "http://api.steampowered.com/ISteamApps/GetAppList/v2 ",
//         { method: 'POST',
//           headers: {
//             'Accept': 'application/json',
//             'Client-ID': 'Client ID',
//             'Authorization': 'Bearer access_token',
//           },
//           body: "fields checksum,comment,game,name;"
//       })
//         .then(response => {
//             console.log(response.json());
//         })
//         .catch(err => {
//             console.error(err);
//         });
//   }, [])

  
//   fetch(
//     "https://api.igdb.com/v4/alternative_names",
//     { method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Client-ID': 'Client ID',
//         'Authorization': 'Bearer access_token',
//       },
//       body: "fields checksum,comment,game,name;"
//   })
//     .then(response => {
//         console.log(response.json());
//     })
//     .catch(err => {
//         console.error(err);
//     });

  return (
    <div className="shop-container">
     {
            buyGames && buyGames.map((allGameCard) =>
            <BuyGamesCard allGameCard={allGameCard}/>
            )
          }
  </div>
  )
}

export default ShopPage