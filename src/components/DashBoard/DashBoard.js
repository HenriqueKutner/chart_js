import React from 'react'
import './DashBoard.scss'
import GraphicsHeader from './GraphicsHeader/GraphicsHeader'
import Cards from './Cards/Cards'


export default function DashBoard() {
  return (
    <div className="main_dashboard_and_graphics">
      <div className="dashboard_side_bar">
        <h1>Dashboard</h1>
      </div>
      <div className="graphics">
        <GraphicsHeader />
        <div style={{ display: "flex" }}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  )
}
