import React from "react"
import { gql, useQuery } from '@apollo/client'


const App = () => {
  const DEFAULT_QUERY = gql`
  query Hello {
    hello
  }
  `
  const { loading, error, data } = useQuery(DEFAULT_QUERY);

  return (
    <div>
        <p>Query result</p>
        <hr/>
        <div>
            <p>{JSON.stringify(data)}</p>
        </div>
    </div>
  )
}

export default App