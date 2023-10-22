import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
      getPost: builder.query({
        query: () => `posts/1`,
      }),
      createPost: builder.mutation({
        query: ({username,pwd}) => ({
          url: `posts`,
          method: 'POST',
          body: {username,pwd},
        }),
    }),
    })
})

export const {useGetPostQuery,useCreatePostMutation} = postsApi;
