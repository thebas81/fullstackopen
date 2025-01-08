import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const feedbackGood = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1
    setGood(updatedGood)
    setAll(updatedAll)
    setAverage((updatedGood - bad) / updatedAll)
    setPositive((100 * updatedGood) / updatedAll)
  }

  const feedbackNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setAverage((good - bad) / updatedAll)
    setPositive((100 * good) / updatedAll)
  }

  const feedbackBad = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1
    setBad(updatedBad)
    setAll(updatedAll)
    setAverage((good - updatedBad) / updatedAll)
    setPositive((100 * good) / updatedAll)
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
      <p>
        good {good}<br />
        neutral {neutral}<br />
        bad {bad}<br />
        all {all}<br />
        average {average}<br />
        positive {positive} %<br />
      </p>
    </div>
  )
}

export default App
