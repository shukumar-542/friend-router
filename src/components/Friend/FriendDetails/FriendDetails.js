import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
      const {id} =  useParams();
      const [ friends, setFriends] = useState({});

      useEffect(() =>{
            const urls = `https://jsonplaceholder.typicode.com/users/${id}`;
            fetch(urls)
            .then(res => res.json())
            .then(data => setFriends(data))
      },[]);
      // console.log(friends);
      const {name, email,phone } = friends
      return (
            
            <div>
                  {/* <h1>Here you can see friend details {id}</h1> */}
                  <h1>Name : {name}</h1>
                  <p>Emaii : {email}</p>
                  <p>phone : {phone}</p>
            </div>
      );
};

export default FriendDetails;