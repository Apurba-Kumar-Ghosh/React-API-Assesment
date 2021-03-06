import React,{useState} from 'react'
import Body from '../components/body/index'

export function BodyContainer({ children, ...restProps }) {
  const [isActive, setIsActive] = useState(true);
  const [link, setLink] = useState('');
  const [obj, setObj] = useState([])
  const [copiedLink,setCopiedLink] = useState('')
  async function handleSubmit() {
    const query = link;
    setLink('')
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
                  <Body.ListInputText>
                    <p>{item.original_link}</p>
                  </Body.ListInputText>
                  <Body.ListText>{item.short_link}</Body.ListText>
                </Body.ListLink>

                <Body.ListButton
                  copiedLink={copiedLink}
                  setCopiedLink={setCopiedLink}
                  link={item.short_link}
                >
                  {copiedLink === item.short_link ? "Copied!" : "Copy!"}
                </Body.ListButton>
              </Body.ListItem>
            );
          })}
        </Body.ListContainer>}
        <Body.Group>
          <Body.Feature>
            <Body.FeatureHeading>Advanced Statistics</Body.FeatureHeading>
            <Body.FeatureText>
              Track how your links are performing across the web with our advanced statistics dashboard.
            </Body.FeatureText>
          </Body.Feature>
          <Body.Frame>
            <Body.FrameItem>
              <Body.FrameIcon src="./images/icon-brand-recognition.svg" />
              <Body.Heading>Brand Recognition</Body.Heading>
              <Body.Text>
                Boost your brand recognition with each click.Generic links dont mean a thing.Branded links help confidence in your content.
              </Body.Text>
            </Body.FrameItem>
            <Body.FrameItem>
              <Body.FrameIcon src="./images/icon-detailed-records.svg" />
              <Body.Heading>Detailed Records</Body.Heading>
              <Body.Text>
                Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.
              </Body.Text>
            </Body.FrameItem>
            <Body.FrameItem>
              <Body.FrameIcon src="./images/icon-fully-customizable.svg" />
              <Body.Heading>Fully Customizable</Body.Heading>
              <Body.Text>
                Improve brand awareness and constant discoverable through customizable links,supercharging audience engagement
              </Body.Text>
            </Body.FrameItem>
          </Body.Frame>
        </Body.Group>
      </Body>
    );
}
