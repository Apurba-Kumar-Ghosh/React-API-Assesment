import React from "react";
import {
  Container,
  Feature,
    FeatureHeading,
  FeatureText,
  Button,
  Frame,
  FrameItem,
  Text,
  Group,
  Heading,
    FrameIcon,
    InputContainer,
    Input,
    ListContainer,
    ListButton,
    ListLink,
    ListItem,
    ListText,
    ListInputText
} from "./styles/Body";
export default function Body({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Body.FrameIcon = function BodyFrameIcon({ children,src, ...restProps }) {
    return <FrameIcon>
        <img src = {src} alt = "Icon" />
        {children}
    </FrameIcon>;
};

Body.Group = function BodyGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Body.Feature = function BodyFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};
Body.FrameItem = function BodyFrameItem({ children, ...restProps }) {
  return <FrameItem>{children}</FrameItem>;
};
Body.Frame = function BodyFrame({ children, ...restProps }) {
  return <Frame>{children}</Frame>;
};

Body.FeatureHeading = function BodyFeatureHeading({ children, ...restProps }) {
  return <FeatureHeading>{children}</FeatureHeading>;
};
Body.Text = function BodyText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};
Body.Button = function BodyButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Body.Heading = function BodyHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};
Body.Input = function BodyInput({ children, ...restProps }) {
    return <Input {...restProps}/>
}
Body.InputContainer = function BodyInputContainer({ children, ...restProps }) {
    return <InputContainer {...restProps}>
      {children}
  </InputContainer>;
};
Body.ListContainer = function BodyListContainer({ children, ...restProps }) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};
Body.ListButton = function BodyListButton({ children,copiedLink,setCopiedLink,link, ...restProps }) {
  return <ListButton {...restProps}
    onClick={() => {
      setCopiedLink(link)
      navigator.clipboard.writeText(link);
    }}
    isCopied = {copiedLink === link ? true : false}  
  >{children}</ListButton>;
};
Body.ListItem = function BodyListItem({ children, ...restProps }){
    return <ListItem {...restProps}>{children}</ListItem>;
}
Body.ListLink = function BodyListLink({ children, ...restProps }) {
  return <ListLink {...restProps}>{children}</ListLink>;
};
Body.ListText = function BodyListText({ children, ...restProps }) {
  return <ListText {...restProps}>{children}</ListText>;
};
Body.ListInputText = function BodyListInputText({ children, ...restProps }) {
  return <ListInputText {...restProps}>{children}</ListInputText>;
};
Body.FeatureText = function BodyFeatureText({ children, ...restProps }) {
  return <FeatureText {...restProps}>{children}</FeatureText>;
};