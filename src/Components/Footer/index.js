import React from 'react'
import './style.css'

const Button = ({direction}) => (
  <div className="nav-button">
    {direction === 'previous'
        ? '< Previous page'
        : 'Next page >'
    }
  </div>
)

const PageNumber = ({number}) =>
  <div className="number-button">
    <span>{number}</span>
  </div>

export default () => (
  <div className="footer">
    <div className="right">
      <Button direction='previous' />
      <div className="page-numbers">
        {[1,2,3].map(x => <PageNumber key={x} number={x}/>)}
      </div>
      <Button direction='next' />
    </div>
  </div>
)
