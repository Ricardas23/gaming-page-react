import React from "react";

const UserCard = ({ user, addFriend, friends }) => {



    const isInFav = friends.find(
        (friend) =>
          friend.id === user.id &&
          friend.name === user.name &&
          friend.image === user.image &&
          friend.age === user.age
      )
    


  return (
    <div className="userCard-container">
        <div className="user-image">
      <img src={user.image} />
        </div>

      <div className="about-user">
      <h3 className="font">Name: {user.name}</h3>
      <p className="font">Age: {user.age}</p>
      <p className="font">About me: {user.about}</p>

      <div className="add-me-btn-container">
      <button onClick={() => addFriend(user)}>Add me</button>

      </div>
    </div>
    </div>
  );
};

export default UserCard;
