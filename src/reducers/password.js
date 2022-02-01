const Initial_State = {
  password: '',
};

function password(state = Initial_State, action) {
  switch (action.type) {
    case 'PASSWORD':
      return action.value;
    default:
      return state;
  }
}

export default password;
