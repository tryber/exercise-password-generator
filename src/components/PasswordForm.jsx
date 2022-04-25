import React from 'react';

function PasswordForm() {
  return(
    <section>
      <form>
        <h2>Password Generator</h2>
        <div>
          <h3>Generate</h3>
        <div>
          <label htmlFor="password-length">Password lenght</label>
          <input
          id="password-length"
          type="number"
          max={32}
          min={4}
          />
          </div>

          <div>
          <label htmlFor="number">Includes Numbers</label>
            <input
            type="checkbox"
            id="numbers"
            />
          </div>

          <div>
            <label htmlFor="symbols">Include Symbols</label>
            <input
            type="checkbox"
            id="symbols"
            />
          </div>

          <div>
            <label htmlFor="uppercase">Include Uppercase</label>
            <input
            type="checkbox"
            id="uppercase"
            />
          </div>

          <div>
            <label htmlFor="lowercase">Include Lowercase</label>
            <input
            type="checkbox"
            id="lowercase"
            />
          </div>
          <button type="button">Generate</button>
        </div>
      </form>
    </section>
  );
}

export default PasswordForm;
