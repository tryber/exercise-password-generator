export const CHANGE_LENGTH = 'CHANGE_LENGTH';
export const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX';
export const GENERATE_PASSWORD = 'GENERATE_PASSWORD';

export const changeLength = (length) => ({ type: CHANGE_LENGTH, length });

export const changeCheckbox = (field, value) => ({
  type: CHANGE_CHECKBOX, field, value,
});

export const generatePassword = () => ({ type: GENERATE_PASSWORD });
