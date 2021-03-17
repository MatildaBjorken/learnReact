import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [users, setUsers] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3> {users.length} birtdays today</h3>
          <List users={users} setUsers={setUsers} />
          <button onClick={() => setUsers([])}>clear all</button>
        </section>
      </main>
    </>
  );
}

export default App;
