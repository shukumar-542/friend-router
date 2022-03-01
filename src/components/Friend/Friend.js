import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
      console.log(props);
      const { name, email, address, id } = props.friend;

      const friendsDetails = {
            border: '1px solid purple',
            margin: '20px',
            padding: '10px',
            borderRadius: '10px'
      }
      return (
            <div>

                  <div>


                        <div style={friendsDetails}>
                              <h3>Name :{name}</h3>
                              <p>Email : {email}</p>
                              <p>City : {address.city}</p>
                              <p> <Link to={`/friend/${id}`}>
                                    <button>Show Details</button>
                              </Link>
                              </p>
                        </div>

                  </div>
            </div>
      );
};

export default Friend;