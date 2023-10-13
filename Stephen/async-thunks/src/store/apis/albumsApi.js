import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
  }),
});

// console.log({ albumsApi });
export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };
