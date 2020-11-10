class StudyItem
{
  constructor(sourceValues, destinationValues, lvl, classification, requiredCorrAns)
  {
    this.source = sourceValues;
    this.destination = destinationValues;
    this.correct = 0;
    this.level = lvl;
    this.classification = classification;
    //number of correct answers required for item to move up a level
    //for grammar points this is set to 1, and vocab 2
    this.requiredCorrAns = requiredCorrAns;
    sourcePassed = false;
  }

  /*UserInput is an array created from comma separated list inputted by
  user. For now, order of answers is irrelevant, as long as all correct
  answers are present*/
  isCorrect(userInput)
  {
    challengeArray = [];
    if(sourcePassed)
    {
      challengeArray = this.destination;
    }
    else
    {
      challengeArray = this.source;
    }
    for(attempt in userInput)
    {
      for(answer in challengeArray)
      {
        if(attempt != answer)
        {
          return false;
        }
      }
    }
    return true;
  }
}
