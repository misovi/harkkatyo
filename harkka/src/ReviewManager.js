import React from 'react';
import ReactDOM from 'react-dom';
import 'StudyItem.js';

class ReviewManager extends React.component
{
  constructor(reviewQueue)
  {
    super();
    this.rq = reviewQueue;
    this.state =
    {
      dataPacket:
      {
        display: None,
        hidden:
        {
          answer: None,
          anecdote: None,
          examples: None
        },
        displayMode: None
      }
    };
    this.currentItem = None;
    this.answerMode = None;
    this.userInput = "";
  }

  drawItem()
  {
    let randomIndex = Math.floor(Math.random() * this.rq.length);
    this.currentItem = rq[randomIndex];
    let this.answerMode = -1
    let fullData = this.currentItemItem.printableData();
    let anecdote = fullData.anecdote;
    let examples = fullData.examples;
    let display = [];
    let answers = [];
    if(this.currentItem.queryMode()==-1)
    {
      this.answerMode = Math.floor(Math.random() * 2);
    }
    else this.answerMode = !this.currentItem.queryMode();
    if(this.answerMode==0)
    {
      display=fullData.destination;
      answer = fullData.source;
    }
    else
    {
      answer=fullData.destination;
      display = fullData.source;
    }
    this.setState(
      {
        dataPacket.display: display,
        dataPacket.hidden.answer: answer,
        dataPacket.hidden.anecdote: anecdote,
        dataPacket.hidden.examples: examples
      }
    );
  }

  handleInput()
  {
    let answers = this.userInput.split(",");
    for(answer in answers)
    {
      answer = answer.trim();
    }
    this.currentItem.checkAnswer(answers, this.answerMode);
  }

  render()
  {
    <reviewDisplayComponent dataPacket=this.dataPacket/>

  }
}
