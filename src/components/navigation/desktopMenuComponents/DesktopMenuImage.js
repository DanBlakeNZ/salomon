import React, {PropTypes} from 'react'

const DesktopMenuImage = ({backgroundImage, imageText}) => {
  return (
    <div className='desktopMenuImage'style={backgroundImage}>
      <div className='desktopMenuImageText'>
        <p>{imageText}</p>
        <span className='desktopMenuArrowButton'>
          <i className="fa fa-long-arrow-right" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}

DesktopMenuImage.propTypes = {
  backgroundImage: PropTypes.object.isRequired,
  imageText: PropTypes.string.isRequired
}

export default DesktopMenuImage
