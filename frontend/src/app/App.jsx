import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Table from "./Table"


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Table />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default App