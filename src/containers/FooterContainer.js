import React from "react";
import { Footer } from "../components/footer/index";

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
            <Footer.GroupHeader>Features</Footer.GroupHeader>
            <Footer.Text>Link Shortening</Footer.Text>
            <Footer.Text>Branded Links</Footer.Text>
            <Footer.Text>Analytics</Footer.Text>
          </Footer.GroupItem>
          <Footer.GroupItem>
            <Footer.GroupHeader>Resources</Footer.GroupHeader>
            <Footer.Text>Blog</Footer.Text>
            <Footer.Text>Developers</Footer.Text>
            <Footer.Text>Support</Footer.Text>
          </Footer.GroupItem>
          <Footer.GroupItem>
            <Footer.GroupHeader>Company</Footer.GroupHeader>
            <Footer.Text>About</Footer.Text>
            <Footer.Text>Our Team</Footer.Text>
            <Footer.Text>Careers</Footer.Text>
            <Footer.Text>Contact</Footer.Text>
          </Footer.GroupItem>
        </Footer.Group>
        <Footer.IconGroup>
          <Footer.IconHolder src="./images/icon-facebook.svg" />
          <Footer.IconHolder src="./images/icon-twitter.svg" />
          <Footer.IconHolder src="./images/icon-pinterest.svg" />
          <Footer.IconHolder src="./images/icon-instagram.svg" />
        </Footer.IconGroup>
      </Footer.EndZone>
    </Footer>
  );
}
