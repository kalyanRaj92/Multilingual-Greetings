import {Component} from 'react'
import LanguageItem from './components/LanguageItem'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeLanguageId: languageGreetingsList[0].id}

  setActiveLanguageId = id => {
    this.setState({activeLanguageId: id})
  }

  getActiveTabGreeting = () => {
    const {activeLanguageId} = this.state
    const result = languageGreetingsList.find(
      each => each.id === activeLanguageId,
    )
    return result
  }

  render() {
    const {activeLanguageId} = this.state
    const {imageUrl, imageAltText} = this.getActiveTabGreeting()
    return (
      <div className="appContainer">
        <div className="container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="listItems">
            {languageGreetingsList.map(each => (
              <LanguageItem
                key={each.id}
                languageDetails={each}
                setActiveLanguageId={this.setActiveLanguageId}
                isActive={each.id === activeLanguageId}
              />
            ))}
          </ul>
          <img className="imgContainer" src={imageUrl} alt={imageAltText} />
        </div>
      </div>
    )
  }
}

export default App
