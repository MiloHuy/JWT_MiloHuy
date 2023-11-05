import { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentToken } from './authSlice';

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()
    const [cookie, setCookies] = useCookies(['access-token'])

    const handleSaveAccessToken = useCallback(() => {
        if (!token) return
        setCookies("access-token", token, { path: "/" });
    }, [token, setCookies])

    useEffect(() => {
        handleSaveAccessToken()
    }, [token, handleSaveAccessToken])

    return (
        token
            ?
            <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth
