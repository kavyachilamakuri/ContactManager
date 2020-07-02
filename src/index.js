import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {useState} from 'react';
ReactDOM.render(<h1>Contact Manager</h1>,document.getElementById('root1'));
function AddForm(props){
  const[person,setPerson]=useState("");
  function handleChange(e){
    setPerson(e.target.value);
  }
  function handleSubmit(e){
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Contact" onChange={handleChange} value={person}></input>
      <button type="submit" >Add</button>
    </form>
  );
}
function PeopleList(props){
  const arr=props.data;
  const listData=arr.map((val,index) => 
  <li key={index}>{val}</li>);
  return <ul>{listData}</ul>
}
const contacts=["Edward Cullen","Chandler Bing","Jack Dawson"];

function ContactManager(props){
  
  const[contacts,setContacts]=useState(props.data);
  function addPerson(name){
    setContacts([...contacts,name]);
  }
return(<div>
  <AddForm handleSubmit={addPerson} />
  <PeopleList data ={contacts}></PeopleList>
  </div>)}
ReactDOM.render(<ContactManager data={contacts} />,document.getElementById('igroot1'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
