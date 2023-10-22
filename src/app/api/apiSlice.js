import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3004',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        console.log('states: ', token);
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
          }
        return headers
    }
})

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)
//     console.log("result: ", result)

//     if (result?.error?.originalStatus === 403) {
//         console.log('sending refresh token')
//         const refreshResult = await baseQuery('/refresh', api, extraOptions)
//         console.log(refreshResult)
//         if (refreshResult?.data) {
//             const user = api.getState().auth.user
//             api.dispatch(setCredentials({ ...refreshResult.data, user }))
//             result = await baseQuery(args, api, extraOptions)
//         } else {
//             api.dispatch(logOut())
//         }
//     }

//     return result
// }

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['login'],
    baseQuery,
    endpoints: builder => ({
    })
})
