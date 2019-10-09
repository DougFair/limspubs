import React from 'react'
import './Abstracts.css'
import LinkButton from './LinkButton'

const Abstracts = (props) => {
    let abstractDisplay = ""
    if (props.abstracts.length) {
    abstractDisplay = props.abstracts.map(ab => {
    return(
    <div className="abstractItems">
        <p>
        {ab.abstract}
        <hr />
        </p>
        
    </div>
    ) 
    })} else if (!props.idlist.length){
    abstractDisplay = 
    <p>No abstracts to display</p>
    }
    return (
    <div className="abstractsContainer">
        
        <div style={{display:"flex", alignItems: "center"}}>
            <h1>Abstracts</h1>
            <LinkButton to='/' style={{marginLeft:"20px", width:"100px"}}>HOME</LinkButton>
          </div>


        {abstractDisplay}
    </div>
    )
}


export default Abstracts