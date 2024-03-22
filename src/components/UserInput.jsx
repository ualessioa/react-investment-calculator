
export default function UserInput({ inputobj, onChange}){
    

    
   
    return (
        <section id="user-input">
            <div className="input-group">
                <p><label>INITIAL INVESTMENT</label>
                <input type="number" value={inputobj.initialInvestment} onChange={(e) =>onChange(e.target.value, "initialInvestment")} required/></p>
                <p>
                <label>ANNUAL INVESTMENT</label>
                <input type="number" value={inputobj.annualInvestment} onChange={(e) =>onChange(e.target.value, "annualInvestment")}required/>
                </p>

            </div>
            <div className="input-group">
                <p><label>EXPECTED RETURN</label>
                <input value={inputobj.expectedReturn} type="number" onChange={(e) =>onChange(e.target.value, "expectedReturn")} required/></p>
                <p><label>INVESTMENT DURATION</label>
                <input value={inputobj.duration} type="number" onChange={(e) =>onChange(e.target.value, "duration")} required/></p>
            </div>
        </section>
    )
}