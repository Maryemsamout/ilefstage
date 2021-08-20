/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Jumbotron, Container,Col,Row } from 'reactstrap';
import bgimage from './../images/picnews.jpg'
import image from './../images/news.jpg'


const Blog = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} className="text-light">
        <Container fluid>
          <h1 className="display-3 text-center">News</h1>
          <p className="lead text-center">This page for news.</p>
        </Container>
      </Jumbotron>

    <Container>
      <Row>
        <Col>
        <div className="card mb-3">
        <div className="col-md-20">
            <div className="card-body">
            <img src={image} className="card-img" alt="image" width="200px"/>
            <br></br>
                <h5 className="card-title">How to Get an IT Job: Succeeding in Your IT Career</h5>
                 </div>
        </div>
       </div>
     </Col>
  </Row>
</Container>
    

    </div>
  );
};

export default Blog;