import React from 'react'
import "materialize-css"
import Form from "./components/Form"
import AvailableBikesList from "./components/availableBikesList";
import UserRentList from "./components/userRentList"

function App() {
  return (
        <div className="container">
            <Form />
            <UserRentList />
            <AvailableBikesList />
        </div>

  )
}

export default App
