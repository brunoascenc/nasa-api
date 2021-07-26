import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PictureCard from './PictureCard';

const API_KEY = process.env.REACT_APP_NASA_KEY;

export interface IState {
  picture: {
    title: string;
    explanation: string;
    url: string;
    date: string;
    copy: string;
  }[];
}

const App: React.FC = () => {
  const [picture, setPicture] = useState<IState['picture']>([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        setPicture(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <PictureCard picture={picture} />
    </div>
  );
};

export default App;
