import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Boost = styled.div`
  width: 100%;
  height: 10em;
  background-image: url("./images/bg-boost-desktop.svg");
  background-color: #3b3054;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BoostHeader = styled.h1`
  color: white;
`;
export const BoostButton = styled.div`
  background: #2acfcf;
  border: none;
  border-radius: 0.5em;
  padding: 1em 3em;
  font-size: 1.1em;
  color: white;
  width: 5em;

  &:hover {
    cursor: pointer;
    font-weight: 500;
    opacity: 0.75;
  }
`;
export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 30%;
  color: white;
  @media (max-width: 1100px) {
    margin-top : 2em;
    flex-direction: column;
    align-items: center;
    text-align : center;
  }
`;
export const GroupHeader = styled.p`
  font-weight: bold;
  font-size: 14px;
`;
export const GroupItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const IconGroup = styled.div`
  flex-basis: 30%;
  display: flex;
  @media(max-width : 1100px){
    margin-top : 1em;
  }
`;
export const EndZone = styled.div`
  background: #232127;
  display: flex;
  padding: 5em 10em;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 2em 5em;
    align-items: center;
  }
`;
export const IconMain = styled.div`
  flex-basis: 30%;
  dislplay: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 2.5em;
    filter: brightness(0) invert(1);
  }
`;
export const IconHolder = styled.div`
  padding: 0 1em;
  img {
    &:hover {
      background-color: #2acfcf;
      cursor: pointer;
    }
  }
`;
export const Text = styled.p`
  font-size: 8px;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
`;
