import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footerWrapper'>
        <div className='footerRow'>
          <div className='emailContainer'>
            <p>Be A Salomon Insider! Subscribe to the Newsletter!</p>
            <form className='emailForm'>
              <input id='emailInput' type='text' placeholder='Your e-mail'></input>
              <button id='emailButton'><i className="fa fa-long-arrow-right" aria-hidden="true"/></button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer
