import React from 'react'

const Highlight = ({icon,title,para}) => {
  return (
    <div className="highlight">
    <div className="highlight-img">
    {icon}
    </div>
    <h3 className="highlight-subtitle">{title}</h3>
    <p className="highlight-para">
      {para}
    </p>
  </div>
  )
}

export default Highlight
