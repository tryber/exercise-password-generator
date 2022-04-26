import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from '../features/setPassword';
import DATA from './helpers/Data';

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
    <div className="container-form-generator">
      <h1>Password Generator</h1>
      <form>

        <h2>{passwordData ? passwordData: `CLICK GENERATOR`}</h2>
        
      <span>{`LENGTH: ${config.length}`}</span>
        <input
          onChange={handleChange}
          value={config.length} name='length' type="range" min="4" max='32' />
      <section>

        <label htmlFor="upper">Include Uppercase
            <input
              onChange={handleChange}
              checked={config.upper} type="checkbox" name="upper" id="upper" />
        </label>

        <label htmlFor="lower">Include Lowercase
            <input
              onChange={handleChange}
              checked={config.lower} type="checkbox" name="lower" id="lower" />
        </label>

        <label htmlFor="numbers">Include Numbers
            <input
              onChange={handleChange}
              checked={config.numbers} type="checkbox" name="numbers" id="numbers" />
        </label>

        <label htmlFor="symbols">Include Symbols
            <input
              onChange={handleChange}
              checked={config.symbols} type="checkbox" name="symbols" id="symbols" />
        </label>

      </section>

      <button onClick={passwordGenerator} type='button' >GENERATOR PASSWORD</button>

      </form>
    </div >);
};
