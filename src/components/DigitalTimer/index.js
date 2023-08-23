// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isPause: true, count: 0, counterCount: 25}

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

  clickingPlayPause = () => {
    this.setState(prevState => ({
      isPause: !prevState.isPause,
    }))
  }

  onClickingPositive = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onClickingNegative = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  render() {
    const {isPause, count, counterCount} = this.state
    return (
      <div className="digital-timer-bg-container">
        <h1 className="digital-timer-main-heading">Digital Timer</h1>
        <div className="digital-timer-content-container">
          <div className="timer-bg-container">
            <div className="timer-inner-container">
              <h1 className="running-timer">{counterCount}</h1>
              <p className="running-time-pause">
                {isPause ? 'Paused' : 'Running'}
              </p>
            </div>
          </div>
          <div className="digital-timer-content-inner-container">
            <div className="play-reset-container">
              <div className="pause-play-btn-container">
                <button
                  className="play-pause-button"
                  type="button"
                  onClick={this.clickingPlayPause}
                >
                  {this.gettingPausePlayButton()}
                </button>
                <p className="play-pause-text">{isPause ? 'Start' : 'Pause'}</p>
              </div>

              <div className="pause-play-btn-container">
                <button className="play-pause-button" type="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset icon"
                    className="play-pause-icon"
                  />
                </button>
                <p className="play-pause-text">Reset</p>
              </div>
            </div>
            <label className="label-text" htmlFor="myElement">
              Set Timer Limit
            </label>
            <div id="myElement" className="minus-plus-container">
              <button
                type="button"
                className="minus-button"
                onClick={this.onClickingNegative}
              >
                -
              </button>
              <div className="time-setter-bg-container">
                <h1 className="time-setter-time">{count}</h1>
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
