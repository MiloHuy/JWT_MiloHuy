import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
    endpoints: (builder) => ({
      getPost: builder.query({
        query: () => `user`,
      }),
      createPost: builder.mutation({
        query: ({username,pwd}) => ({
          url: `user`,
          method: 'POST',
          body: {username,pwd},
        }),
    }),
    })
})

export const {useGetPostQuery,useCreatePostMutation} = postsApi;
