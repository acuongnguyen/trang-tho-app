import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Login } from '../pages/Account';
import { AccountState } from '../store/account/types';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { Admin } from '../pages/Admin/Admin';
export const PrivateRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
    const account: AccountState = useSelector((state: AppState) => state.account);
    return (
        <Route {...rest} render={() => (account.token ? children : <Login />)} />
    );
};
