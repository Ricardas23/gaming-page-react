import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Toolbar from "./Components/Toolbar";
import MainPage from "./Pages/MainPage";
import FriendsPage from "./Pages/FriendsPage";
import FavoritePage from "./Pages/FavoritePage";
import ShopPage from "./Pages/ShopPage";
import userProfile from "./Index2.json";
import games from "./Games.json";
import buyGames from "./BuyGames.json"

const initialUsers = [
  {
    username: "Ricardas",
    email: "petras@gmail.com",
    password: "Ricardas1",
    image: "https://picsum.photos/id/50/200/300",
  },
];

// const allUsers = [
//   {
//     name: "Tomas",
//     image: 'Assets/avatar1.png',
//     age: "20",
//     about: "Friendly"
//   }
// ]

function App() {
  const [myUser, setMyUser] = useState(initialUsers);
  const [users, setUsers] = useState(userProfile);
  const [allGameCards, setAllGameCards] = useState(games);
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [favorites, setFavorites] = useState([]);
  const [friends, setFriends] = useState([]);

  function addFriend(item) {
    const isInFav = friends.find(
      (friend) =>
        friend.id === item.id &&
        friend.name === item.name &&
        friend.image === item.image &&
        friend.age === item.age
    );
    if (isInFav) return;

    setFriends([...friends, item]);
  }

  // React.useEffect(() => {
  //   const data = localStorage.getItem("my-friends")

  //   if (data) {
  //     setFriends(JSON.parse(data))
  //   }
  // })

  React.useEffect(() => {
    localStorage.setItem("my-friends", JSON.stringify(friends));
  });

  // function removeFavorite(item) {
  //   const myFavorites = favorites.filter(
  //     (favorite) =>
  //       favorite.id === item.id &&
  //       favorite.name !== item.name &&
  //       favorite.image !== item.image &&
  //       favorite.age !== item.age
  //   );

  //   setFavorites([...myFavorites]);
  // }

  return (
    <div className="App-Container">
      <BrowserRouter>
        <Toolbar />

        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                users={users}
                setUsers={setUsers}
                userProfile={userProfile}
                addFriend={addFriend}
                friends={friends}
                games={games}
                allGameCards={allGameCards}
                setAllGameCards={setAllGameCards}
              />
            }
          ></Route>
          <Route
            path="/Friends"
            element={<FriendsPage friends={friends} setFriends={setFriends} />}
          ></Route>
          <Route
            path="/Favorite"
            element={
              <FavoritePage favorites={favorites} setFavorites={setFavorites} />
            }
          ></Route>

          <Route path="/Shop" element={<ShopPage buyGames={buyGames}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
