import React from 'react'
import {
    Container,
    Boost,
    BoostHeader,
    BoostButton,
    Group,
    IconGroup,
    EndZone,
    IconMain,
    GroupItem,
    Text,
    IconHolder,
    GroupHeader

} from './styles/Footer'
export function Footer({ children, ...restProps }) {
    return <Container {...restProps}>
        {children}
    </Container>
}

Footer.Boost = function FooterBoost({ children, ...restProps }) {
    return <Boost {...restProps}>
        {children}
    </Boost>
}
Footer.BoostButton = function FooterBoostButton({ children, ...restProps }) {
    return <BoostButton>
        {children}
    </BoostButton>
}
Footer.BoostHeader = function FooterBoostHeader({ children, ...restProps }) {
  return <BoostHeader>{children}</BoostHeader>;
};
Footer.EndZone = function FooterEndZone({ children, ...restProps }) {
    return <EndZone>
        {children}
    </EndZone>
}
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};
Footer.Group = function FooterGroup({ children, ...restProps }) {
  return <Group>{children}</Group>;
};
Footer.IconGroup = function FooterIconGroup({ children, ...restProps }) {
  return <IconGroup>{children}</IconGroup>;
};
Footer.GroupItem = function FooterGroupItem({ children, ...restProps }) {
  return <GroupItem>{children}</GroupItem>;
};
Footer.GroupHeader = function FooterGroupHeader({ children, ...restProps }) {
  return <GroupHeader>{children}</GroupHeader>;
};
Footer.IconMain = function FooterIconMain({ children,src, ...restProps }) {
    return <IconMain {...restProps}>
        <img src = "./images/logo.svg" alt = "Main Icon" />
    </IconMain>
}
Footer.IconHolder = function FooterIconHolder({ children,src, ...restProps }) {
    return <IconHolder {...restProps}>
      <img src = {src} alt = "small icon"/>
  </IconHolder>;
};