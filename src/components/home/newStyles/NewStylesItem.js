import React, {PropTypes} from 'react'

const NewStylesItem = ({itemData}) => {
  return (
    <div className='newStylesItemContainer'>
      <img src={itemData.imageUrl} className='newStylesImage'/>
      <div className='newStylesTextWraper'>
        <p>{itemData.productName}</p>
      </div>
    </div>
  )
}

NewStylesItem.propTypes = {
  itemData: PropTypes.object.isRequired
}

export default NewStylesItem
