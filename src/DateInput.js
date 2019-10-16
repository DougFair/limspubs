import React, {Component} from 'react'
import './DateInput.css'
import institutes from './institutes'

class DateInput extends Component {
    state = {
        newStartDate: "",
        newEndDate: "",
        institute: ""
}


    handleSubmit = (evt) => {
        evt.preventDefault()
        if((!this.state.newStartDate && !this.state.newEndDate) || (!this.state.newStartDate && this.state.newEndDate)){
            this.setState({newStartDate: "", newEndDate: ""})
            this.props.dateInput("Error")
        } else {
        this.props.dateInput(this.state.newStartDate, this.state.newEndDate)
        this.setState({newStartDate: "", newEndDate: ""}) 
        }  
    }
    
    handleChange = (evt) => (
        this.setState({[evt.target.name]: evt.target.value})
        )

    handleInstituteChange = (evt) => {
        this.setState({institute: evt.target.value})        
        this.props.instituteSelect(evt.target.value)
    }
        

    render() {
     let dropdown = institutes.map(item => {
     return(
     item === "" ? 
     <option value={item} disabled selected hidden>Select an MRI</option>
     :
     <option value={item}>{item}</option>
     )})
        
        
    
    return (
       <div> 
        <div className="dateInput">
            
                <div className="dropdown" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <p style={{margin: "4px", display: "flex", justifyContent: "flex-start"}}>Select Medical Research Institute</p>
                
                    <div id="dropdown" className="select-css">
                        <select onChange={this.handleInstituteChange} className="dropdown">
                            {dropdown}
                        </select>
                    </div>
                </div>
           
                <form  className="dateInputForm" onSubmit={this.handleSubmit}           style={{marginRight: 0}}>
                    <div className="formItems">
                    <div>
                        <div className="column"><p style={{margin: "5px 0 0 0", padding: 0}}>Start Date</p></div>  
                        <div className="column">
                            <input type="date" name="newStartDate" value={this.state.newStartDate} placeholder="DD/MM/YYYY" onChange={this.handleChange}/>   
                        </div>
                    </div>
                    
                    <div > 
                        <div className="column" ><p style={{margin: "0 8px 0 0", padding: 0}}>End Date</p></div>
                        <div className="column">
                            <input type="date" name="newEndDate" value={this.state.newEndDate} placeholder="Present or enter DD/MM/YYYY" onChange={this.handleChange}/>
                        </div>
                    </div>
                    
                    <div className="column" style={{display: "flex", justifyContent: "center"}}>
                        <button className="dateInputButton" type="submit" >Submit</button>
                    </div>
                    
                    
                    </div>

                </form>
                
            
        </div>    
            <div className="titleInstruct" >
                <p style={{fontWeight: "300", fontSize: "0.8rem"}}>CUSTOM DATE SEARCH: You must enter a Start Date.</p>
                <p style={{margin: "2px 5px 2px 0", padding: 0, fontWeight: "300", fontSize: "0.8rem"}}> If you do not enter an End Date it will default to today.</p>
            </div>
        </div>   
        )
    }
}

export default DateInput