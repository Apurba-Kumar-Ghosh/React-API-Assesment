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
  NavGroup,
  Hamburger,
  HamDiv
} from "./styles/header";
export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Background = function HeaderBackground({ children, ...restProps }) {
  return (
    <Background {...restProps}>
      <img src="./images/illustration-working.svg" alt="working illustration" />
      {children}
    </Background>
  );
};
Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
  return <Navbar {...restProps}>{children}</Navbar>;
};
Header.NavGroup = function HeaderNavGroup({ children, ...restProps }) {
  return <NavGroup {...restProps}>{children}</NavGroup>;
};
Header.NavbarItems = function HeaderNavbarItems({ children, ...restProps }) {
  return <NavbarItems {...restProps}>{children}</NavbarItems>;
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Header.Icon = function HeaderIcon({ src, ...restProps }) {
  return (
    <Icon {...restProps}>
      <img src="./images/logo.svg" />
    </Icon>
  );
};

Header.FeatureHeading = function HeaderFeatureHeading({
  children,
  ...restProps
}) {
  return <FeatureHeading {...restProps}>{children}</FeatureHeading>;
};
Header.FeatureText = function HeaderFeatureText({ children, ...restProps }) {
  return <FeatureText {...restProps}>{children}</FeatureText>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
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
Header.Hamburger = function HeaderHamburger({ children, ...restProps }) {
  return <Hamburger {...restProps}>{children}</Hamburger>;
}
Header.HamDiv = function HeaderHamDiv({ children, ...restProps }) {
  return <HamDiv {...restProps}>{children}</HamDiv>;
};
