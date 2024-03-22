import {formatter} from "../util/investment"


export default function ResultsTable({resultsArr}){
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Value end of year</th>
                    <th>Annual investment</th>

                </tr>
            </thead>
            <tbody>
                {resultsArr.map((result) => {
                    const totalInterest = year.valueEndOfYear -
                    return(
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.annualInvestment)}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}