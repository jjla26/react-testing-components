import { useState } from 'react';
import Card from './components/Card';
import TeamsMembersForm from './components/TeamsMembersForm';
import TeamsList from './components/TeamsList';
import MembersList from './components/MembersList';

import styles from './styles/App.module.css'

function App() {
  const [ value, setValue ] = useState('')
  const [ error, setError ] = useState('')
  const [ mode, setMode ] = useState('member')
  const [ teams, setTeams ] = useState([{id: 0, name: 'Team Orange', selected: true},{id:1, name: 'Team Yellow'},{id: 2, name: 'Team Purple'}])
  const [ members, setMembers ] = useState([{id: 0, name: 'Julio', team: 0}, {id: 1, name: 'Adam', team: 0}, {id: 2, name: 'Thomas', team: 0}])
  const selectedTeamId = teams.find(team => team.selected).id

  const handleOnChange = (e) => {
    if(e.target.type === 'radio'){
      setMode(e.target.value)
    }else{
      setValue(e.target.value)
    }
  }

  const handleSelect = name => {
    setTeams(teams.map(team => {
      return {...team, selected: team.name === name}
    }))
  }

  const onRemoveCallback = name => {
    setMembers(members.filter(member => member.name !== name))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validate()){
      if (mode === 'member'){
        setMembers([...members, {id: Math.random().toString(36), name: value, team: selectedTeamId }])
      }else {
        setTeams([...teams, {id: Math.random().toString(36), name: value }])
      }
      setValue('')
    }
  }

  const validate = () => {
    if(value === ''){
      setError(`You can't add an empty ${mode}`)
      return false
    }
    if(mode === 'team' && teams.find(member => member.name === value)) {
      setError(`Team ${value} already exists`)
      return false
    }
    if(mode === 'member' && members.filter(member => member.team === selectedTeamId).find(member => member.name === value)) {
      setError(`Member ${value} already exist`)
      return false
    }
    setError('')
    return true
  }

  return (
    <div className={styles.App}>
      <h1>Sofatutor Teams App</h1>
      <div className={styles.columnContainer}>
        <Card>
          <TeamsMembersForm handleSubmit={handleSubmit} handleOnChange={handleOnChange} value={value} error={error} mode={mode} />
        </Card>
        <div className={styles.rowContainer}>
          <div className={styles.teamsContainer}>
            <Card>
              <TeamsList teams={teams} handleSelectCallback={handleSelect}/>
            </Card>
          </div>
          <div className={styles.membersContainer}>
            <Card>
              <MembersList members={members} selectedTeamId={selectedTeamId} onRemoveCallback={onRemoveCallback}/>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
