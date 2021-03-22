import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);
//new set only gets the unique values

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === 'all') {
      setMenu(items);
      return;
    }

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
        <Categories filterItem={filterItem} categories={categories} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
