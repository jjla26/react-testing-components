import { render, screen, fireEvent, getByRole } from '@testing-library/react'
import App from '../App'

describe('<App />', () =>{
  test('render all the elements', () => {
    render(<App />)
    const title = screen.getByText('Sofatutor Teams App')
    expect(title).toBeInTheDocument()

    const textInput = screen.getByRole('textbox')
    const radioInput = screen.getAllByRole('radio')
    const button = screen.getByRole('button', {name: 'Add Member'})
    expect(textInput).toBeInTheDocument()
    expect(radioInput).toHaveLength(2)
    expect(button).toBeInTheDocument()

    const list = screen.getAllByRole('list')
    const listItems = screen.getAllByRole('listitem')
    expect(list).toHaveLength(2)
    expect(listItems).toHaveLength(6)
  })

  test('a team should get the class selected when the user clicks on it', () => {
    render(<App />)
    const team = screen.getByText('Team Orange').parentNode
    console.log(team.classList.value)
    expect(team).toHaveClass('selected')

    const newSelectedTeam = screen.getByText('Team Yellow')
    fireEvent.click(newSelectedTeam)
    expect(team).not.toHaveClass('selected')
    expect(newSelectedTeam.parentNode).toHaveClass('selected')

  })

  test('our inputs are changing', () => {
    render(<App />)

    const textInput = screen.getByRole('textbox')
    const radioInput = screen.getAllByRole('radio')[0]
    fireEvent.change(textInput, { target: { value: 'Team Blue'}})
    expect(textInput.value).toBe('Team Blue')
    fireEvent.click(radioInput)

    expect(screen.getByRole('button', {name: 'Add Team'})).toBeInTheDocument()
  })
})