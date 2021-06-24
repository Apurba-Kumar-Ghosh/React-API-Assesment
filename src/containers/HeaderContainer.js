import React from 'react'
import  Header  from '../components/header/index'
export function HeaderContainer({ children, ...restProps }) {
    return (
      <Header>
        <Header.NavGroup>
          <Header.Icon src= "./images/logo.svg"/>
          <Header.Navbar>
            <Header.NavbarItems>
              <Header.Text>Feature</Header.Text>
              <Header.Text>Pricing</Header.Text>
              <Header.Text>Resources</Header.Text>
            </Header.NavbarItems>
            <Header.NavbarItems>
              <Header.Text>Login</Header.Text>
              <Header.Button>Sign Up</Header.Button>
            </Header.NavbarItems>
          </Header.Navbar>
        </Header.NavGroup>

        <Header.Frame>
          <Header.Feature>
            <Header.FeatureHeading>
              More than just shorter links
            </Header.FeatureHeading>
            <Header.FeatureText>
              Build your brand recognition and know the intricacies of link
              shortening
            </Header.FeatureText>
            <Header.FeatureButton>Get Started</Header.FeatureButton>
          </Header.Feature>
          <Header.Background />
        </Header.Frame>
      </Header>
    );
}