import React , {useState} from 'react';
import './MoodToggler.css';

function MoodToggler({steps = 1}){
    
    const [isHappy, setisHappy] = useState(true);
    const toggleisHappy = ()=> {setisHappy(!isHappy)}
    const styles = { color : isHappy? "green" : "red"};
return (
    <div>
        <h1 className="MoodToggler"
        style={styles} 
        onClick= {toggleisHappy}> {isHappy===true ? ":)    Happy!" : ":(   Sad!"}</h1>
    </div>
)

}

export default MoodToggler;