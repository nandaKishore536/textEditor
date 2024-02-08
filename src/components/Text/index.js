import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextArea,
  Underline,
  Button,
  Button1,
  Button2,
  Sub,
  SubCon2,
  Image,
  H1,
  SubCon1,
  MainSubCon,
  MainContainer,
  List,
} from './styleComponent'

class Text extends Component {
  state = {
    text: '',
    bold: false,
    italic: false,
    underline: false,
  }

  onBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  OnValue = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, bold, italic, underline} = this.state

    const B = bold ? '#faff00' : '#f1f5f9'

    const I = italic ? '#faff00' : '#f1f5f9'

    const U = underline ? '#faff00' : '#f1f5f9'

    return (
      <MainContainer>
        <MainSubCon>
          <SubCon1>
            <H1>Text Editor</H1>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt=" text editor"
            />
          </SubCon1>
          <SubCon2>
            <Sub>
              <List>
                <Button data-testid="bold" onClick={this.onBold} B={bold}>
                  <VscBold size={25} color={B} />
                </Button>
              </List>

              <List>
                <Button1
                  data-testid="italic"
                  onClick={this.onItalic}
                  I={italic}
                >
                  <GoItalic size={25} color={I} />
                </Button1>
              </List>

              <List>
                <Button2
                  data-testid="underline"
                  onClick={this.onUnderline}
                  U={underline}
                >
                  <AiOutlineUnderline size={25} color={U} />
                </Button2>
              </List>
            </Sub>
            <Underline />
            <TextArea
              value={text}
              onChange={this.OnValue}
              B={bold}
              I={italic}
              U={underline}
            />
          </SubCon2>
        </MainSubCon>
      </MainContainer>
    )
  }
}

export default Text
