import React from 'react'
import RemovableListItem from './RemovableListItem'

const MembersList = ({ members, selectedTeamId, onRemoveCallback }) => {
  return (
    <ol>
      {members.filter(member => member.team === selectedTeamId).map(member =>
        <RemovableListItem
          key={member.id}
          item={member.name}
          onRemoveCallback={onRemoveCallback} />)}
    </ol>
  )
}

export default MembersList