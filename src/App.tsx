import React from 'react';
import './App.css';
import Scales from './routes/Scales';
import NoteTraining from './routes/NoteTraining';


function App() {
  return (
    <div className="App">
      {(() => {
        const pathParts = window.location.pathname.split('/').filter(item => item !== '')
        switch (pathParts[pathParts.length - 1]) {
          case 'notes':
            return <NoteTraining />
          case 'scales':
          default:
            return <Scales />
        }
      })()}
    </div>
  );
}

export default App;
