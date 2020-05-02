const initialState = {
  authData: '',
  users: '',
  error: false,
  loading: true
};

const auth = (state = initialState, action) => {

  switch (action.type) {

    case 'signIn':
      return { ...state, authData: action.data, error: action.error, loading: action.loading }
    case 'signUp':
      return { ...state, authData: action.data, error: action.error, loading: action.loading }
    case 'users':
      return {
        ...state, users: [...action.data], error: action.error, loading: action.loading
      }
    default:
      return state;

  }
};

export default auth;