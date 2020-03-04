import React from 'react'
import styled from 'styled-components'
import { LumberDimensionInput } from './lumber-dimension-input'
import { LumberResultsContext } from './lumber-results-provider'
import { mockData } from '../data/mock-data'
// import { getLumber } from '../api/api'

const LumberForm = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
  align-items: center;
  margin-right: 2em;
`

const LumberSubmitButton = styled.button`
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  padding: 0.6em;
  background-color: gray;
  align-self: flex-end;
  font-weight: bold;
  margin-bottom: 0.5em;
  font-family: "Open Sans";
`

export function LumberRequestForm(props) {
  const { setLumberResults } = React.useContext(LumberResultsContext)
  const [height, updateHeight] = React.useState(0)
  const [width, updateWidth] = React.useState(0)
  const [length, updateLength] = React.useState(0)


  return (
    <LumberForm>
      <LumberDimensionInput onChange={(e) => updateHeight(e.target.value)} value={height} label="Height" />
      <LumberDimensionInput onChange={(e) => updateWidth(e.target.value)} value={width} label="Width" />
      <LumberDimensionInput onChange={(e) => updateLength(e.target.value)} value={length} label="Length" />
      <LumberSubmitButton onClick={
        () => {
          // const lumberMatches = await getLumber(width, height, length)
          // console.log(lumberMatches)
          setLumberResults(mockData)
        }
      }>
        Submit
      </LumberSubmitButton>

    </LumberForm>
  )

}
