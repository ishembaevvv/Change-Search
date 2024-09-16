import { useState } from "react";
import Card from "./components/Card"
import data from "./data"

function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="app">
      <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" className="inp" />
      <div className="container">
      {
        data.filter((el) => {
          const full_name = (el.firstName + el.lastName).toLowerCase();
          // if (full_name.includes(search) || el.email.toLowerCase().includes(search.toLowerCase())) {
          //   return true
          // }

          return full_name.includes(search) || el.email.toLowerCase().includes(search.toLowerCase())
        }).map((el, id) => {
          return <Card {...el} key={id} />
        })
      }
      </div>
    </div>
  )
}

export default App
