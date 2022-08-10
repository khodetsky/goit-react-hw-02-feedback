import { GlobalStyle } from './GlobalStyles';
import { Section } from './Section/Section';
import { Component } from "react";
import { Box } from './Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onBtnClick = (evt) => {
    if (evt.target.textContent.toLowerCase() === "good") {
      this.setState(prevState => ({ good: prevState.good + 1 }))
    } else if (evt.target.textContent.toLowerCase() === "neutral") {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
    } else if (evt.target.textContent.toLowerCase() === "bad") {
      this.setState(prevState => ({ bad: prevState.bad + 1 }))
    }
  };


  

  render() {
    const { good, neutral, bad } = this.state;
    let positiveFeedback = 0;
    let totalValue = 0;

    const countTotalFeedback = () => {
      totalValue = good + neutral + bad;
      return totalValue;
    }
    const countPositiveFeedbackPercentage = () => {
      if (good !== 0) {
        positiveFeedback = Math.round(good / totalValue * 100);
      return positiveFeedback;
      }
    }

    countTotalFeedback();
    countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback"/>
        <Box>
          <button onClick={this.onBtnClick}>Good</button>
          <button onClick={this.onBtnClick}>Neutral</button>
          <button onClick={this.onBtnClick}>Bad</button>
        </Box>
          <Section title="Statistics" />
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bed: {bad}</p>
          <p>Total: {totalValue}</p>
          <p>Positive feedback: {positiveFeedback}%</p>


        <GlobalStyle/>
      </>
    );
  }
};
