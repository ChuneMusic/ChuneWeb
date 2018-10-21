import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { GoogleIcon, FacebookIcon, TwitterIcon, SpotifyIcon2 } from '../shared/SocialIcons';
import SocialLogin from 'react-social-login';

const SocialIcon = (props) => {
    switch (props.type) {
      case 't':
        return <TwitterIcon />
      case 'g':
        return <GoogleIcon />
      case 's':
        return <SpotifyIcon2 />
      case 'f':
        return <FacebookIcon />
      default:
        return <SpotifyIcon />
    }
  }

class Button extends Component {
  static propTypes = {
    triggerLogin: PropTypes.func.isRequired,
  } 

  render () {
    const { children, triggerLogin, triggerLogout, ...props } = this.props
    return (
      <SocialIcon onClick={triggerLogin} {...props}>
        { children }
      </SocialIcon>
    )
  }
}

export default SocialLogin(Button)
