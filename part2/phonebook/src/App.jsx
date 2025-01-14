import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ value, onChangeHandle }) => {
  return (
    <div>
      Filter shown with <input value={value} onChange={onChangeHandle} />
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <Input label='name' value={props.newName} onChange={props.handleNameChange} />
      <Input label='number' value={props.newNumber} onChange={props.handleNumberChange} />
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

const Input = ({ label, value, onChange }) => {
  return (
    <div>
      {label}: <input value={value} onChange={onChange} />
    </div>
  )
}

const Persons = ({ personsToShow }) => {
  return (
    personsToShow.map(person => (
      <div key={person.id}>{person.name} {person.number}</div>
    ))
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(
    person => person.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={search} onChangeHandle={handleSearchChange} />

      <h2>add a new</h2>

      <PersonForm
        onSubmit={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} />

    </div>
  )
}

export default App
