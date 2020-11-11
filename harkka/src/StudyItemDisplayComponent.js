import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
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
    let mainContent = [];
    for(let i=0; i<this.source.length; i++)
    {
      //debuggausta varten
      console.log(this.source[i]);
      mainContent.push(<Row>{this.source[i]}</Row>);
    }
    return (
      <Container fluid>
        {mainContent}
      </Container>
    )
  }
}

export default StudyItemDisplayComponent;
