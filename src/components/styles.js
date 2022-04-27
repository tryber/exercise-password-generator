import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  width: 88%;
  height: 80%; 
  color: white;
  background-color: #0b0f2f;
  border-radius: 15px;
  
  h1 {
    font-weight: normal;
    margin: 15px 0;
    font-size: 2rem;
    height: fit-content;
  }

  h2 {
    font-weight: normal;
    margin: 10px 0;
    font-size: 1.1rem;
    background-color: #1e233e;
    border-radius: 8px;
    width: 85%;
    height: 65px;
    line-height: 65px;
    
  }

  span {
    text-align: start;
    width: 90%;
    font-size: 0.7rem;
  }

  form {
    display: flex;  
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 500px;
    height: 60vh;

    .checks {
      display: flex;
      flex-direction: column;

    }

    label {
      display: flex;
      justify-content: center;
      align-items: center;
      
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
      
      
      span {
        width: 95%;
        font-size: 1.1rem;
        margin-left: 30px;
      }
    }
    
    
    label , button {
      width: 90%;
      height: 55px;
      background-color: #1e233e;
      margin: 8px 0;
      border-radius: 8px;
    }

    .range-container {
      padding: 0 3px;

      h3 {
        margin: 0 8px;
        font-size: 1rem;
      }
    }

    input {
      background-color: #1e233e;
      font-size: 1rem;
    }

    input[type="range"] {
      width: 95%;
    }

    button {
      background: linear-gradient(-45deg, rgb(111, 84, 164), rgb(106, 123, 221));
      counter-reset: white;
      padding: 5px;
      font-size: 0.9rem;
      font-weight: bold;
      color: #fff;
      border-radius: 8px;
      margin-bottom: 25px;
    }
}
`;

export default Container
