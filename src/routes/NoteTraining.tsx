
import React, { useState } from 'react';
import Frets, { FretType } from '../components/Frets';
import ShadowButton from '../components/ShadowButton';
import { note, noteNames } from '../constants';
import { findNotesOnFretboard, createScale, guitarNotes } from '../utils';
import styled from 'styled-components'


const Controls = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`


const NoteTraining = () => {

  const [ clickedFret, setClickedFret ] = useState<FretType>({fret: 0, string: 0});
  const onClickFret = (fret: number, string: number) => {
    setClickedFret({fret, string})
  }

  
  return (
    <>
      <Controls>
        <div>
          { noteNames.map(name => (
            <ShadowButton
              selected={false}
              onClick={() => {}}
            >{name}</ShadowButton>
          ))}
        </div>
      </Controls>
      <Frets
        onClickFret={onClickFret}
        markers={new Set()}
      />
    </>
  )
}

export default NoteTraining