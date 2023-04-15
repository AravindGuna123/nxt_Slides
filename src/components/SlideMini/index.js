import './index.css'

const SlideMini = props => {
  const {details, position, clickSlideButton, activeSlide} = props
  const {id, heading, description} = details
  const clickSlide = () => {
    clickSlideButton(id)
  }
  const isActiveSlide = activeSlide.id === id
  const slideClass = isActiveSlide ? 'slide-item-active' : 'slide-item'
  return (
    <li className={`${slideClass}`} testid={`slideTab${position + 1}`}>
      <p>{position + 1}</p>
      <div className="slide-box">
        <button type="button" onClick={clickSlide} className="slideButton">
          <h1 className="slide-heading">{heading}</h1>
          <p>{description}</p>
        </button>
      </div>
    </li>
  )
}

export default SlideMini
