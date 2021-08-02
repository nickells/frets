import React, { useState } from 'react';
import './App.css';
import Scales from './routes/Scales';
import NoteTraining from './routes/NoteTraining';
import styled from 'styled-components';

enum views {
  'notes' = 'notes',
  'scales' = 'scales'
}

const NavButton = styled.button<{active: Boolean}>`
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  padding: 5px;
  margin: 5px;
  transition: all 200ms ease-in-out;
  font-weight: 400;
  ${props => props.active  && `
    border-bottom: 2px solid black;
  `
  }
  &:hover {
    cursor: pointer;
  }
`

function App() {
  const [view, setView] = useState<views>(views.scales)

  return (
    <>
      <div>
        <NavButton
          active={view === views.notes}
          onClick={() => setView(views.notes)}
        >
          Note Guesser
        </NavButton>
        <NavButton
          active={view === views.scales}
          onClick={() => setView(views.scales)}
        >
          Scale Builder
        </NavButton>
      </div>
      <div className="App">
        {
          view === views.notes && <NoteTraining />
        }
        {
          view === views.scales && <Scales />
        }
      </div>
    </>
  );
}

export default App;
