import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
      const [friends , setFriends ] =useState([]);

      useEffect(() =>{
            const urls = 'https://jsonplaceholder.typicode.com/users'
            fetch(urls)
            .then(res => res.json())
            .then(data => setFriends(data))
      },[])
      console.log(friends);
      return (
            <div>
            <h1>Total Friend : {friends.length}</h1>
            {
                  friends.map(friend => < Friend friend ={friend} />)
            }
            </div>
      );
};

export default Home;