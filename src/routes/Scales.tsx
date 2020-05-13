
import React, { useState } from 'react';
import Frets, { FretType } from '../components/Frets';
import ShadowButton from '../components/ShadowButton';
import { note, noteNames, scaleNames } from '../constants';
import { findNotesOnFretboard, createScale, guitarNotes } from '../utils';
import styled from 'styled-components'


const Controls = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`


const Scales = () => {

  const [ clickedFret, setClickedFret ] = useState<FretType>({fret: 0, string: 0});
  const onClickFret = (fret: number, string: number) => {
    setClickedFret({fret, string})
    setRoot(guitarNotes[string][fret])
  }

  const [ scale, setScale ] = useState(0)
  const [ root, setRoot ] = useState(note.E)
  

  const scaleMarker: Set<String> = new Set(findNotesOnFretboard(createScale(root, scale), clickedFret))
  
  return (
    <>
      <Controls>
        <div>
          { noteNames.map(name => (
            <ShadowButton
              selected={root === name}
              onClick={() => setRoot(name)}
            >{name}</ShadowButton>
          ))}
        </div>
        <div>
          { scaleNames.map((name, index) => (
            <ShadowButton
              selected={scale === index}
              onClick={() => setScale(index)}
            >{name}</ShadowButton>
          ))}
        </div>
      </Controls>
      <Frets
        onClickFret={onClickFret}
        markers={scaleMarker}
      />
    </>
  )
}

export default Scales