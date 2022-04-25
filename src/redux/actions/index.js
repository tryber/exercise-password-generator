const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
const GENERATE_PASSWORD = 'GENERATE_PASSWORD';

const actionChangeSettings = (name, value) => ({
  type: CHANGE_SETTINGS,
  name,
  value,
});

const actionGeneratePassword = () => ({
  type: GENERATE_PASSWORD,
});

export {
  CHANGE_SETTINGS,
  actionChangeSettings,
  GENERATE_PASSWORD,
  actionGeneratePassword,
};
