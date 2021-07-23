import React from 'react'
import './GraphicsHeader.scss'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AdjustIcon from '@material-ui/icons/Adjust';

export default function GraphicsHeader() {
  return (
    <div className="header_main">
      <div className="header_one">
        <p><MenuOpenIcon /></p>
        <h3>Dashboard</h3>
      </div>
      <div className="header_two">
        <p><AdjustIcon /></p>
      </div>
    </div>
  )
}
