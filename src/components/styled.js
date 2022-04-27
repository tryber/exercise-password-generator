import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: #0b0f2f;
  border-radius: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  height: 80%; 
  justify-content: space-evenly;
  margin-top: 30px;
  width: 88%;
`

export const Form = styled.form`
  align-items: center;
  display: flex;  
  flex-direction: column;
  height: 60vh;
  max-width: 500px;
  width: 95%;

  h4 {
    text-align: start;
    width: 90%;
    font-size: 0.7rem;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 55px;
    background-color: #1e233e;
    margin: 8px 0;
    border-radius: 8px;

    .form-check {
        display: flex;
        align-items: center;
        width: fit-content; 
        color: white;
        margin-right: 20px;

      input[type="checkbox"] {
          height: 30px;
          width: 50px;
          background-color: #6e7180;
          color: white;

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
  font-size: 1.1rem;
  font-weight: normal;
  height: 65px;
  line-height: 65px;
  margin: 10px 0;
  overflow-x: auto;
  width: 85%;
`

export const BtnGenerator = styled.button`
  background: linear-gradient(-45deg, rgb(111, 84, 164), rgb(106, 123, 221));
  counter-reset: white;
  padding: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  border-radius: 8px;
  margin-bottom: 25px;
`
