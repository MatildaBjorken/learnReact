import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [data, setData] = useState([]);

  const [loading, setIsLoaded] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  
  
  const getData = async () => {
    setIsLoaded(false);
    //await fetch('https://course-api.com/react-tours-project')
    //.then(response => response.json())
    //.then(recivedData => setData(recivedData))
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  
    //console.log(data[0])
    //this.setState({person : data[0]})
  };

  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id);
    setData(newTours);
  };

  console.log(data);

  const refreshTour = () => {
    getData();
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (data == 0) {
    console.log('0 data');
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => refreshTour()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <Tours data={data} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
