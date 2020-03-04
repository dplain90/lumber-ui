import * as React from 'react'

export const LumberResultsContext = React.createContext(null)



export function LumberResultsProvider(props) {
  const {children } = props
  const [lumberResults, setLumberResults] = React.useState([])
  

  const lumberResultsValue = {
    results: lumberResults,
    setLumberResults
  } 
  
  return (
    <LumberResultsContext.Provider value={lumberResultsValue} >
      {children}
    </LumberResultsContext.Provider>
  )
}
