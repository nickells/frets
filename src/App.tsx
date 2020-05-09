import React from 'react';
import './App.css';
import Scales from './routes/Scales';
import NoteTraining from './routes/NoteTraining';

function App() {
  return (
    <div className="App">
      {(() => {
        switch (window.location.pathname) {
          case '/scales':
            return <Scales />
          case '/notes':
            return <NoteTraining />
        }
      })()}
    </div>
  );
}

export default App;
