class StudyItem
{
  constructor(id, sourceValues, destinationValues, lvl, examples, anecdote, classification, requiredCorrAns)
  {
    this.id= id;
    this.source = sourceValues;
    this.destination = destinationValues;
    this.examples = examples
    this.anecdote = anecdote
    this.correct = 0;
    this.level = lvl;
    this.classification = classification;
    /*Operation codes:
    -1: No Operation
    0: user input was correct, make necessary modifications
    1: user input was incorrect, make necessary modifications*/
    this.preparedOperationCode = -1;
    //number of correct answers required for item to move up a level
    //for grammar points this is set to 1, and vocab 2
    this.requiredCorrAns = requiredCorrAns;
    /*queryMode values:
    -1: not set, queries can be made on both source and destination
    0: queries from source language only
    1: queries from destination language only*/
    this.queryMode = -1;
    this.preparedQueryMode = -1
  }

  printableData()
  {
    let dataPacket =
    {
      source: this.sourceValues,
      destination: this.destinationValues,
      examples: this.examples,
      anecdote: this.anecdote
    };
    return dataPacket;
  }

  /*answerMode = 0: the answers are in source language
  answerMode = 1: answers are in destination language.
  In case of grammar points answerMode is always 0*/
  checkAnswer(answers, answerMode)
  {
    let challengeArray = [];
    if(answerMode===0)
    {
      challengeArray = this.sourceValues;
      this.preparedQueryMode = 1;
    }
    else
    {
      challengeArray = this.destinationValues;
      this.preparedQueryMode = 0;
    }

    for(let i = 0; i<challengeArray;i++)
    {
      if(answers.includes(challengeArray[i]) == false)
      {
        this.preparedOperationCode = 1;
        return false;
      }
    }
    this.preparedOperationCode = 0;
    return true
  }

  //executes the prepared operation and returns wether
  //the instance of the object should be removed from
  //the review queue as well as if should be moved to
  //correct answers listing or wrong answers listing
  executeOperation()
  {
    let returnVals =
    {
      popMe: false,
      moveTo: ""
    }
    if(this.preparedOperationCode === 0)
    {
      //if user inputted right answers and accepted it
      this.correct = this.correct + 1
      if(this.correct == this.requiredCorrAns)
      {
        this.level = this.level+1;
        returnVals.popMe = true;
        returnVals.moveTo = "correct";
      }
    }
    else if (this.preparedOperationCode === 1)
    {
      //if user inputted the wrong answer and accepted it
      //// TODO: create formula for decreasing level nicely
      //for now, wrong answer decreases level by 4
      this.level = this.level-4
      if(this.level<0)
      {
        this.level=0;
        returnVals.moveTo = "incorrect"
      }
    }
  }
}

export default StudyItem;
