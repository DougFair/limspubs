import React, {Component} from 'react'
import moment from 'moment';
import './DateInput.css'


class DateInput extends Component {
    state = {
        newStartDate: "",
        newEndDate: "",
}



    handleSubmit = (evt) => {
        // console.log("valid" + (moment(this.state.newStartDate, 'DD/MM/YYYY').isValid()))
        
        evt.preventDefault()
        this.props.dateInput(this.state.newStartDate, this.state.newEndDate)
        
        this.setState({newStartDate: "", newEndDate: ""})
       
    }
    
    handleChange = (evt) => (
        this.setState({[evt.target.name]: evt.target.value})
        )



    render() {
     
    return (
        <div className="dateInput">
         
           
                <div className="searchTitle">
                    <p>Custom date search: You must enter a start date </p>
                    <p>If you don't enter an end date it will default to today </p>
                    </div>
                
                <form  className="dateInputForm" onSubmit={this.handleSubmit} style={{marginRight: 0}}>
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

              
        )
    }
}

export default DateInput