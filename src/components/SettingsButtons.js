import react from 'react';

function SettingsButtons({ setting }) {
  return (
    <div className="form-check form-switch">
      <label
        className="form-check-label"
        htmlFor={ `switch-${setting}` }
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id={ `switch-${setting}` }
        />
        { setting }
      </label>
    </div >
  );
}

export default SettingsButtons;
