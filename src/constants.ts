import { createFretStrings } from "./utils"

export enum note {
  'A' = 'A',
  'A♯' ='A♯',
  'B' = 'B',
  'C' = 'C',
  'C♯' ='C♯',
  'D' = 'D',
  'D♯' ='D♯',
  'E' = 'E',
  'F' = 'F',
  'F♯' ='F♯',
  'G' = 'G',
  'G♯' ='G♯',
}

export const noteNames: Array<note> = [
  note['A'],
  note['A♯'],
  note['B'],
  note['C'],
  note['C♯'],
  note['D'],
  note['D♯'],
  note['E'],
  note['F'],
  note['F♯'],
  note['G'],
  note['G♯']
]

export const majorScaleIntervals: Array<number> = [2, 2, 1, 2, 2, 2, 1]

export const scaleNames: Array<string> = [
  'ionian', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'aeolian', 'locrian'
]