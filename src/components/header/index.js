import React from "react";
import {
  Container,
  Navbar,
  Background,
  NavbarItems,
  Feature,
  FeatureHeading,
  FeatureButton,
  Button,
  Frame,
  FeatureText,
  Text,
  Icon,
  NavGroup
} from "./styles/header";
export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Background = function HeaderBackground({ children, ...restProps }) {
  return <Background>
    <img src="./images/illustration-working.svg" alt = "working illustration"/>
    {children}
  </Background>;
};
Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
  return <Navbar>{children}</Navbar>;
};
Header.NavGroup = function HeaderNavGroup({ children, ...restProps }) {
  return <NavGroup>{children}</NavGroup>;
};
Header.NavbarItems = function HeaderNavbarItems({ children, ...restProps }) {
  return <NavbarItems>{children}</NavbarItems>;
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame>{children}</Frame>;
};
Header.Icon = function HeaderIcon({ src, ...restProps }) {
  return <Icon>
    <img src= "./images/logo.svg" />
  </Icon>;
};

Header.FeatureHeading = function HeaderFeatureHeading({
  children,
  ...restProps
}) {
  return <FeatureHeading>{children}</FeatureHeading>;
};
Header.FeatureText = function HeaderFeatureText({ children, ...restProps }) {
  return <FeatureText>{children}</FeatureText>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};
Header.FeatureButton = function HeaderFeatureButton({ children, ...restProps })
  {
  return <FeatureButton {...restProps}>{children}</FeatureButton>
};
Header.Button = function HeaderButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children}</Button>;
};
