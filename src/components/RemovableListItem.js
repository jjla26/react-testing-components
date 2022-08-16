import React from 'react'
import Button from './Button'
import ListItem from './ListItem'

const RemovableListItem = ({ onRemoveCallback, children, ...rest }) => {
  return <div style={{ display: 'flex', alignItems: 'center' }}>
    <ListItem {...rest}>{children}</ListItem>
    <Button onClick={() => onRemoveCallback(rest.item)} name='X' />
  </div>
}

export default RemovableListItem