import React from 'react';
import ReactDOM from 'react-dom';
import StudyItem from './StudyItem.js';

class ReviewManager extends React.Component
{
  constructor(props)
  {
    super(props);
    let dataArray = props.dataArray;
    function cleanAndTrim(str)
    {
      let retArr = str.split(',');
      for(let i=0;i<retArr.length;i++)
      {
        retArr[i] = retArr[i].trim();
      }
      return retArr;
    }
    this.rq = [];
    for(let i=0; i<dataArray.length;i++)
    {
      let item = dataArray[i];
      let id = item['id'];
      let sourceValues = cleanAndTrim(item['source']);
      let destinationValues = cleanAndTrim(item['destination']);
      let lvl = item['item_lvl'];
      let classification = item['type'];
      let examples =  cleanAndTrim(item['examples']);
      let anecdote = item['anecdote'];
      this.rq.push(new StudyItem(id, sourceValues, destinationValues, lvl, examples, anecdote, classification,2));
    }
    this.state =
    {
      dataPacket:
      {
        display: null,
        hidden:
        {
          answer: null,
          anecdote: null,
          examples: null
        },
        displayMode: null
      }
    };
    this.currentItem = null;
    this.answerMode = null;
    this.userInput = "";
  }

  childCallBack(input)
  {
    let answers = input
    for(let i=0;i<answers.length;i++)
    {
      answers[i] = answers[i].trim();
    }
    this.currentItem.checkAnswer(answers, this.answerMode);
  }

  drawItem()
  {
    let randomIndex = Math.floor(Math.random() * this.rq.length);
    this.currentItem = this.rq[randomIndex];
    this.answerMode = -1
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
      answers = fullData.source;
    }
    else
    {
      answers=fullData.destination;
      display = fullData.source;
    }
    this.setState(
      {
        display: display,
        answer: answers,
        anecdote: anecdote,
        examples: examples
      }
    );
  }

  handleInput()
  {
    let answers = this.userInput.split(",");
    for(let i=0;i<answers.length;i++)
    {
      answers[i] = answers[i].trim();
    }
    this.currentItem.checkAnswer(answers, this.answerMode);
  }

  render()
  {
    return(<reviewDisplayComponent dataPacket={this.dataPacket}/>);

  }
}

export default ReviewManager;
