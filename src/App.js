import React from 'react';
import './App.css';
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
     <Contact 
     name = "Misha The Dog"
     avatar = "https://i.imgur.com/33laF9H.jpeg"
     online = {true}
     />
     <Contact 
     name = "Marco"
     avatar = "https://i.imgur.com/33laF9H.jpeg"
     online = {false}
     />
    </div>
  );
}

export default App;
