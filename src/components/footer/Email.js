import React from 'react'

const Email = () => {
  return (
    <div className='emailContainer'>
      <p>Be A Salomon Insider! Subscribe to the Newsletter!</p>
      <form className='emailForm'>
        <input id='emailInput' type='text' placeholder='Your e-mail'></input>
        <button id='emailButton'><i className="fa fa-long-arrow-right" aria-hidden="true"/></button>
      </form>
    </div>
  )
}


export default Email
