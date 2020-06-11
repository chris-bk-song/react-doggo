import React from 'react';
import './App.css';
import DogImage from './components/DogImage';
import TextInput from './components/TextInput';


function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <h1>Doggz</h1>
      </header>
      <DogImage />
      <TextInput />
    </div>
  );
}

export default App;
