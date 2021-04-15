import React , {useState} from 'react';

function Counter({steps = 1}){
    const [count, setCount] = useState(0);
   
return (
    <div>
        <h1>{count}</h1>
        <button onClick= {()=> setCount(count + steps)}>{steps}</button>

       
    </div>
)

}

export default Counter;