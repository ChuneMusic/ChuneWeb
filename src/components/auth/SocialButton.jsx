import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { OauthSender } from 'react-oauth-flow';

import { GoogleIcon, FacebookIcon, TwitterIcon, SpotifyIcon2 } from '../shared/SocialIcons';
import OAuthModal from './social/OAuthModal';

const SocialIcon = (props) => {
    switch (props.type) {
        case 't':
            return <TwitterIcon {...props} />
        case 'g':
            return <GoogleIcon {...props} />
        case 's':
            return <SpotifyIcon2 {...props} />
        case 'f':
            return <FacebookIcon {...props} />
        default:
            return <SpotifyIcon2 {...props} />
    }
}

class SocialLogin extends Component { 
    
    handleModalClose = (e) => {
      alert(e);
    }
    
    openSocialLogin = (props) => {
        console.log('This happened');
        return (<OAuthModal onClose={this.handleModalClose} show={true}>Content For Modal</OAuthModal>)
    }

    render () {
        const { children, openSocialLogin, ...props } = this.props
        return (
            <OauthSender
              authorizeUrl="https://accounts.google.com/o/oauth2/v2/auth?scope=email"
              clientId='243198086936-g6h4hfvujnoms1j5i4d76vjqk08pp7gd.apps.googleusercontent.com'
              redirectUri="http://localhost:8000/api/v1/google-auth"
              state={{ from: '/settings' }}
              render={({ url }) => <a href={url}><TwitterIcon /></a>}
            />
        
        )
    }
}

export default SocialLogin
