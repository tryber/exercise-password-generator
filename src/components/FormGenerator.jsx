import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from '../features/setPassword';
import DATA from './helpers/Data';
import Container from './styles'

export const FormGenerator = () => {
  const [config, setConfig] = useState({
      length: 16,
      upper: true,
      lower: true,
      numbers: true,
      symbols: false,
    
  })

  const dispatch = useDispatch()
  const passwordData = useSelector(({userConfig:{ password }}) => password)
  console.log(passwordData);

  const handleChange = ({ target: { name, checked, value } }) => {
    setConfig((config) => ({ ...config, [name]: name === 'length' ? value : checked }));
  }


  const passwordGenerator = () => {
    const needAlert = Object.values(config).slice(1).every((e)=> !e)
    console.log(!needAlert);
    if (needAlert) {return alert('Escolha uma opcao de base para incluir')}
    const createWith = Object.entries(config).map((each)=> (each[1] === true) && each[0]).filter((each)=> each)
    let arrayToMath = []
    createWith.forEach((each) => arrayToMath = arrayToMath.concat(DATA[each]))
    const ramdomIndex = () => Math.floor(Math.random() * arrayToMath.length)
    const passwordLength = Array.from({ length: config.length })
    let password = '';
    passwordLength.forEach((_e)=> password += arrayToMath[ramdomIndex()])
    dispatch(setPassword(password))
  }
  
  
  return (
    <Container>
      <h1>Password Generator</h1>


        <h2>{passwordData ? passwordData: `CLICK GENERATOR`}</h2>
      <form>
        
        <span>{ `LENGTH: ${config.length}` }</span>
        <label htmlFor="length" className="range-container">
          <h3>4</h3>
        <input
          onChange={handleChange}
            value={ config.length } name='length' type="range" min="4" max='32' />
          <h3>32</h3>
        </label>

        <span>SETTINGS</span>

        <label htmlFor="upper" className="checkbox">
          <span>Include Uppercase</span> 
          <div class="form-check form-switch">

            <input
            class="form-check-input"
              onChange={handleChange}
              checked={config.upper} type="checkbox" name="upper" id="upper" />
              </div>
        </label>

        <label htmlFor="lower" className="checkbox">
          <span>Include Lowercase</span> 
          <div class="form-check form-switch">

            <input
            class="form-check-input"
              onChange={handleChange}
              checked={config.lower} type="checkbox" name="lower" id="lower" />
              </div>
        </label>

        <label htmlFor="numbers" className="checkbox">
          <span>Include Numbers</span>
          <div class="form-check form-switch">

            <input
            class="form-check-input"
              onChange={handleChange}
              checked={config.numbers} type="checkbox" name="numbers" id="numbers" />
              </div>
        </label>

        <label htmlFor="symbols" className="checkbox">
          <span>Include Symbols</span>
          <div class="form-check form-switch">

            <input
            class="form-check-input"
              onChange={handleChange}
              checked={config.symbols} type="checkbox" name="symbols" id="symbols" />
              </div>
        </label>



      <button onClick={passwordGenerator} type='button' >GENERATE PASSWORD</button>

      </form>
    </Container >);
};
