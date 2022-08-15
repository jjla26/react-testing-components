import React from 'react'
import ListItem from './ListItem'

const TeamsList = ({ teams, handleSelectCallback }) => {
  return (
    <ul>
    {teams.map(team =>
      <ListItem
        key={team.id}
        item={team.name}
        selected={team.selected}
        pointer
        onClickCallback={handleSelectCallback}
    />)}
  </ul>
  )
}

export default TeamsList