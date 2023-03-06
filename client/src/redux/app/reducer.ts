import { Action } from './actions';

export type User = {
  id: string;
  key: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export interface AppState {
  users: User[];
  fizzbuzz: string;
}

export const initialState: AppState = {
  users: [],
  fizzbuzz: ""
};

export const appReducer = (state: AppState = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case Action.SET_USER: {
      return { ...state, users: action.payload };
    }

    case Action.SET_FIZZBUZZ: {
      return { ...state, fizzbuzz: action.payload };
    }

    default:
      return state;
  }
};