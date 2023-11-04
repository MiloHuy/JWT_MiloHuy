import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentToken } from './authSlice';

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()
    const [cookie, setCookies] = useCookies(['user'])

    const handleSaveAccessToken = () => {
        if (!token) return
        setCookies("access token", token, { path: "/" });
    }

    useEffect(() => {
        handleSaveAccessToken()
    }, [token])

    return (
        token
            ?
            <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth
