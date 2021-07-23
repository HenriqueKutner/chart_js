import React from 'react'
import './DashBoard.scss'
import GraphicsHeader from './GraphicsHeader/GraphicsHeader'
import Cards from './Cards/Cards'
import LineChart from './LineChart/LineChart'
import BarChart from './BarChart/BarChart'
import PolarChart from './PolarChart/PolarChart'
import RadarChart from './RadarChart/RadarChart'
import HomeIcon from '@material-ui/icons/Home';



export default function DashBoard() {
  return (
    <div className="main_dashboard_and_graphics">
      <div className="dashboard_side_bar">
        <p><HomeIcon /></p>
        <h1>Dashboard</h1>
      </div>
      <div className="graphics">
        <GraphicsHeader />
        <div className="cards">
          <Cards />
        </div>
        <LineChart />
        <div className="other_charts">
          <RadarChart />
          <PolarChart />
          <BarChart />
        </div>
      </div>
    </div>
  )
}
