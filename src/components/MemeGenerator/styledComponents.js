// Style your components here
import styled from 'styled-components'

export const MemeGeneratorBgContainer = styled.div`
  max-width: 1550px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`

export const MemeGeneratorContainer = styled(MemeGeneratorBgContainer)`
  width: 580px;
  justify-content: space-around;
  background-color: #ffffff;
  flex-direction: column;
  height: 100vh;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 1180px;
  }
`
export const MemeGeneratorForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (min-width: 768px) {
    order: 1;
    width: 32%;
  }
`
export const ImageContainer = styled.div`
  height: 30%;
  width: 80%;
  background-image: url(${props => props.bgImage});

  @media (min-width: 768px) {
    order: 2;
    height: 40%;
    width: 40%;
  }
`
export const TopText = styled.p`
  width: 98%;
  font-family: 'Open-Sans';
  color: #ffffff;
  font-size: ${props => props.fontSize};
`

export const BottomText = styled(TopText)``

export const MemeGeneratorMainHeadingSmall = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 22px;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`
export const MemeGeneratorMainHeadingLarge = styled.h1`
  display: none;

  @media (min-width: 768px) {
    display: block;
    color: #35469c;
    font-family: 'Open Sans';
    font-size: 32px;
  }
`
export const Label = styled.label`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Open Sans';
  margin-top: 10px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  height: 40px;
  border-style: solid;
  border-color: #d7dfe9;
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  color: #7e858e;
  font-size: 14px;
  font-family: 'Open Sans';
`
export const SelectInput = styled.select`
  height: 40px;
  border-style: solid;
  border-color: #d7dfe9;
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  color: #1e293b;
  font-size: 14px;
  font-family: 'Open Sans';
`
export const GenerateButton = styled.button`
  align-self: flex-start;
  margin-top: 25px;
  background-color: #0b69ff;
  height: 38px;
  width: 145px;
  font-size: 16px;
  font-family: 'Open Sans';
  border-radius: 8px;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
`
