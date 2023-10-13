import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (builder) => ({
    // this top query tell that our hook will be use....Query
    fetchAlbums: builder.query({
      query: (user) => {
        return {
          url: "/albums", // this is the path => base+/albums
          params: {
            // Parmas is qs
            userId: user.id,
          },
          method: "GET",
        };
      },
    }),
    addAlbum: builder.mutation({
      query: (user) => {
        return {
          url: "/albums",
          method: "POST",
          body: {
            title: faker.commerce.productName(),
            userId: user.userId,
          },
        };
      },
    }),
  }),
});

// console.log({ albumsApi });
export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
