import React from 'react';

function Greeter(props){
    const greet= ()=>{
        alert(`Hello! ${props.name}`)
    }
  //name, age=18, excitement=1
return(
<div>
<h1>Hello {props.name} {"!".repeat(props.excitement)}</h1>
<h1>You are {props.age} years old.</h1>
<button onClick= {greet}>Click Me!</button>

</div>
)
}

export default Greeter;