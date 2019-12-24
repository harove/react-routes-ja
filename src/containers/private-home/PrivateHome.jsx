import React, { useEffect, useState } from "react";
import { logout } from "../../utils/session";
import { Link } from "react-router-dom";
import { findAllPost } from "../../client/post.client";
import { Container, Row, Col, Table } from "reactstrap";

const PrivateHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    findAllPost()
      .then(response => {
        setPosts(response.data.data);
      })
      .catch(error => {});
  }, []);

  const handlerLogout = () => {
    logout();
  };

  return (
    <Container className="private-home">
      Private Home
      <button onClick={handlerLogout}>Cerrar sesión</button>
      <Link to="/"> Home </Link>
      <Table>
        {/*JSON.stringify(posts)*/}
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default PrivateHome;
