import React from 'react';
import { Link } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input, FormText,Card } from 'reactstrap';
import { Container, Row } from 'reactstrap';

const Contact = (props) => {
  return (
    
    <div className="margin-form"> 
    <Card>
    <div className="margin-form text-center">
    <Label><strong>CONTACT US</strong></Label>
    <br></br>
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
        <Col sm={10}>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Text Area</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>File</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
         
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="checkbox2" sm={2}>Checkbox</Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Check me out
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
    </Card>
    </div>
    
  );
}

export default Contact;