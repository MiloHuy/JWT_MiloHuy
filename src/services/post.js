import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
      getPost: builder.query({
        query: () => `posts/1`,
      }),
      createPost: builder.mutation({
        query: ({title,postBody,userId}) => ({
          url: `posts`,
          method: 'POST',
          body: {title,'body':postBody,userId},
        }),
    }),
    })
})

export const {useGetPostQuery,useCreatePostMutation} = postsApi;
