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
import Spinner from 'react-bootstrap/Spinner'


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
      loading: false,
      data: null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.sleep = this.sleep.bind(this);
    this.getLessonCount = this.getLessonCount.bind(this);
  }

  getLessonCount()
  {
    /*if(this.state.data==null)
    {
      return null;
    }
    else
    {
      return this.state.data.length;
    }*/
    return 1;
  }

  getReviewCount()
  {
    return null;
  }

  handleLogin()
  {
    let out = this.state.usr + this.state.psw;
    this.setState({psw:"",usr:""});
    console.log(out);
  }

  sleep(ms)
  {
    console.log("sleeping for" + ms + "ms");
    setTimeout(() => {
      this.setState({ loading: false });
    }, ms);
  }

  onClickHandler()
  {
    this.setState({loading:true});
    console.log(this.state.loading);
    this.sleep(2000);
    /*fetch('http://localhost:42069/items')
      .then(response => response.json())
      .then(data => this.setState({ data:data }))
      .then(console.log(this.state.data));*/
  }


  render()
  {
    console.log("render");
    let element;
    if(!this.state.loading)
    {
      console.log("hippi");
      element = <Nav.Link href = "#" onClick={this.onClickHandler}>get Data</Nav.Link>
    }
    else
    {
      console.log("hoppi");
      element=<Spinner animation="border" />
    }
    return(
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href = "#Lessons">
          Lessons <Badge pill variant="primary">{this.state.lessonCount}</Badge>
        </Nav.Link>
        <Nav.Link href = "#Reviews">
          Reviews <Badge pill variant="primary">{this.state.reviewCount}</Badge>
        </Nav.Link>
        {element}
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
