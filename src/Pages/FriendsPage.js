import React from 'react'
import UserCard from '../Components/UserCard'


const FriendsPage = ({friends}) => {
  return (
    <div className='friends-container'>
      <div className='my-friends-text'>
      <h2>My friends</h2>
      </div>
        <div className='my-friends'>
        {friends.map((x) => (
          <UserCard
          friends={friends}
            user={x}
            key={x.id}
          />
        ))}
      



        </div>
    </div>
  )
}

export default FriendsPage