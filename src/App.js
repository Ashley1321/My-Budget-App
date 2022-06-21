import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Home from './Components/home'
import Signup from './Components/signup';
import Login from './Components/login';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  const [transaction, setTransaction] = useState([]);
  
  const addTransaction = ((_amount, _item, _transactionType) =>{
    
    setTransaction((item) =>[...item, {
      id:item.length,
      amount:_amount,
      item:_item,
      transactionType:_transactionType
    }])
    console.log(transaction);

  })
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={Signup}></Route>

        <Route path="/home">
        <Home list={transaction}  add={addTransaction}/>
        </Route>
          <Login />

      </Switch>
      
  
    </Router>
    // <div>
    //   <Home list={transaction}  add={addTransaction}/>
    // </div>
  );
}

export default App;
