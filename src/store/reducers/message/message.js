const initialState = {
  messages: '',
  groupMessages: '',
  error: false,
  loading: true
};

const auth = (state = initialState, action) => {

  switch (action.type) {

    case 'getUserMessages':
      return {
        ...state, messages: action.data, error: action.error, loading: action.loading
      }
    case 'getGroupMessages':
      return {
        ...state, groupMessages: action.data, error: action.error, loading: action.loading
      }
    default:
      return state;

  }
};

export default auth;