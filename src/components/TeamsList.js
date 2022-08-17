import React from 'react'
import List from './List'
import ListItem from './ListItem'

const TeamsList = ({ teams, handleSelectCallback }) => {
  return (
    <List>
      {teams.map(team =>
        <ListItem
          key={team.id}
          item={team.name}
          selected={team.selected}
          pointer
      >
        <p onClick={() => handleSelectCallback(team.name)}>{team.name}</p>
      </ListItem>)}
    </List>
  )
}

export default TeamsList