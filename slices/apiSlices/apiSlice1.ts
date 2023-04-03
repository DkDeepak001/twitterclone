import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const twitterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ name, email, password, username }) => ({
        url: "api/register",
        method: "POST",
        body: { name, email, password, username },
      }),
    }),

    checkCurrentUser: builder.query({
      query: ({}) => ({
        url: "api/currentUser",
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useCheckCurrentUserQuery } = twitterApi;
