import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  let average = ((good - bad) / all)
  let positive = ((100 * good) / all) + " %"

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbackGood = () => {
    setGood(good + 1)
  }

  const feedbackNeutral = () => {
    setNeutral(neutral + 1)
  }

  const feedbackBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button onClick={feedbackGood} text={'good'} />
        <Button onClick={feedbackNeutral} text={'neutral'} />
        <Button onClick={feedbackBad} text={'bad'} />
      </p>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
