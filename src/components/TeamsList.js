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
          onClickCallback={handleSelectCallback}
          pointer
      >
        {team.name}
      </ListItem>)}
    </List>
  )
}

export default TeamsList