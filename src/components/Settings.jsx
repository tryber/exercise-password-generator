import React from 'react';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      firstChecked: false,
      secondChecked: false,
      thirdChecked: false,
      fourthChecked: false,
    }
  }

  render() {
    const { firstChecked, secondChecked, thirdChecked, fourthChecked } = this.state;
    return (
      <form>
        <h5>Settings</h5>
        <section className="input-container" >
          <h4>Include Uppercase</h4>
          <label className="switch" htmlFor="upper-input">
            <input
              type="checkbox"
              data-testid="upper-input"
              checked={ firstChecked }
              onChange={() => this.setState((state) => ({firstChecked: !state.firstChecked}))}
            />
            <span
              className="slider round"
              onClick={() => this.setState((state) => ({firstChecked: !state.firstChecked}))}
            ></span>
          </label>
        </section>
        <section className="input-container" >
          <h4>Include Lowercase</h4>
          <label className="switch" htmlFor="lower-input">
            <input
              type="checkbox"
              data-testid="lower-input"
              checked={ secondChecked }
              onChange={() => this.setState((state) => ({secondChecked: !state.secondChecked}))}
            />
            <span
              className="slider round"
              onClick={() => this.setState((state) => ({secondChecked: !state.secondChecked}))}
            ></span>
          </label>
        </section>
        <section className="input-container" >
          <h4>Include Numbers</h4>
          <label className="switch" htmlFor="numbers-input">
            <input
              type="checkbox"
              data-testid="numbers-input"
              checked={ thirdChecked }
              onChange={() => this.setState((state) => ({thirdChecked: !state.thirdChecked}))}
            />
            <span
              className="slider round"
              onClick={() => this.setState((state) => ({thirdChecked: !state.thirdChecked}))}
            ></span>
          </label>
        </section>
        <section className="input-container" >
          <h4>Include Symbols</h4>
          <label className="switch" htmlFor="symbols-input">
            <input
              type="checkbox"
              data-testid="symbols-input"
              checked={ fourthChecked }
              onChange={() => this.setState((state) => ({fourthChecked: !state.fourthChecked}))}
            />
            <span
              className="slider round"
              onClick={() => this.setState((state) => ({fourthChecked: !state.fourthChecked}))}
            ></span>
          </label>
        </section>
        {/* <label className="input-container" htmlFor="lower-input">
          <h4>Include Lowercase</h4>
          <input
            type="checkbox"
            data-testid="lower-input"
          />
        </label> */}
        {/* <label className="input-container" htmlFor="numbers-input">
          <h4>Include Numbers</h4>
          <input
            type="checkbox"
            data-testid="numbers-input"
          />
        </label> */}
        {/* <label className="input-container" htmlFor="symbols-input">
          <h4>Include Symbols</h4>
          <input
            type="checkbox"
            data-testid="symbols-input"
          />
        </label> */}
        <button
          type="button"
          className="generate-button"
        >GENERATE PASSWORD</button>
      </form>
    )
  }
}

export default Settings;
