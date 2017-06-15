import React, {PropTypes} from 'react'

const NewStylesItem = ({itemData}) => {
  return (
    <div className='newStylesItemContainer'>
      <img src={itemData.imageUrl} className='newStylesImage'/>
      <p>{itemData.productName}</p>

    </div>
  )
}

NewStylesItem.propTypes = {
  itemData: PropTypes.object.isRequired
}

export default NewStylesItem
