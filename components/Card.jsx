import React from 'react'

const Card = ({styles,heading}) => {
  return (
    <div className={`${styles}`}>
        <h1>
            {heading}

        </h1>

        <div>
            <h2>9</h2>
        </div>
    </div>
  )
}

export default Card