import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0,
    }
    this.updateClicked = this.updateClicked.bind(this)
  }

  updateClicked() {
    this.setState((prevState) => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render() {
    return(
      <button onClick={this.updateClicked}>{this.state.timesClicked}</button>
    )
  }


}
