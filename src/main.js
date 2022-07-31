import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Main extends React.Component{



    
render(){
    return (
        <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter citiry" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
           <Button variant="primary" type="submit" onClick={this.handleSubmit}>
        Submit
      </Button>
    </Form>
         </>
    )
}

}

export default Main;