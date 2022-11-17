import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div>
     <h1>Header</h1>

<main>
    <Outlet/>
</main>
  <h3>Footer</h3>

    </div>
  )
}

export default LayoutPublic