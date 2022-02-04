export const LENGTH_PASSWORD = 'LENGTH_PASSWORD';
export const PASSWORD = 'PASSWORD';

export const lengthPassword = (value) => ({
  type: LENGTH_PASSWORD,
  value,
});

export const savePassword = (value) => ({
  type: PASSWORD,
  value,
});
