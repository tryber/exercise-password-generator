export const LENGTH_PASSWORD = 'LENGTH_PASSWORD';
export const PASSWORD = 'PASSWORD';
export const COPY_PASSWORD = 'COPY_PASSWORD';
export const COPIED_PASSWORD = 'COPIED_PASSWORD';

export const lengthPassword = (value) => ({
  type: LENGTH_PASSWORD,
  value,
});

export const savePassword = (value) => ({
  type: PASSWORD,
  value,
});

export const copyPassword = (value) => ({
  type: COPY_PASSWORD,
  value,
});

export const copiedPassword = (value) => ({
  type: COPIED_PASSWORD,
  value,
});
