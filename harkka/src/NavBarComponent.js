import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'


class NavBarComponent extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      reviewCount: this.getReviewCount(),
      lessonCount: this.getLessonCount(),
      usr: "",
      psw: "",
    };
    this.handleLogin = this.handleLogin.bind(this)
  }

  getLessonCount()
  {
    return 1;
  }

  getReviewCount()
  {
    return 5;
  }

  handleLogin()
  {
    let out = this.state.usr + this.state.psw;
    this.setState({psw:"",usr:""});
    console.log(out);
  }
  render()
  {
    return(
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href = "Lessons">
          Lessons <Badge pill variant="primary">{this.state.lessonCount}</Badge>
        </Nav.Link>
        <Nav.Link href = "Reviews">
          Reviews <Badge pill variant="primary">{this.state.reviewCount}</Badge>
        </Nav.Link>
      </Nav>
      <Form inline>
      <FormControl
        type="text"
        placeholder="Username"
        className="mr-sm-2"
        value={this.state.usr}
        onChange={e => this.setState({ usr: e.target.value })}/>

        <FormControl
          type="text"
          placeholder="Password"
          className="mr-sm-2"
          value={this.state.psw}
          onChange={e => this.setState({ psw: e.target.value })}/>

        <Button variant="outline-success" onClick = {this.handleLogin} >Login</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default NavBarComponent;
