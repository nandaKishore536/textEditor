import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  background-color: #25262c;
  display: flex;
  justify-content: center;
  padding: 12px;
  min-height: 100vh;
`

export const MainSubCon = styled.div`
  background-color: #1b1c22;
  display: flex;
  width: 90%;
  border-radius: 2px;
  padding: 10px;
`

export const SubCon1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 50%;
`

export const H1 = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  @media screen and (min-width: 720px) {
    font-size: 28px;
    margin: 20px;
  }
`

export const Image = styled.img`
  width: 90%;
  height: 90%;
  margin: 5px;
`

export const SubCon2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 8px;
  margin: 2px;
  border: 1px solid #f1f5f9;
  width: 50%;
`

export const Sub = styled.ul`
  display: flex;
  padding: 5px;
  list-style-type: none;
`

export const List = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.B ? '#faff00' : '#f1f5f9')};
`

export const Button1 = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.I ? '#faff00' : '#f1f5f9')};
`

export const Button2 = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.U ? '#faff00' : '#f1f5f9')};
`

export const Underline = styled.hr`
  width: 100%;
  color: #f1f5f9;
`

export const TextArea = styled.textarea`
  width: 100%;
  font-weight: ${props => (props.B ? 'bold' : 'normal')};
  font-style: ${props => (props.I ? 'italic' : 'normal')};
  text-decoration: ${props => (props.U ? 'underline' : 'normal')};
  font-size: 20px;
  color: #f8fafc;
  min-height: 80%;
  padding: 8px;

  background-color: transparent;

  @media screen and (min-width: 720px) {
    font-size: 25px;
  }
`
