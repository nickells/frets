
import React, { useState } from 'react';
import Frets from '../components/Frets';
import ShadowButton from '../components/ShadowButton';
import { note, noteNames } from '../constants';
import { createFretStrings, getFretId, getNoteFromFret, getFretFromId } from '../utils';
import styled from 'styled-components'


const Controls = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const NoteTraining = () => {
  const notes = createFretStrings();
  const [ range, setRange ] = useState<Array<number>>([0, 4])
  const [ beginning, end ] = range
  const [ streak, setStreak ] = useState<number>(0)

  const getNextMarkerToGuess = (): string => {
    const string = Math.floor(Math.random() * notes.length)
    const fret = Math.floor(Math.random() * end)
    return getFretId({string, fret})
  }

  const [ markerToGuess, setMarkerToGuess ] = useState<string>(getNextMarkerToGuess())


  const onNextNote = () => {
    function getNext(): string{
      const next = getNextMarkerToGuess()
      if (next === markerToGuess) return getNext()
      else return next
    }

    setMarkerToGuess(getNext())
  }

  const onClickNote = (noteName: note) => {
    if (getNoteFromFret(getFretFromId(markerToGuess)) === noteName) {
      onNextNote();
      setStreak(streak + 1)
    }
    else {
      setStreak(0)
    }
  }

  const handleClickFret = (fret: number) => {
    // todo: this doenst rly work yet
    if (fret > beginning) {
      setRange([beginning, fret])
    }
    else {
      setRange([fret, end])
    }
  }

  return (
    <>
      <Controls>
        <div>
          { noteNames.map(name => (
            <ShadowButton
              key={name}
              selected={false}
              onClick={() => onClickNote(name)}
            >{name}</ShadowButton>
          ))}
        </div>
      </Controls>
      <h2>Streak: {streak}</h2>
      <Frets
        onClickFret={handleClickFret}
        markers={new Set([markerToGuess])}
        activeRange={range}
      />
    </>
  )
}

export default NoteTraining