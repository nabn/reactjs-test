import React from 'react'
import './style.css'
import R from 'ramda'

export default ({ nPages, activePage, changePage }) => {
  const pages = R.take(5, Array(nPages).fill(null))

  return (
    <div className="footer">
      <div className="right">
        <Button
          changePage={changePage}
          activePage={activePage}
          direction={-1} />
        <div className="page-numbers">
          {pages.map((x, i) =>
            <PageNumber
              changePage={changePage}
              isActive={activePage === i + 1}
              key={i} number={i + 1} />,
          )}
        </div>
        <Button
          changePage={changePage}
          activePage={activePage}
          direction={1}/>
      </div>
    </div>
  )
}

const Button = ({ changePage, activePage, direction }) =>
  <button
    onClick={changePage(activePage + direction)}
    className="nav-button">
    {direction === -1 ? '< Previous page' : 'Next page >'}
  </button>

const PageNumber = ({ number, isActive, changePage }) =>
  <button
    onClick={changePage(number)}
    className={`number-button ${isActive ? 'active' : ''}`} >
    <span>{number}</span>
  </button>
