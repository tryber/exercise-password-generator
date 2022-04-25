import react from 'react';

function SettingsButtons({ setting }) {
  return (
    <div>
      <label
        htmlFor={ `switch-${setting}` }
      >
        <input
          type="checkbox"
          id={ `switch-${setting}` }
        />
        { setting }
      </label>
    </div >
  );
}

export default SettingsButtons;
