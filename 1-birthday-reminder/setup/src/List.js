import React, { useState } from 'react';

const List = ({ users, setUsers }) => {

  const handleRemove= (id) =>{
    console.log(id);
    // remove item
    const newList = [...users];
    newList.splice(id, 1)

    setUsers(newList)

  }

  return (
    <>
      <h2>list component</h2>

      {users.map((user, id) => {
        return (
          <>
            <div className="person" key={user.id}>
              <img src={user.image} />
              <div>
                <p>{user.name}</p>
                <p>{user.age} years</p>
              </div>
              <button onClick={() => handleRemove(id)}>delete</button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
