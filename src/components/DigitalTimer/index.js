// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isPause: true,
    count: 25,
    counterMinutes: 25,
    counterSeconds: 0,
    isReset: false,
  }

  gettingPausePlayButton = () => {
    const {isPause} = this.state
    if (isPause !== true) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png "
          alt="pause icon"
          className="play-pause-icon"
        />
      )
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        alt="play icon"
        className="play-pause-icon"
      />
    )
  }

  onClickResetButton = () => {
    const {count} = this.state
    this.setState({
      isReset: true,
      counterMinutes: count,
      counterSeconds: 0,
      isPause: true,
    })
  }

  clickingPlayPause = () => {
    this.setState(prevState => ({
      isPause: !prevState.isPause,
    }))
    const {isPause} = this.state
    if (isPause === true) {
      this.setState({isReset: false})
    }
  }

  onClickingPositive = () => {
    const {isReset} = this.state
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
    if (isReset === true) {
      this.setState(prevState => ({
        counterMinutes: prevState.count,
        counterSeconds: 0,
      }))
    }
  }

  onClickingNegative = () => {
    const {isReset} = this.state
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
    if (isReset === true) {
      this.setState(prevState => ({
        counterMinutes: prevState.count,
        counterSeconds: 0,
      }))
    }
  }

  render() {
    const {isPause, count, counterMinutes, counterSeconds} = this.state
    return (
      <div className="digital-timer-bg-container">
        <h1 className="digital-timer-main-heading">Digital Timer</h1>
        <div className="digital-timer-content-container">
          <div className="timer-bg-container">
            <div className="timer-inner-container">
              <h1 className="running-timer">
                {counterMinutes > 9 ? counterMinutes : `0${counterMinutes}`}:
                {counterSeconds > 9 ? counterSeconds : `0${counterSeconds}`}
              </h1>
              <p className="running-time-pause">
                {isPause ? 'Paused' : 'Running'}
              </p>
            </div>
          </div>
          <div className="digital-timer-content-inner-container">
            <div className="play-reset-container">
              <div className="pause-play-btn-container">
                <button
                  className="play-pause-button play-pause-text"
                  type="button"
                  onClick={this.clickingPlayPause}
                >
                  {this.gettingPausePlayButton()}
                  {isPause ? 'Start' : 'Pause'}
                </button>
              </div>

              <div className="pause-play-btn-container">
                <button
                  className="play-pause-button"
                  type="button"
                  onClick={this.onClickResetButton}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset icon"
                    className="play-pause-icon"
                  />
                </button>
                <p className="play-pause-text">Reset</p>
              </div>
            </div>
            <p className="label-text" htmlFor="myElement">
              Set Timer Limit
            </p>
            <div id="myElement" className="minus-plus-container">
              <button
                type="button"
                className="minus-button"
                onClick={this.onClickingNegative}
              >
                -
              </button>
              <div className="time-setter-bg-container">
                <p className="time-setter-time">{count}</p>
              </div>
              <button
                type="button"
                className="plus-button"
                onClick={this.onClickingPositive}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
