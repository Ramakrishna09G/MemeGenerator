import {Component} from 'react'

import {
  MemeGeneratorBgContainer,
  MemeGeneratorContainer,
  MemeGeneratorForm,
  ImageContainer,
  MemeGeneratorMainHeadingSmall,
  MemeGeneratorMainHeadingLarge,
  Label,
  Input,
  SelectInput,
  GenerateButton,
  TopText,
  BottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    bgImage: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeBgImage = event => {
    this.setState({bgImage: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onClickGenerateMeme = event => {
    event.preventDefault()

    this.onChangeBgImage()
    this.onChangeTopText()
    this.onChangeBottomText()
    this.onChangeFontSize()
  }

  render() {
    const {bgImage, topText, bottomText, fontSize} = this.state
    return (
      <MemeGeneratorBgContainer>
        <MemeGeneratorContainer data-testid="meme">
          <MemeGeneratorMainHeadingSmall>
            Meme Generator
          </MemeGeneratorMainHeadingSmall>
          <ImageContainer bgImage={bgImage}>
            <TopText fontSize={fontSize}>{topText}</TopText>
            <BottomText fontSize={fontSize}>{bottomText}</BottomText>
          </ImageContainer>
          <MemeGeneratorForm>
            <MemeGeneratorMainHeadingLarge>
              Meme Generator
            </MemeGeneratorMainHeadingLarge>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              type="url"
              id="imageUrl"
              value={bgImage}
              onChange={this.onChangeBgImage}
            />
            <Label htmlFor="topText">Top Text</Label>
            <Input
              type="text"
              id="topText"
              value={topText}
              onChange={this.onChangeTopText}
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              type="text"
              id="bottomText"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
            <Label htmlFor="fontSizes">Font Size</Label>
            <SelectInput
              id="fontSizes"
              value={fontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachOption => (
                <option id={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </SelectInput>
            <GenerateButton type="button" onClick={this.onClickGenerateMeme}>
              Generate
            </GenerateButton>
          </MemeGeneratorForm>
        </MemeGeneratorContainer>
      </MemeGeneratorBgContainer>
    )
  }
}

export default MemeGenerator
