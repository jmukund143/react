import React from 'react';
import Accordion from "./Accordion";
import "./styles.css";


class Editor extends React.Component {
  constructor(props) {
    super(props)
    
    
  }
  
  render() {
    return (
      <div className="app"> 
      <Accordion>
        <div label="Collapsible1">
            <strong>Common Name:</strong> American Alligator
         
            <strong>Distribution:</strong> Texas to North Carolina, United
            States
            <strong>Endangered Status:</strong> Currently Not Endangered
            <div>Hello I amm here</div>
        </div>
        <div label="Alligator Sinensis">
          <p>
            <strong>Common Name:</strong> Chinese Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Eastern China
          </p>
          <p>
            <strong>Endangered Status:</strong> Critically Endangered
          </p>
        </div>
      </Accordion>
      
    </div>
    )
  }
}

export default Editor;