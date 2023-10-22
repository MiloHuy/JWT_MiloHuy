import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

const Login = () => {

    const errRef = useRef()
    const [username, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading, data, error }] = useLoginMutation()

    const dispatch = useDispatch()

    useEffect(() => {
        setErrMsg('')
    }, [username, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log("username:", username)
            console.log("pwd:", pwd)
            const userData = await login({ username, pwd })
            console.log('User data: ', userData)
            dispatch(setCredentials({ ...userData, username, pwd }))
            setUser('')
            setPwd('')
            navigate('/welcome')

        } catch (err) {

            if (!err?.originalStatus) {
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Employee Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUserInput}
                    autoComplete="off"
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={pwd}
                    onChange={handlePwdInput}
                />

                <button type='submit'>Sign In</button>
            </form>
        </section>
    )

    return content
}
export default Login
