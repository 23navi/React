import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      // providesTags: (result, error, arg) => {
      //   const albumsTags = result.map((album) => ({
      //     type: "Album",
      //     id: album.id,
      //   }));
      //   return [{ type: "userAlbum", id: arg.id }, ...albumsTags];
      // },
      query: (album) => {
        return {
          url: "/photos",
          params: {
            albumId: album.id,
          },
          method: "GET",
        };
      },
    }),
    addPhoto: builder.mutation({
      // invalidatesTags: (result, error, arg) => {
      //   return [{ type: "userAlbum", id: arg.id }];
      // },
      query: (album) => {
        return {
          url: "/photos",
          method: "POST",
          body: {
            url: "",
            albumId: album.id,
          },
        };
      },
    }),
    deletePhoto: builder.mutation({
      // invalidatesTags: (result, error, arg) => {
      //   return [{ type: "Album", id: arg.id }];
      // },
      query: (photo) => {
        return {
          url: `/photos/${photo.id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

// console.log({ albumsApi });
export const {
  useFetchAlbumsQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photosApi;
export { photosApi };
