// Components
import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/data');
        if (!response.ok) {
          throw new Error('Network response error');
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={`${isLoading ? ' loading' : ''}`}>
      {isLoading ? (
        <div className="loader">Loading... Have a nice day :D</div>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home data={data} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;