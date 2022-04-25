const CHANGE_SETTINGS = 'CHANGE_SETTINGS';

const actionChangeSettings = (name, value) => ({
  type: CHANGE_SETTINGS,
  name,
  value,
});

export {
  CHANGE_SETTINGS,
  actionChangeSettings,
};
