import { PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from './state';

export const userReducers = {
    logout: (state: UserState) => {
        localStorage.removeItem('user');
        return {
            ...state,
            data: null,
        };
    },
    setUser: (state: UserState, action: PayloadAction<User>) => {
        state.data = action.payload;
    },
};
