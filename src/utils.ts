import { note, noteNames, majorScaleIntervals } from './constants'
import { FretType } from './components/Frets'

export function getLoopedArrayOfLengthFromIndex<T>(array: Array<T>, length: number, start: number): Array<T> {
  const shiftedArray = array.slice(start).concat(array.slice(0, start))
  let newArray = []
  let pointer = 0
  while (newArray.length < length) {
    newArray.push(shiftedArray[pointer])
    pointer = (pointer + 1) % array.length
  }
  return newArray
}

export const createFretStrings = (): Array<Array<note>> => {
  const stringCreator = (start: number) => getLoopedArrayOfLengthFromIndex(noteNames, 22, start)
  const strings = [note['E'],note['A'],note['D'],note['G'],note['B'],note['E']].map(note => stringCreator(noteNames.indexOf(note)))
  console.log(strings)
  return strings
}

export const createNoteSetFromIntervalsAtRoot = (intervals: Array<number>, root: note): Array<note> => {
  const chromaticLength = intervals.reduce((sum, current) => sum + current, 0 )
  const chromatic = getLoopedArrayOfLengthFromIndex(noteNames, chromaticLength, noteNames.indexOf(root))
  console.log({chromatic})
  const output: Array<note> = []
  
  let pointer = 0
  for (let i = 0; i < intervals.length; i++) {
    output.push(chromatic[pointer])
    pointer = intervals[i] + pointer
  }
  // output.push(chromatic[0]) // append the last octave
  console.log({output})
  return output
}

export const createScale = (root: note, mode: number, octaves = 2): Array<note> => {
  const modeIntervals = getLoopedArrayOfLengthFromIndex(majorScaleIntervals, (octaves * 7) + 1, mode);
  return createNoteSetFromIntervalsAtRoot(modeIntervals, root)
}

export const guitarNotes = createFretStrings()

export const findNotesOnFretboard = (notes: Array<note>, startPosition?: FretType): Array<string> => {
  console.log({notes, startPosition})
  const frets: Array<FretType> = []
  const startFret = startPosition ? startPosition.fret : guitarNotes[0].indexOf(notes[0])
  const startString = startPosition ? startPosition.string : 0
  
  const MAX_UPPER = startFret > 0 ? 3 : 4 // so you dont have to move your hand so much to play a scale
  const MAX_LOWER = startFret > 0 ? 1 : 0

  frets.push({
    fret: startFret,
    string: startString
  })

  let pointerString = startString
  for ( let i = 1; i < notes.length; i++ ) {
    let pointerFret = startFret
    while (
      pointerString < 6 &&
      guitarNotes[pointerString][pointerFret] !== notes[i]
    ) {
      pointerFret++
      if (pointerFret - startFret > MAX_UPPER) {
        pointerString ++
        pointerFret = startFret - MAX_LOWER
      }
    }
    frets.push({
      fret: pointerFret,
      string: pointerString
    })
  }

  return frets.map(getFretId)
}


export const getFretId = (fret: FretType): string => `${fret.fret}:${fret.string}`;
export const getFretFromId = (id: string): FretType => {
  const [fret, string] = id.split(':')
  return {
    fret: Number(fret),
    string: Number(string)
  }
}

export const getNoteFromFret = (fret: FretType): note => guitarNotes[fret.string][fret.fret]