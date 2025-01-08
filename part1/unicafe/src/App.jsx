import { useState } from 'react'

const Button = ({ onclick, text }) => {
  return (
    <button onClick={onclick}>{text}</button>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button onclick={() => setGood(good + 1)} text={'good'} />
        <Button onclick={() => setNeutral(neutral + 1)} text={'neutral'} />
        <Button onclick={() => setBad(bad + 1)} text={'bad'} />
      </p>

      <h1>statistics</h1>
      <p>
        good {good}<br />
        neutral {neutral}<br />
        bad {bad}
      </p>
    </div>
  )
}

export default App
