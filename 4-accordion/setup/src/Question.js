import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ info, title }) => {
  //const { title, info } = accordian[data];
  console.log(info);
  const [isOpen, setOpen] = useState(false);

  return (
    <article className="question">
      <header>{title}
      <div className="btn" onClick={() => setOpen(!isOpen)}>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default Question;
