import React from 'react'
import './PaperDisplay.css'
import moment from 'moment';
import {Link} from 'react-router-dom'
import LinkButton from './LinkButton'

const PapersDisplay = (props) => {
  if((props.inputedDate1 || props.inputedDate2) &&!props.papersListInputedDate.length) {
    return (
      <div>
      {!props.inputedDate2 ? 
      <h2>No papers published at LIMS since {moment(props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")}</h2>
      : 
      <h2>No papers published at LIMS between {moment(props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")} - {moment(props.inputedDate2, "YYYY-MM-DD").format("DD/MM/YYYY")} </h2>
      }
    </div>
    )
  }
  if(props.papersListInputedDate.length){
    const inputedDate = props.papersListInputedDate.map(data => 
      <div className="paperlistContainer"
      key={data.id}>
      <span>
        <span className="title">{`${data.title} `}</span>
        <span className="authors">{`${data.authors}, `}</span>
        <span className="journal">{`${data.journal},  `}</span>
        <span className="doi">{`${data.doi}, `}</span>
        <span className="pmid">PMID: <a href={`https://www.ncbi.nlm.nih.gov/pubmed/${data.id}`} target="_blank">{data.id}.</a></span>
      </span>
      </div>
  )
  return (
    <div>
      {!props.inputedDate2 ? 
      <div style={{display:"flex", alignItems: "center"}}>
      <h2>LIMS papers published since {moment(props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")}</h2>
      <LinkButton to='/abstracts' style={{marginLeft:"20px"}}>Retrieve Abstracts</LinkButton>
      </div>
      :
      <div style={{display:"flex", alignItems: "center"}}>
        <h2>LIMS papers published between {moment(props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")} - {moment(props.inputedDate2, "YYYY-MM-DD").format("DD/MM/YYYY")} </h2>
        <LinkButton to='/abstracts' style={{marginLeft:"20px"}}>Retrieve Abstracts</LinkButton>
      </div>
      


      }
      {inputedDate}
    </div>
  )
  } else {
    const month = props.papersList.map(data => 
    
        <div className="paperlistContainer"
        key={data.id}>
        <span>
          <span className="title">{`${data.title} `}</span>
          <span className="authors">{`${data.authors}, `}</span>
          <span className="journal">{`${data.journal},  `}</span>
          <span className="doi">{`${data.doi}, `}</span>
          <span className="pmid">PMID: <a href={`https://www.ncbi.nlm.nih.gov/pubmed/${data.id}`} target="_blank">{data.id}.</a></span>
        </span>
        </div>
    )
     
    return (
        <div style={{margin: "10px 50px 10px 50px"}}>        
          <div style={{display:"flex", alignItems: "center"}}>
            <h2>Papers published in the last 30 days</h2>
            <LinkButton to='/abstracts' style={{marginLeft:"20px"}}>Retrieve Abstracts</LinkButton>
          </div>
          {!props.papersList.length ? 
          <p>There were no LIMS papers published yesterday in the last 30 days.</p>
          : month}
        </div>
    )
  } 
}

export default PapersDisplay