import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class StudyItemDisplayComponent extends React.Component
{
  constructor()
  {
    super();
    //foo
    this.source=['grön','grönt','gröna'];
    this.destination=['vihreä'];
    this.anecdote= "Lorem Ipsum";
    this.examples= ['De gröna skor', 'Min bila är grön', 'Huset är grönt']
  }

  render()
  {
    let source = [];
    let destination = [];
    let examples = [];
    for(let i=0; i<this.source.length; i++)
    {
      //debuggausta varten
      console.log(this.source[i]);
      source.push(<Col>{this.source[i]}</Col>);
    }

    for(let i=0; i<this.destination.length; i++)
    {
      //debuggausta varten
      console.log(this.source[i]);
      destination.push(<Col>{this.destination[i]}</Col>);
    }

    for(let i=0; i<this.examples.length; i++)
    {
      //debuggausta varten
      console.log(this.source[i]);
      examples.push(<Row>{this.examples[i]}</Row>);
    }
    return (
      <Container fluid>
        <Row>{source}</Row>
        <Row>{destination}</Row>
        <Row>{this.anecdote}</Row>
        <Col>{examples}</Col>
      </Container>
    )
  }
}

export default StudyItemDisplayComponent;
