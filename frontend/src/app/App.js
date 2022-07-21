import React from "react"
import { gql, useQuery } from '@apollo/client'


const App = () => {
  const DEFAULT_QUERY = gql`
  query FetchDrivers {
    drivers {
      id
      name
      username
      email
    }
  }
  `
  const { loading, error, data } = useQuery(DEFAULT_QUERY);

  return (
    <div className="container mx-auto">
      <h1>Query result</h1>
      {loading && <h1>Loading ...</h1>}
      <hr />
      <br />
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Username</th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {data && data.drivers.map(x =>
            <tr key={x.id}>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{x.name}</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{x.username}</td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{x.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App