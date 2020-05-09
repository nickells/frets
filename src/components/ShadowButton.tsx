import styled from 'styled-components'

export default styled.button<{selected: Boolean}>`
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