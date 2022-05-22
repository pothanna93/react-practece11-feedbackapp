import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedback: false,
  }

  onClickEmoji = () => this.setState({isFeedback: true})

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-qun-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emoji-lists">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-logo"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedback ? this.renderThankyou() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
