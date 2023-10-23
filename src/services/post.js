import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://final-project-it-project.vercel.app/api/auth' }),
    endpoints: (builder) => ({
    //   getPost: builder.query({
    //     query: () => `api/auth/login`,
    //   }),
      createPost: builder.mutation({
        query: ({username,pwd}) => ({
          url: `/login`,
          method: 'POST',
          body: {username,pwd},
        }),
    }),
    })
})

export const {useCreatePostMutation} = postsApi;
