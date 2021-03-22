import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItem = (category) => {
    const filtered = items.filter((item) => item.category === category);
    setMenu(filtered);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>the menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItem={filterItem} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
