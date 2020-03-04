import React from 'react';
import styled from 'styled-components'
import {  lightBrown } from './styles/colors'
import { heading, copy } from './styles/typography'
import { LumberRequestForm } from './components/lumber-request-form'

import { LumberResults } from './components/lumber-results'
import './App.css';
import { LumberResultsProvider } from './components/lumber-results-provider';

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: whitesmoke;
  flex-direction: column;
`

const LumberHeader = styled.header`
  width: 100%;
  background-color: ${lightBrown};
  padding: 1em 0em 1em 1em;
  display: flex;
  justify-content: space-between;
`

const LumberHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`
const LumberHeading = styled.h1`
  color: white;
  font-size: 36px;
  letter-spacing: 0.075em;
  font-family: ${heading};
  margin-bottom: 0em;
`
const LumberCatchPhrase = styled.div`
  color: white;
  font-family: ${copy};
  font-size: 14px;
  text-decoration: italic;
`

const ResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3em;
`
function App() {
  return (
    <AppContainer className="App">
      <LumberResultsProvider>
        <LumberHeader>
          <LumberHeadingContainer>
            <LumberHeading>
              Lumber Emporium
        </LumberHeading>
            <LumberCatchPhrase>
              The best part of waking up, is lumber in your truck!
        </LumberCatchPhrase>
          </LumberHeadingContainer>
          <LumberRequestForm />
        </LumberHeader>
        <ResultsContainer>
          <LumberResults /> 
        </ResultsContainer>
      </LumberResultsProvider>
    </AppContainer>



  );
}

export default App;
