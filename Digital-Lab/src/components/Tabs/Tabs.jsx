import React from 'react'
import "./Tabs.scss";

function Tabs() {
  return (
    <div className="wrapper container">
        <ul className="title-tabs">
            <li>Tab 1</li>
            <li>Tab 2</li>
        </ul>
        <div className="description-tab">
            <p>lorem ipsum</p>
            <p>Lorem ipsum dior ji</p>
        </div>
    </div>
  )
}

export default Tabs