import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const twitterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["profile"],
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

    getAlluser: builder.query({
      query: ({}) => ({
        url: "api/getAllUser",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    fetchUserDetails: builder.query({
      query: (userId) => ({
        url: `api/user/${userId}`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ name, username, bio, profileImage, coverImage, id }) => ({
        url: "api/updateUser",
        method: "PATCH",
        body: { name, username, bio, profileImage, coverImage, id },
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useRegisterUserMutation,
  useCheckCurrentUserQuery,
  useGetAlluserQuery,
  useFetchUserDetailsQuery,
  useUpdateUserProfileMutation,
} = twitterApi;
