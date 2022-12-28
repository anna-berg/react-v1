import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from "react";

function BasicExample() {

    const [count, setCount] = useState(0)
    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180"/>
            <Card.Body>
                <Card.Title>{count}</Card.Title>
                <Card.Text>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Increment</button>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;