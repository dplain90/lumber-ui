import React from 'react'
import styled from 'styled-components'

const DimensionInput = styled.input`
  padding: 0.5em;
  margin: 0.5em 0em;
  color: black;
  border: 1px solid white;
`

const DimensionLabel = styled.label`
  display: flex;
  margin: 0em 1em;
  color: white;
  flex-direction: column;
  align-items: flex-start;
`

export function LumberDimensionInput(props) { 
  const { onChange, value, label } = props

  return (
    <DimensionLabel>
      {label}
      <DimensionInput onChange={onChange} value={value} />
    </DimensionLabel>
  )
}
