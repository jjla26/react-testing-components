import React from 'react'
import List from './List'
import RemovableListItem from './RemovableListItem'

const MembersList = ({ members, selectedTeamId, onRemoveCallback }) => {
  return (
    <List>
      {members.filter(member => member.team === selectedTeamId).map(member =>
        <RemovableListItem
          key={member.id}
          item={member.name}
          onRemoveCallback={onRemoveCallback}
        >
          <p>{member.name}</p>
        </RemovableListItem>)}
    </List>
  )
}

export default MembersList