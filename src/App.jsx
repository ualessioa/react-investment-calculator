import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import ResultsTable from "./components/ResultsTable"

import {calculateInvestmentResults} from "./util/investment"



function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleChange(newValue, inputIdentifier){
        setUserInput((prevUserInput) => {
            return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
            }
        }
        )
    }
  
  let results = calculateInvestmentResults(userInput)
  
  return (
    <>
      <Header id="header"/>
      <UserInput inputobj={userInput} onChange={handleChange}/>
      <ResultsTable resultsArr={results}/>
    </>
  )
}

export default App
