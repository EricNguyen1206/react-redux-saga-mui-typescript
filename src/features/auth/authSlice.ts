import { createAction, createSlice, Action, AnyAction } from '@reduxjs/toolkit';
const login = createAction('login');
const authSlice = createSlice({
    name: 'auth',
    initialState: '',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login, (state, action) => {
            //
        });
    },
});

// Actions
export const authAction = authSlice.actions;

// Selectors
// Reducers
// Effects
export default authSlice;
