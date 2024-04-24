import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: []}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  toggleFavourite = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachitem => {
        if (id === eachitem.id) {
          return {...eachitem, isFavourite: !eachitem.isFavourite}
        }
        return eachitem
      }),
    }))
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavourite: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  starred = () => {
    const {appointmentList} = this.state
    const newList = appointmentList.filter(
      eachItem => eachItem.isFavourite === true,
    )

    this.setState({appointmentList: newList})
  }

  render() {
    const {title, date, appointmentList} = this.state
    return (
      <div>
        <div>
          <div>
            <h1>Add Appointment</h1>
            <form onSubmit={this.addAppointment}>
              <label htmlFor="title">Title</label>
              <input
                id="label"
                value={title}
                type="text"
                placeholder="Title"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                placeholder="dd/mm/yyyy"
                onChange={this.onChangeDate}
              />
              <button type="submit">Add</button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
          />
        </div>
        <ul>
          <h1> Appointments</h1>
          <button onClick={this.starred} type="button">
            Starred
          </button>
          {appointmentList.map(eachItem => (
            <AppointmentItem
              key={eachItem.id}
              appointment={eachItem}
              toggleFavourite={this.toggleFavourite}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments
