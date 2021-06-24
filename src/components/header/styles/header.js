import styled from "styled-components";

{
  /*Primary
 Cyan: #2acfcf
 Dark Violet: #3b3054
Secondary
- Red: #f46262
Neutral
- Gray: 	#bfbfbf
- Grayish Violet: #9e9aa7
- Very Dark Blue: #35323e
- Very Dark Violet: #232127
Typography
Body Copy
- Font size: 18px
Fonts
- Family: Poppins (https://fonts.google.com/specimen/Poppins)
- Weights: 500, 700

*/
}

export const Background = styled.div`
    flex-basis : 50%;
    height : 60%;
    padding-left : 3em;
    img{
        width : 100%;
    }
    @media(max-width :1100px){
      img{
          width : 20em;
          height : 20em;
      }
    }
`;
export const NavGroup = styled.div`
width : 100%;
display : flex;
align-items : center;
border : 3px solid red;
@media(max-width){
  justify-content : space-between;
  align-items : flex-end;
}
`;
export const Container = styled.section`
margin : 0 auto;
padding : 0 10em;
@media(max-width : 1100px){
  padding : 0;
  display : flex;
  flex-direction : column;
  justify-content : center;
}`;
export const Navbar = styled.div`
flex-basis : 90%;
  display: flex;
  justify-content: space-between;
  align-items : center;
  @media(max-width : 1100px){
    flex-direction : column;
    justify-content : center;
    display : none;

  }
`;
export const Feature = styled.div`
padding-top : 5em;
  display: flex;
  flex-direction: column;
  justify-content : flex-start;
  align-items: flex-start;
  flex-basis : 50%;
  @media(max-width : 1100px){
    align-items : center;
    text-align : center;
  }
`;
export const Text = styled.p``;
export const NavbarItems = styled.div`
    width : 40%;
  display: flex;
  align-items : center;
  justify-content: space-around;

  ${Text}:hover{
cursor : pointer;
color : black;
  }
  @media(max-width : 1100px){
    width : 100%;
      flex-direction : column;
      justify-content : center;
      align-items : space-evenly;
  }
`;

export const FeatureHeading = styled.h1`
font-size : 3.5em;
margin : 0;
padding : 0;`;
export const FeatureText = styled.p`
font-size : 20px;`;
export const FeatureButton = styled.button`
  background: #2acfcf;
  border: none;
  border-radius: 2rem;
  padding: 1em 3em;
  color: white;

  &:hover {
    cursor: pointer;
    padding: 1.2em 3.2em;
    font-weight: 700;
  }
`;
export const Button = styled.button`
  background: #2acfcf;
  border: none;
  border-radius: 1.5em;
  padding : 0.5em 2em;
  color : white;

  &:hover{
      cursor : pointer;
      padding : 0.6em 2.2em;
      font-weight : 700;
  }
`;
export const Frame = styled.div`
  margin-top : 1em;
  width : 100%;
  height : 25em;
  display: flex;
  @media(max-width : 1100px){
    margin-top : 12.5em;
    flex-direction : column-reverse;
    padding-bottom : 10em;
  }
`;
export const Icon = styled.div`
flex-basis : 10%;
height : 1em;
`;
