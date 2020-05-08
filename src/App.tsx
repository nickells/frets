import React from 'react';
import './App.css';
import Frets, { FretType } from './components/Frets';

function getLoopedArrayOfLengthFromIndex<T>(array: Array<T>, length: number, start: number): Array<T> {
  const shiftedArray = array.slice(start).concat(array.slice(0, start))
  let newArray = []
  let pointer = 0
  while (newArray.length < length) {
    newArray.push(shiftedArray[pointer])
    pointer = (pointer + 1) % array.length
  }
  return newArray
}

const createNotes = () => {
  const names = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
  const stringCreator = (start: number) => getLoopedArrayOfLengthFromIndex(names, 22, start)
  const strings = ['E','A','D','G','B','E'].map(note => stringCreator(names.indexOf(note)))
  return strings.reverse()
}

const notes = createNotes()

const handleClick = (fret: number, string: number) => {
  // notes and frets are zero-indexed but strings are not
  console.log(notes[string - 1][fret])
}


const markers: Array<FretType> = [
  {
    fret: 5,
    string: 6,
  },
  {
    fret: 4,
    string: 5,
  },
  {
    fret: 4,
    string: 3,
  },
]

function App() {
  return (
    <div className="App">
      <Frets onClickFret={handleClick} markers={markers}/>
    </div>
  );
}

export default App;
