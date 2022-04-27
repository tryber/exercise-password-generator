import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from '../features/setPassword';
import DATA from './helpers/Data';
import * as S from './styled'

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
    let arrayToMath = []
    let password = '';
    const ramdomIndex = () => Math.floor(Math.random() * arrayToMath.length)
    const passwordLength = Array.from({ length: config.length })

    const needAlert = Object.values(config).slice(1).every((e)=> !e)
    if (needAlert) { return alert('Escolha uma opcao de base para incluir') }

    const createWith = Object.entries(config).map((each) => (each[1] === true) && each[0])
      .filter((each) => each)
    createWith.forEach((each) => arrayToMath = arrayToMath.concat(DATA[each]))
    passwordLength.forEach((_e) => password += arrayToMath[ramdomIndex()])

    dispatch(setPassword(password))
  }

  return (
    <S.Container>
      <h1>Password Generator</h1>
      <S.DivPass>{ passwordData ? passwordData : `CLICK GENERATOR` }</S.DivPass>

      <S.Form>

        <h4>{ `LENGTH: ${config.length}` }</h4>

        <label htmlFor="length" className="range-container">
          <h3>4</h3>
          <input
            onChange={ handleChange }
            value={ config.length } name='length' type="range" min="4" max='32' />
          <h3>32</h3>
        </label>

        <h4>SETTINGS</h4>

        <label htmlFor="upper" className="checkbox">
          <span>Include Uppercase</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onChange={ handleChange }
              checked={ config.upper } type="checkbox" name="upper" id="upper" />
          </div>
        </label>

        <label htmlFor="lower" className="checkbox">
          <span>Include Lowercase</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onChange={ handleChange }
              checked={ config.lower } type="checkbox" name="lower" id="lower" />
          </div>
        </label>

        <label htmlFor="numbers" className="checkbox">
          <span>Include Numbers</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onChange={ handleChange }
              checked={ config.numbers } type="checkbox" name="numbers" id="numbers" />
          </div>
        </label>

        <label htmlFor="symbols" className="checkbox">
          <span>Include Symbols</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onChange={ handleChange }
              checked={ config.symbols } type="checkbox" name="symbols" id="symbols" />
          </div>
        </label>

        <S.BtnGenerator onClick={ passwordGenerator } type='button' >GENERATE PASSWORD</S.BtnGenerator>

      </S.Form>
    </S.Container >);
};
