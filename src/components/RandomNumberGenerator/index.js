import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  onGenerateRandomNumber = () => {
    const newRandomNum = Math.ceil(Math.random() * 100)

    this.setState({randomNum: newRandomNum})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="MainHeading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onGenerateRandomNumber}
            >
              Generate
            </button>
          </div>
          <p className="number-count">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
