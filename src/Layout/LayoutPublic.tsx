import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div>

<main>
    <Outlet/>
</main>
  <h3>Footer</h3>

    </div>
  )
}

export default LayoutPublic