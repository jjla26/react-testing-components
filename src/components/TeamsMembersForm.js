import React from 'react'
import Input from './Input'
import Button from './Button'

const TeamsMembersForm = ({ handleSubmit, handleOnChange, value, error, mode }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' onChange={handleOnChange} value={value} />
      <p style={{color: 'red'}}>{error}</p>
      <div style={{margin: '10px'}}>
        <Input type='radio' radioLabel='team' value='team' checked={mode === 'team'} name='mode'onChange={handleOnChange}/>
        <Input type='radio' radioLabel='member' value='member' checked={mode === 'member'} name='mode' onChange={handleOnChange} />
      </div>
      <Button type='submit' name={mode === 'member' ? 'Add Member' : 'Add Team'}/>
    </form>
  )
}

export default TeamsMembersForm