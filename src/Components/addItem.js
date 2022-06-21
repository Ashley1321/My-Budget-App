import React, {useState} from "react";
import "../Components/css/add.css"


function AddItem (props){

    const [amount, setAmount] = useState('')
    const [item, setItem] = useState('');
    const [transactionType, settransactionType] = useState('');
    
    const add = (()=>{
        console.log(item);
        console.log(amount);
        console.log(transactionType);

        props.add (amount, item, transactionType);
    })

    return (
        
        <div>
            <h1>Total Transaction</h1>
            <input placeholder="Enter Item" onChange={(e)=> setItem(e.target.value)} /><br></br>
            <input placeholder="Enter Amount" onChange={(e)=> setAmount(e.target.value)} /><br></br>

            <select onChange={(e)=> settransactionType(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select><br></br>
            <button id="btn" onClick={add}>Add</button>

        </div>

    )
}
export default AddItem;