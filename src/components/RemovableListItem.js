import React from 'react'
import ListItem from './ListItem'

const RemovableListItem = ({ onRemoveCallback, ...rest }) => {
  return <div style={{ display: 'flex', alignItems: 'center'}}>
    <ListItem {...rest} />
    <span onClick={() => onRemoveCallback(rest.item)}>X</span>
  </div>
}

export default RemovableListItem