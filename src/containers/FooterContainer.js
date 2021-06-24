import React from 'react'
import { Footer } from '../components/footer/index'

export function FooterContainer({ children, ...restProps }) {
    return (
      <Footer {...restProps}>
        <Footer.Boost>
          <Footer.BoostHeader>Boost your links today</Footer.BoostHeader>
          <Footer.BoostButton>Get Started!</Footer.BoostButton>
        </Footer.Boost>
        <Footer.EndZone>
          <Footer.IconMain src="./images/logo.svg" />
          <Footer.Group>
            <Footer.GroupItem>
              <Footer.GroupHeader>Lorem Ipsum</Footer.GroupHeader>
              <Footer.Text>Lorem Ipusm</Footer.Text>
              <Footer.Text>Lorem Ipusm</Footer.Text>
              <Footer.Text>Lorem Ipusm</Footer.Text>
            </Footer.GroupItem>
            <Footer.GroupItem>
              <Footer.GroupHeader>Lorem Ipsum</Footer.GroupHeader>
              <Footer.Text>Lorem Ipusm</Footer.Text>
              <Footer.Text>Lorem Ipusm</Footer.Text>
              <Footer.Text>Lorem Ipusm</Footer.Text>
            </Footer.GroupItem>
            <Footer.GroupItem>
              <Footer.GroupHeader>Lorem Ipsum</Footer.GroupHeader>
              <Footer.Text>Lorem Ipusm</Footer.Text>
              <Footer.Text>Lorem Ipusm</Footer.Text>
              <Footer.Text>Lorem Ipusm</Footer.Text>
            </Footer.GroupItem>
          </Footer.Group>
          <Footer.IconGroup>
            <Footer.IconHolder src="./images/icon-facebook.svg" />
            <Footer.IconHolder src="./images/icon-instagram.svg" />
            <Footer.IconHolder src="./images/icon-pinterest.svg" />
            <Footer.IconHolder src="./images/icon-pinterest.svg" />
          </Footer.IconGroup>
        </Footer.EndZone>
      </Footer>
    );
}