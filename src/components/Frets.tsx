import React, { useState } from 'react';
import styled from 'styled-components'
import { getFretId } from '../utils'

export interface FretType {
  string: number,
  fret: number,
}

const frets: Array<FretType> = []

for (let string = 5; string >= 0; string--) {
  for (let fret = 0; fret < 23; fret++) {
    frets.push({
      string: string,
      fret: fret
    })
  }
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
  &:hover {
    cursor: pointer;
  }
`

const height: number = 40

const FretSpace = styled.div<{fret: number, string: number, disabled: boolean}>`
  display: inline-block;
  height: ${height}px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border-left: ${({fret}) => {
    if (fret > 1) return '1px solid lightgrey;'
    if (fret === 1) return '4px solid black;'
    else return 'none;'
  }}
  ${props => props.disabled && `
    background-color: #DDD;
  `}
  &:hover {
    background-color: #EEE;
  }
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
  z-index: 2;
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
    transform: translateY(-50%) scaleY(2);
  `}
`

const Marker = styled.div<{active: Boolean, hollow: Boolean}>`
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
  ${props => props.hollow && `
    box-sizing: border-box;
    background-color: white;
    border: 2px solid black;
  `}
`

type FretEvent = (fret: number, string: number) => any

interface FretboardProps {
  onClickFret?: FretEvent;
  markers: Set<String>;
  activeRange?: Array<number>;
}


interface FretProps {
  fret: number,
  string: number,
  onClickFret: FretEvent,
  marked: Boolean,
  disabled: boolean,
}

class Fret extends React.Component<FretProps> {
  shouldComponentUpdate(nextProps: FretProps){
    if (this.props.marked !== nextProps.marked) return true
    if (this.props.disabled !== nextProps.disabled) return true
    else return false
  }

  render(){
    const {fret, string, onClickFret, marked, disabled } = this.props;
    return (
      <FretSpace 
        fret={fret}
        string={string}
        onClick={() => onClickFret(fret, string)}
        disabled={disabled}
      >
        { renderInlays(fret, string) }
        <String hovered={false}/>
        <Marker active={marked} hollow={fret===0} />
      </FretSpace>
    )
  }    
}

export default ({onClickFret = () => {}, markers = new Set(), activeRange = [0, 23]}: FretboardProps) => {
  return (
      <FretBoard>
        { 
          frets.map(({ fret, string }: FretType): any => {
            const id: string = getFretId({fret, string})
            return <Fret
              key={id}
              fret={fret}
              string={string}
              onClickFret={onClickFret}
              marked={markers.has(id)}
              disabled={fret >= activeRange[1] || fret < activeRange[0]}
            />
          })
        }
      </FretBoard>
  )
}