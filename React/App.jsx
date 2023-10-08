import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import actor from './actor'
import Actor from './actor'
import singer from './Singers'
import Singers from './Singers'

function App() {
  // const [count, setCount] = useState(0)

  const actors = ['sakib','S raj','Rubel','sajid'];

  const singers = [
    {id:1, name:'riad' ,  age:20},
    {id:2, name:'akash',  age:21},
    {id:3, name:'sakib',  age:22},
    {id:4, name:'sajid',  age:23},
  ]

  return (
    <>      
       <h1>Vite + React</h1>



       {
     
        singers.map(singer => <Singers singer={singer}></Singers>)
       }


       {/* {
        actors.map(actor => <Actor name={actor}></Actor>)
       } */}



      
        {/* <Actor name='Raz'></Actor> */}


       {/* <Todo task="Learn React" isDone={true}></Todo>
       <Todo task="Core Concept" isDone={false}></Todo>
       <Todo task="Try Jsx" isDone={true}></Todo>
       
       <Person></Person>
       <Student name="Laptop" ></Student>
       <Student name="Mobile" price="1700"></Student>
       <Desc name="ASUS" price="10809"></Desc>
       <Developer ></Developer>
       <Dev></Dev>       */}
    </>
  )
}

function Person(){
  const age = 25;
  const money = 20;
  const Person = {name: 'rakibul',age:12}
  return <h3>I am a Person with age: {Person.age}</h3>
}


function Student(props){
  console.log(props);
  return(
    <div>
        <h3>calling from student function</h3>
        <h2>Product Type : {props.name}</h2>
        <h2>The price : {props.price}</h2>
    </div>
  )
}


function Desc({name , price}){
  return(
    <div>
        <h3>calling from student function</h3>
        <h2>Product Type : {name}</h2>
        <h2>The price : {price}</h2>
    </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding : '20px',
    border: '2px solid blue',
    borderRadius: '20px' 
  }

  return (
    <div style={developerStyle}>
      <h5>jS Developer</h5>
      <p>Coding:</p>
    </div>
  )
}


function Dev(){
  return (
    <div style={{
      margin: '20px',
      padding : '20px',
      border: '2px solid red',
      borderRadius: '20px' 
    }}>
      <h5>jS Developer</h5>
      <p>Coding:</p>
    </div>
  )
}



export default App
