
import React, { useState } from 'react';
import Frets, { FretType } from '../components/Frets';
import ShadowButton from '../components/ShadowButton';
import { note, noteNames, scaleNames } from '../constants';
import { findNotesOnFretboard, createScale, guitarNotes } from '../utils';
import styled from 'styled-components'
import InfoText from '../components/InfoText';


const Controls = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`


const Scales = () => {

  const [ startFret, setStartFret ] = useState<FretType>({fret: 0, string: 0});
  const [ scale, setScale ] = useState(0)
  const [ root, setRoot ] = useState(note.E)
  
  const onClickFret = (fret: number, string: number) => {
    setStartFret({fret, string})
    setRoot(guitarNotes[string][fret])
  }

  const onClickNoteName = (name: note) => {
    setStartFret({fret: guitarNotes[0].indexOf(name), string: 0})
    setRoot(name);
  }

  const scaleMarker: Set<String> = new Set(findNotesOnFretboard(createScale(root, scale), startFret))
  
  return (
    <>
      <InfoText>Click a note name or fret and a mode to build a scale starting from that note.</InfoText>
      <Controls>
        <div>
          { noteNames.map(name => (
            <ShadowButton
              selected={root === name}
              onClick={() => onClickNoteName(name)}
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