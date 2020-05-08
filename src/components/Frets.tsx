import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components'

interface FretType {
  string: number,
  fret: number,
}

const frets: Array<FretType> = []

for (let string = 1; string < 7; string++) {
  for (let fret = 0; fret < 23; fret++) {
    frets.push({
      string: string,
      fret: fret
    })
  }
}

type PropType = {
  danger?: boolean
}

const columnsString: string = new Array(22)
  .fill(1)
  .map((item, index) => item * (.05 * index + 1))
  .map(num => num.toString() + 'fr')
  .reverse()
  .join(' ')

const inlays = new Set([3, 5, 7, 9, 12, 15, 17, 19, 21])

const FretBoard = styled.div`
  display: grid;
  grid-template-columns: 0.5fr ${columnsString};
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  box-shadow: 0px 00px 40px rgba(0, 0, 0, 0.15);
`

const height: number = 40

const FretMarker = styled.div<FretType>`
  display: inline-block;
  width: 1px;
  height: ${height}px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: visible;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
  border-left: ${({fret}) => {
    if (fret > 1) return '1px solid lightgrey;'
    if (fret === 1) return '4px solid black;'
    else return ''
  }}
`

const renderInlays = (fret: number, string: number) => {
  if (inlays.has(fret)) {
    if (fret !== 12) {
      if (string === 3) return <Inlay />
    }
    // the 12th fret has two inlays
    else {
      if (string === 1 || string === 5) return <Inlay/>
    }
  }
}

const Inlay = styled.div`
  display: inline-block;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  background-color: lightgrey;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
`

const String = styled.div<{hovered: Boolean}>`
  display: inline-block;
  height: 2px;
  background-color: grey;
  position: absolute;
  top: 50%;
  width: calc(100% + 1px);
  left: -1px;
  transform: translateY(-50%);
  transition: transform 100ms ease-in-out;
  z-index: 2;
  ${props => props.hovered && `
    transform: translateY(-50%) scaleY(4);
  `}
`

const Marker = styled.div<{active: Boolean}>`
  display: inline-block;
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 200ms ease-in-out;
  z-index: 2;
  ${props => props.active && `
    transform: translate(-50%, -50%) scale(1);
  `}
`

type FretEvent = (fret: number, string: number) => any
type FretFunction = (fret: number, string: number) => any

interface FretboardProps {
  onClickFret?: FretEvent;
}

const getFretId = (fret: number, string: number): string => `${fret}:${string}`;

interface FretProps {
  fret: number,
  string: number,
  onClickFret: FretEvent,
  marked: Boolean,
}

const Fret = ({fret, string, onClickFret, marked}: FretProps) => {
  const [ isHovered, setIsHovered ] = useState<Boolean>(false)
  return (
    <FretMarker 
      fret={fret}
      string={string}
      onClick={() => onClickFret(fret, string)}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      { renderInlays(fret, string) }
      <String hovered={isHovered}/>
      <Marker active={marked} />
    </FretMarker>
  )
}

export default ({onClickFret = () => {}}: FretboardProps) => {

  return (
    <FretBoard>
      { 
        frets.map(({ fret, string }: FretType): any => (
          <Fret
            key={getFretId(fret, string)}
            fret={fret}
            string={string}
            onClickFret={onClickFret}
            marked={(fret === 3 && string === 2)}
          />
        ))
      }
    </FretBoard>
  )
}