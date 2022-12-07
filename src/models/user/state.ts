import { ModelState } from '../index';

export interface User {
    username: string;
    passwork: string;
}

export interface UserState extends ModelState<User> {}

export const initState: UserState = {
    data: null,
    isFetching: false,
    error: false,
};
