import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react'

function Child(props){

    const [takenTuna,setTakentuna] = useState(0);

    let incrementTakenTuna = () =>{
        setTakentuna(takenTuna + 1)    
        props.decrementFun(false) 
    }

    return(
        <>
        {/* <p>Name is: {props.name}</p>
        <p>Age is: {props.age}</p> */}

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <p>My name is {props.name} and my age is {props.age} 🐈</p>
          <p>Number of taken tuna: {takenTuna} 🍣</p>
        </Card.Text>
        <Button variant="primary" onClick={incrementTakenTuna}>Give me a tuna please</Button>
      </Card.Body>
    </Card>

        </>
    )
}

export default Child;