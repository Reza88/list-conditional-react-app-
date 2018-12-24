import React from 'react'; 
const Validation = (props) =>{
    let validationMessage = 'Text Long Enough'; 
    if(props.inputLength<=5){
        validationMessage = 'Text Too Short'; 
    }

    return(
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default Validation