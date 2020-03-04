import * as React from 'react'
import styled from 'styled-components'
import { LumberResultsContext } from './lumber-results-provider'
import { lightBrown, gray } from '../styles/colors'
import { heading } from '../styles/typography'
const ResultList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1em 0em;
  border-radius: 4px;
  border: 3px solid ${lightBrown};
`

const ResultListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  padding: 2em 0em 2em 3em;
  min-width: 800px;
`

const ResultDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  color: black;
`
const ResultDetailLabel = styled.span`
  font-size: 20px;
  color: ${gray};
  font-family: ${heading};
    letter-spacing: 0.075em;
  font-weight: bold;
`


function LumberResultListItem(props) {
  const { brand, price, quality, material } = props.lumber

  return (
    <ResultListItem style={{
      borderTop: !props.first ? `3px solid ${lightBrown}`  : "none"
    }}>
      <ResultDetail>
        <ResultDetailLabel>
          Brand
        </ResultDetailLabel>
        {brand}
      </ResultDetail>      

      <ResultDetail>
        <ResultDetailLabel>
          Price
        </ResultDetailLabel>
        {price}
      </ResultDetail>      

      <ResultDetail>
        <ResultDetailLabel>
          Quality
        </ResultDetailLabel>
        {quality}
      </ResultDetail>      

      <ResultDetail>
        <ResultDetailLabel>
          Material
        </ResultDetailLabel>
        {material}
      </ResultDetail>      
    </ResultListItem>
  )


} 

export function LumberResults(props) {
  const { results } = React.useContext(LumberResultsContext)

  if(!results.length) {
    return ''
  }

  return (
    <ResultList>
      { 
        results.map((lumber, idx) => {
          return (<LumberResultListItem key={idx} first={idx === 0} lumber={lumber} />)
        })
      }
    </ResultList>
  )
}
