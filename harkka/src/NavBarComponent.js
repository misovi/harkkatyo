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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReviewManager from './ReviewManager.js';


class NavBarComponent extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      reviewCount: null,
      lessonCount: null,
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
    if(this.state.data==null)
    {
      return null;
    }
    else
    {
      return this.state.lessonCount;
    }
  }

  getReviewCount()
  {
    if(this.state.data==null)
    {
      return null;
    }
    else
    {
      return this.state.reviewCount;
    }
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
    console.log("click");
    this.setState({loading:true});
    fetch('http://localhost:9000/api/v1/lang/test/')
      .then(response => response.json())
      .then(data => this.handleData(data));
  }

  handleData(data)
  {
    let count = data.length
    this.setState({
      data: data,
      reviewCount: count,
      lessonCount: count,
      loading: false
    });
    console.log(this.state.data);
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
      <Router><Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href = "#Lessons">
          Lessons <Badge pill variant="primary">{this.state.lessonCount}</Badge>
        </Nav.Link>
        <Link to="/reviews"><Nav.Link href = "#Reviews">
          Reviews <Badge pill variant="primary">{this.state.reviewCount}</Badge>
        </Nav.Link></Link>
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
  <Switch>
  <Route path="/reviews">
    <ReviewManager dataArray={this.state.data} />
  </Route>
  </Switch></Router>
    );
  }
}

export default NavBarComponent;
