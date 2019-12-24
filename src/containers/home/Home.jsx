import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card,CardBody,CardTitle } from "reactstrap";
import { findAllPost } from "../../client/post.client";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    findAllPost()
      .then(response => {
        const posts = response.data.data;
        this.setState({
            posts,
        })
      })
      .catch(error => {
        
      });
  }

  render() {
    const {posts} = this.state  
    return (
      <Container className="home">
        Home
        <Row>
        {posts.map(post => (
            <Col key = {post.id}>
                <Card>
                    <CardTitle>{post.title}</CardTitle>
                    <CardBody>{post.description}</CardBody>
                </Card>
            </Col>
        ))}
        </Row>
       
      </Container>
    );
  }
}
export default Home;
