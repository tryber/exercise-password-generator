import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: #0b0f2f;
  border-radius: 16px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  height: 90%; 
  justify-content: space-between;
  margin-bottom: 3%;
  width: 93%;

  h1 {
    margin-top: 15px;
  }
`

export const Form = styled.form`
  align-items: center;
  display: flex;  
  flex-direction: column;
  flex: 1;
  font-size: 1rem;
  justify-content: space-between;
  max-width: 600px;
  width: 85%;

  input[type="range"] {
    width: 80%;
  }

  h3 {
    flex: 1;
    font-size: 0.7rem;
    text-align: center;
    margin: auto 0;
  }

  h4 {
    font-size: 0.7rem;
    text-align: start;
    width: 95%;
  }

  label {
    align-items: center;
    background-color: #1e233e;
    border-radius: 8px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: 5px;
    width: 100%;

    span {
      margin-left: 20px;
    }

    .form-check {
        align-items: center;
        color: white;
        display: flex;
        margin-right: 20px;

      input[type="checkbox"] {
          background-color: #6e5254;
          height: 27px;
          width: 50px;

      &:checked {
          background-color: #5e6adb;
        }
      }
    }
  }
`

export const DivPass = styled.h2`
  background-color: #1e233e;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: normal;
  height: 63px;
  line-height: 65px;
  margin: 7px 0;
  text-align: center;
  display: inline-block;
  overflow: hidden;
  width: 85%;
  max-width: 600px;
`

export const BtnGenerator = styled.button`
  background: linear-gradient(-45deg, rgb(111, 84, 164), rgb(106, 123, 221));
  border-radius: 8px;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  height: 55px;
  margin: 5px 0 12px 0;
  object-fit:  fit-content;
  padding: 8px;
  width: 100%;
`
