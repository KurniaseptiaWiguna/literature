import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: {},
  modalLogin: false,
  modalRegister:false,
  modalApprove:false
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
        case 'SHOW_LOGIN':
            return {
                ...state,
                modalLogin: true};
        case 'SHOW_REGISTER':
            return{
                ...state,
                modalRegister: true};
        case 'HIDE_LOGIN':
            return {
                ...state,
                modalLogin:false};
        case 'HIDE_REGISTER':
            return {
                ...state,
                modalRegister:false};
        case 'SWITCH_MODAL':
            return {
                ...state,
            modalRegister: !state.modalRegister,
            modalLogin : !state.modalLogin,
        };
        case 'SHOW_APPROVE':
            return {
                ...state,
            modalApprove: true
            };
        case 'HIDE_APPROVE':
            return {
                ...state,
            modalApprove: false
                };  
    case "USER_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", payload.token);
      return {
        isLogin: true,
        user: payload,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        isLogin: false,
        user: {},
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
