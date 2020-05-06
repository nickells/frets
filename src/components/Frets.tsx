import React from 'react';
import styled from 'styled-components'

interface Fret {
  string: number,
  fret: number,
  note: string
}

const frets: Array<Fret> = []

for (let string = 1; string < 7; string++) {
  for (let fret = 1; fret < 23; fret++) {
    frets.push({
      string: string,
      fret: fret,
      note: ''
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
  grid-template-columns: ${columnsString};
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  box-shadow: 0px 00px 40px rgba(0, 0, 0, 0.15);
`

const height: number = 40

const Fret = styled.div<{fret: number, string: number}>`
  display: inline-block;
  width: 1px;
  height: ${height}px;
  position: relative;
  border-left: ${({fret}) => fret > 1 && '1px solid lightgrey'};
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: visible;
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

const String = styled.div`
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: grey;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

interface FretboardProps {
  onClickFret?: (fret: number, string: number) => any;
}

export default ({onClickFret = () => {}}: FretboardProps) => (
  <FretBoard>
    { 
      frets.map(({fret, string}: Fret) => (
        <Fret 
          key={`${fret}:${string}`}
          fret={fret}
          string={string}
          onClick={() => onClickFret(fret, string)}
        >
          { renderInlays(fret, string) }
          <String />
        </Fret>
      ))
    }
  </FretBoard>
)