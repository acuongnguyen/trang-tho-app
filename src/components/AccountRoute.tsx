import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { AccountState } from '../store/account/types';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { Admin } from '../pages/Admin/Admin';
import { Login } from '../pages/Account';
import { Redirect } from 'react-router';
export const AccountRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
    const account: AccountState = useSelector((state: AppState) => state.account);
    return (
        <Route
            {...rest}
            render={() =>
                account.token ? (
                    <Redirect to={{ pathname: 'admin/home' }} />
                ) : (
                    <Login />
                )}
        ></Route>
    );
};
