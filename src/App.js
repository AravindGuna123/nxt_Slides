import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import SlideMini from './components/SlideMini'
import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    initialList: initialSlidesList,
    activeSlide: initialSlidesList[0],
    activeHeading: initialSlidesList[0].heading,
    activeDescription: initialSlidesList[0].description,
    isHeadingTouched: false,
    isDescriptionTouched: false,
  }

  changeHeading = event => {
    const {initialList, activeSlide, touchHeading} = this.state
    const headingNew = event.target.value
    const position = initialList.indexOf(activeSlide)
    const {id} = activeSlide
    const newSlide = initialList.filter(each => each.id === id)
    const newList = initialList.filter(each => each.id !== id)
    newSlide[0].heading = headingNew
    newList.splice(position, 0, newSlide[0])
    this.setState({
      initialList: [...newList],
      activeHeading: headingNew,
    })
  }

  changeDescription = event => {
    const {initialList, activeSlide} = this.state
    const descriptionNew = event.target.value
    const position = initialList.indexOf(activeSlide)
    const {id} = activeSlide
    const newSlide = initialList.filter(each => each.id === id)
    const newList = initialList.filter(each => each.id !== id)
    newSlide[0].description = descriptionNew
    newList.splice(position, 0, newSlide[0])
    this.setState({
      initialList: [...newList],
      activeDescription: descriptionNew,
    })
  }

  touchHeadingFunc = () => {
    const {isHeadingTouched} = this.state
    console.log(isHeadingTouched)
    this.setState({
      isHeadingTouched: !isHeadingTouched,
    })
  }

  touchDescriptionFunc = () => {
    const {isDescriptionTouched} = this.state

    this.setState({
      isDescriptionTouched: !isDescriptionTouched,
    })
  }

  clickNewButton = () => {
    const {initialList, activeSlide} = this.state
    const position = initialList.indexOf(activeSlide)
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    initialList.splice(position + 1, 0, newSlide)
    console.log(initialList)
    this.setState({
      initialList: [...initialList],
      activeSlide: newSlide,
      activeHeading: newSlide.heading,
      activeDescription: newSlide.description,
    })
  }

  clickSlideButton = id => {
    const {initialList} = this.state
    const currentSlide = initialList.filter(each => each.id === id)

    this.setState({
      activeSlide: currentSlide[0],
      activeHeading: currentSlide[0].heading,
      activeDescription: currentSlide[0].description,
    })
  }

  render() {
    const {
      initialList,
      activeSlide,
      isHeadingTouched,
      isDescriptionTouched,
      activeHeading,
      activeDescription,
    } = this.state
    console.log(initialList)
    return (
      <div className="app-container">
        <Header />
        <button
          type="button"
          className="new-button"
          onClick={this.clickNewButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="plus-props"
          />
          New
        </button>
        <div className="inner-container">
          <ol className="left-container">
            {initialList.map(each => (
              <SlideMini
                details={each}
                key={each.id}
                position={initialList.indexOf(each)}
                clickSlideButton={this.clickSlideButton}
                activeSlide={activeSlide}
              />
            ))}
          </ol>
          <div className="right-inner-container">
            {isHeadingTouched ? (
              <input
                value={activeHeading}
                onChange={this.changeHeading}
                className="headingInput"
                onBlur={this.touchHeadingFunc}
              />
            ) : (
              <h1 onBlur={this.touchHeadingFunc()}>{activeHeading}</h1>
            )}
            {isDescriptionTouched ? (
              <input
                value={activeDescription}
                onChange={this.changeDescription}
                className="headingInput"
                onBlur={this.touchDescriptionFunc}
              />
            ) : (
              <p onBlur={this.touchDescriptionFunc()}>{activeDescription}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
