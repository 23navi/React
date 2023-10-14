import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      providesTags: (result, error, arg) => {
        const photosTags = result.map((photo) => ({
          type: "Photo",
          id: photo.id,
        }));
        return [{ type: "photoAlbum", id: arg.id }, ...photosTags];
      },
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
      invalidatesTags: (result, error, arg) => {
        return [{ type: "photoAlbum", id: arg.id }];
      },
      query: (album) => {
        return {
          url: "/photos",
          method: "POST",
          body: {
            url: `https://picsum.photos/seed/${Math.floor(
              Math.random() * 10000
            )}/600/300`,
            albumId: album.id,
          },
        };
      },
    }),
    deletePhoto: builder.mutation({
      invalidatesTags: (result, error, arg) => {
        return [{ type: "Photo", id: arg.id }];
      },
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
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photosApi;
export { photosApi };
