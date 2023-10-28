import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        // user: null, 
        // token: null,
        // err: ''
        username: null,
        pwd: null,
        token: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            console.log("Action payload: " + Object.keys(action.payload))
            const { username, data,pwd } = action.payload
            console.log("User: " + username)
            state.username = username
            state.pwd = pwd
            state.token = data.data.token
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.username
export const selectCurrentToken = (state) => state.auth.token
