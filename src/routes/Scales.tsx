
import React, { useState } from 'react';
import Frets, { FretType } from '../components/Frets';
import { note, noteNames, scaleNames } from '../constants';
import { getFretId, findNotesOnFretboard, createScale, guitarNotes } from '../utils';
import styled from 'styled-components'


const ShadowButton = styled.button<{selected: Boolean}>`
  border: none;
  outline: none;
  background-color: white;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 5px;
  min-height: 3em;
  min-width: 3em;
  &:hover{
    cursor: pointer;
  }
  transition: all 200ms ease-in-out;
  ${(props) => props.selected && `
    box-shadow: none;
    border: 2px solid darkgrey;
  `
  }
`

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
  

  const scaleMarker = new Set(findNotesOnFretboard(createScale(root, scale), clickedFret))
  
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