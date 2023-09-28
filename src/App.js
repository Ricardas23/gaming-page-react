import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Toolbar from './Components/Toolbar';
import MainPage from './Pages/MainPage';
import FriendsPage from './Pages/FriendsPage';
import FavoritePage from './Pages/FavoritePage';

const initialUsers = [
  {
    username: "Ricardas",
    email: "petras@gmail.com",
    password: "Ricardas1",
    image: "https://picsum.photos/id/50/200/300",
  },
];

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [userLoggedIn, setUserLoggedIn] = useState();


  return (
    <div className="App-Container">

      <BrowserRouter>
      <Toolbar/>
      
      <Routes>

        <Route path='/gaming-page-react' element={ <MainPage/> } ></Route>
        <Route path='/Friends' element={ <FriendsPage/> } ></Route>
        <Route path='/Favorite' element={ <FavoritePage/> } ></Route>


      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
