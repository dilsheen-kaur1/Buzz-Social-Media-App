let user = localStorage.getItem("user");

user = (user && JSON.parse(user)) || {};
const initialState = {
  ...user
};

export default (state = initialState, action) => {
  const type=  action && action.type;
  switch(type) {
    case "SET_USER_INFO":
      return {...action.data};
    case "SET_PROFILE_INFO":
      return {...state.user, ...action.data};
    default:
      return state;
  }
}