import React,{useState} from 'react'
import Body from '../components/body/index'

export function BodyContainer({ children, ...restProps }) {
  const [isActive, setIsActive] = useState(true);
  const [link, setLink] = useState('');
  const [obj, setObj] = useState([])
  const [isCopied,setIsCopied] = useState(false)
  async function handleSubmit() {
    const query = link;
    console.log("started")
    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${query}`
    );
    const data = await res.json()
    const short = data.result
    setObj(prevObj => {
      const newObj = [...prevObj, short];
      return newObj;
    })
   console.log("ended")
  }
    return (
      <Body>
        <Body.InputContainer>
          <Body.Input type="text" name="link" value={link} onChange={ (e) => setLink(e.target.value)}/>
          <Body.Button onClick={() => {
            setIsActive(false)
            handleSubmit();
          }}>Shorten link</Body.Button>
        </Body.InputContainer>
        {!isActive && <Body.ListContainer>
          {obj.map((item, index) => {
            return (
              <Body.ListItem key={index}>
                <Body.ListLink>
                  <Body.ListInputText>{item.original_link}</Body.ListInputText>
                  <Body.ListText>{item.short_link}</Body.ListText>
                </Body.ListLink>

                <Body.ListButton
                  onClick={() => {
                    navigator.clipboard.writeText(item.short_link);
                    setIsCopied(true)
                  }}
                isCopied = {isCopied}>
                  {isCopied===true ? "Copied!" : "Copy!"}
                </Body.ListButton>
              </Body.ListItem>
            );
          })}
        </Body.ListContainer>}
        <Body.Group>
          <Body.Feature>
            <Body.FeatureHeading>Advanced Statistics</Body.FeatureHeading>
            <Body.FeatureText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae
            </Body.FeatureText>
          </Body.Feature>
          <Body.Frame>
            <Body.FrameItem>
              <Body.FrameIcon src="./images/icon-brand-recognition.svg" />
              <Body.Heading>Brand Recognition</Body.Heading>
              <Body.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
              </Body.Text>
            </Body.FrameItem>
            <Body.FrameItem>
              <Body.FrameIcon src="./images/icon-detailed-records.svg" />
              <Body.Heading>Brand Recognition</Body.Heading>
              <Body.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
              </Body.Text>
            </Body.FrameItem>
            <Body.FrameItem>
              <Body.FrameIcon src="./images/icon-fully-customizable.svg" />
              <Body.Heading>Brand Recognition</Body.Heading>
              <Body.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
              </Body.Text>
            </Body.FrameItem>
          </Body.Frame>
        </Body.Group>
      </Body>
    );
}
