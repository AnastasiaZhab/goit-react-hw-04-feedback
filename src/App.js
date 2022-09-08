import { useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  const onLeaveFeedback = (event) => {
    const name = event.currentTarget.innerText;

    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
        return;
    }
  };

  const total = (() => good + neutral + bad)();

  const percentage = (() => (total ? Math.round((100 / total) * good) : 0))();

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {total ? (
        <Section title="Statistics">
          <Statistics
            options={options}
            good={good}
            neutral={neutral}
            bad={bad}
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

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (event) => {
//     const name = event.currentTarget.innerText;
//     return this.setState({ [name]: this.state[name] + 1 });
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return (100 / this.countTotalFeedback()) * this.state.good;
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <Feedback options={options} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>

//         {total ? (
//           <Section title="Statistics">
//             <Statistics
//               options={options}
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={total}
//               positivePercentage={percentage}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
