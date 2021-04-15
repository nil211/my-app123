import React from 'react';
import './App.css';

import Greeter from './Greeter';
import Navbar from './Navbar';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import Cart from './Cart';


const items  = [
  {id: 1 , name:'Taco Seasoning', price: 2.25, qty:2},
  {id: 2, name:'Pinto Beans', price: 1.99, qty:3},
  {id: 3, name:'Sour Cream', price: 3.50, qty:1}
]

function App() {
  return (
    <div>
       <Navbar />

       <Cart initialitems={items} />
       
       <MoodToggler />
      <h1>Hi I am in App.js... One of the react components of this app</h1>
     <Greeter name="Pareen" age="76" excitement={2} />
     <Greeter name="Nandini" age="76" excitement={2} />
     <Counter steps={5}/>
     <Counter />
    </div>
  );
}

export default App;
 