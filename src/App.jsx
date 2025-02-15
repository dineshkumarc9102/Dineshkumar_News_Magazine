
import { useState } from 'react'
import { NavBar } from './Components/NavBar'
import { NewsBoard } from './Components/NewsBoard'

function App() {

  const [category, setCategory] = useState("general");

  return (
    <>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </>
  )
}

export default App