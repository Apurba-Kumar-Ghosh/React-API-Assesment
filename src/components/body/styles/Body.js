import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: #bfbfbf;
  padding: 0 10em;
  margin: 0 auto;
  margin-top: 4em;
  @media (max-width: 1100px) {
    margin: 0;
    padding: 0 2em;
  }
`;
export const InputContainer = styled.div`
  background-image: url("./images/bg-shorten-desktop.svg");
  background-color: #3b3054;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5em 3em;
  gap: 2em;
  border-radius: 0.5em;
  margin-top: -3.8em;
  @media (max-width: 1100px) {
    gap: 1em;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 70%;
    flex-direction: column;
    align-items : center;
  }
`;
export const Input = styled.input`
  width: 70%;
  height: 3.5em;
  border-radius: 0.5em;
  &: focus {
    outline: none;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  background: #2acfcf;
  border: none;
  border-radius: 0.5em;
  padding: 1.25em 3.5em;
  color: white;

  &:hover {
    cursor: pointer;
    font-weight: 700;
    opacity: 0.75;
    transform: scaleX(1.1);
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  padding: 3em;
  margin: 0 auto;
  @media (max-width: 1100px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export const Frame = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5em;
`;
export const Text = styled.p``;
export const FeatureText = styled.p`
  color: #9e9aa7;
`;
export const FrameItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: speace-evenly;
  align-items: flex-start;
  width: 12em;
  height: 15em;
  background-color: white;
  border-radius: 1em;
  padding: 0 1em;

  &:nth-of-type(2) {
    margin-top: 3em;
  }
  &:nth-of-type(3) {
    margin-top: 6em;
  }
  @media (max-width: 1100px) {
    &:nth-of-type(2) {
      margin-top: 3em;
    }
    &:nth-of-type(3) {
      margin-top: 3em;
    }
  }
`;
export const FeatureHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 30px;
  font-weight: 700;
`;
export const FrameIcon = styled.div`
  background-color: #3b3054;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2em;
  margin-bottom: 2em;
  img {
    width: 2em;
    height: 3em;
    padding: auto;
  }
`;
export const Heading = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 20px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
export const ListItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.75em;
  width: 90%;
  background-color: white;
  margin-top: 1em;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ListLink = styled.div`
  flex-basis: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ListInputText = styled.p`
  color: black;
  font-weight: bold;
`;
export const ListText = styled.div`
  color: #2acfcf;
  font-size: 20px;
  font-weight: 700;
`;
export const ListButton = styled.button`
  background-color: ${({ isCopied }) =>
    isCopied === true ? "#3b3054" : "#2acfcf"};
  border: none;
  height: 2em;
  border-radius: 0.5em;
  padding: 1.5em 3em;
  color: white;
  flex-basis: 10%;

  &:hover {
    cursor: pointer;
    font-weight: 700;
    opacity: 0.75;
  }
`;
