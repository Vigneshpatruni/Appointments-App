import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointment, toggleFavourite} = props
  const {id, title, date, isFavourite} = appointment
  const image = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const starFilling = () => {
    toggleFavourite(id)
  }

  return (
    <div>
      <li>
        <p>{title}</p>
        <button type="button" onClick={starFilling}>
          <img src={image} alt="star" />
        </button>
        <p>Date:{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
      </li>
    </div>
  )
}

export default AppointmentItem
