import React from 'react';
import './App.css';
import Scales from './routes/Scales';
import NoteTraining from './routes/NoteTraining';


function App() {
  return (
    <div className="App">
      {(() => {
        switch (window.location.pathname) {
          case '/notes':
            return <NoteTraining />
          case '/scales':
          default:
            return <Scales />
        }
      })()}
    </div>
  );
}

export default App;
