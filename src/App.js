import { Component } from "react";
import "./App.css";
import Feedback from "./components/Feedback";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const name = event.currentTarget.innerText;
    return this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (100 / this.countTotalFeedback()) * this.state.good;
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              options={options}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;
