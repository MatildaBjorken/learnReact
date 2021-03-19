import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [users, setUsers] = useState(0);
  const { name, image, job, text } = people[users];

  const index = (nr) => {
    if (nr > people.length - 1) {
      return 0;
    }

    if (nr < 0) {
      return people.length - 1;
    }
    return nr;
  };

  const nextPage = () => {
    setUsers((people) => {
      let update = people + 1;
      console.log(update);
      return index(update);
    });
  };

  const prevPage = () => {
    setUsers((people) => {
      let update = people - 1;
      console.log(update);
      return index(update);
    });
  };

  const surprise = () => {
    let len = people.length;
    //const randomItem = people[Math.floor(Math.random() * len)];
    //console.log(randomItem)

    let user = Math.floor(Math.random() * len);
    if (user === users) {
      user = users +1
    }
    setUsers(index(user));
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPage}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPage}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={surprise}>
          surprise me
        </button>
      </article>
    </>
  );
};

export default Review;
