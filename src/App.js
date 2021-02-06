import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Search from './components/Search'
import Route from './components/Route'
import Header from './components/Header'

const items = [
  {
    title: 'What is react?',
    content: 'React is a front end Javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use react?',
    content: 'You use react by creating components',
  },
]

// Options Array

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
]

const App = () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}

export default App
