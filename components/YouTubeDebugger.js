import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.changeBitrate = this.changeBitrate.bind(this)
    this.changeResultion = this.changeResultion.bind(this)
  }

  changeBitrate() {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      },
    })
  }

  // changeBitrate() {
  //   this.setState({
  //     settings: {
  //       ...this.state.settings,
  //       bitrate: 12,
  //     },
  //   })
  // }

  changeResultion() {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      },
    })
  }

  // changeResultion() {
  //   this.setState({
  //     settings: {
  //       ...this.state.settings,
  //       video: {
  //         ...this.state.video,
  //         resolution: '720p',
  //       },
  //     },
  //   })
  // }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.changeBitrate}></button>
        <button className='resolution' onClick={this.changeResultion}></button>
      </div>
    )
  }

}
