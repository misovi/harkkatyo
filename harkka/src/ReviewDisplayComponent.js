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
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class ReviewDisplayComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      displayData: props.dataPacket,
      input: ""
    };
  }

  render()
  {
    let display = [];
    let hidden = [];
    for(let i=0; i<this.state.displayData.display.length; i++)
    {
      display.push(<Col>{this.state.displayData.display[i]}</Col>);
    }
    return(<div>
      <Container>
          <Row>{display}</Row>
      </Container>
      <Container>
          <Row>
              <Col>
                  <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Username"
                    className="mr-sm-2"
                    value={this.state.usr}
                    onChange={e => this.setState({ input: e.target.value })}/>
                  </Form>
              </Col>
          </Row>
      </Container></div>
    );
  }
}
export default ReviewDisplayComponent
