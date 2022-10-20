import React, {useState} from 'react';
import './App.css';
import Numbers from "./Numbers/Numbers";


function App() {
  const [number, setNumber] = useState([
    {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
    {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
    {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
    {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
    {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
  ]);

  const changeNumbers = () => {
    setNumber([
      {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
      {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
      {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
      {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
      {number: Math.floor(Math.random() * (36 - 5 + 1)) + 5},
    ])
  };

  number.sort((a, b) => {
    return a.number - b.number;
  });

  return (
    <div className="App">
      <button className='button' onClick={changeNumbers}>Change Numbers</button>

      <div className='wrapper'>
        <Numbers number={number[0].number} />
        <Numbers number={number[1].number} />
        <Numbers number={number[2].number} />
        <Numbers number={number[3].number} />
        <Numbers number={number[4].number} />
      </div>
    </div>
  );
}

export default App;
