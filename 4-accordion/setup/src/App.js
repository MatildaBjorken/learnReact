import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
function App() {
  const [accordian, setAccordian] = useState(data);

  return (
    <>
      <main>
        <div className="container">
          <h2>accordion project setup</h2>
          {accordian.map((section) => {
            return (
              <>
                <Question key={section.id} {...section} />
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
