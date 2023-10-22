import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        // user: null, 
        // token: null,
        // err: ''
        username: null,
        pwd: null
    },
    reducers: {
        setCredentials: (state, action) => {
            console.log("Action payload: " + Object.keys(action.payload))
            const { username, error,pwd } = action.payload
            console.log("User: " + username)
            console.log("key of pwd: ",error)
            state.username = username
            state.pwd = pwd
            // state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
