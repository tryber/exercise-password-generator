function SettingsToggle({ labelText, checked, toggle }) {
  return (
    <label>
      {labelText}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggle()}
      />
    </label>
  );
}

export default SettingsToggle;