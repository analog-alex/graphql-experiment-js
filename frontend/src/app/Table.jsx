// Drivers table

import React, { useState } from "react"
import { gql, useQuery } from '@apollo/client'


const Table = () => {
  const DEFAULT_QUERY = gql`
  query FetchDrivers($name: String) {
    drivers(name: $name) {
      id
      name
      username
      email
    }
  }
  `
  const [name, setName] = useState("")
  const { loading, error, data } = useQuery(DEFAULT_QUERY, {
    variables: { name },
  })

  const onInputChange = (e) => {
    let value = e.target.value
    if(value) {
      setName(value)
    } else {
      setName("")
    }
  }

  return (
    <>
      <h1>Drivers</h1>
      {loading && <h1>Loading ...</h1>}
      <hr />
      <br />
      <p>{name}</p>
      <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
        <input onChange={onInputChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
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
    </>
  )
}

export default Table