import { baseApi } from "../../api/baseApi";

export type TCards = {
    id:string ;
    title:string ;
    description:string ;
}

const cardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      createNewCards: builder.mutation({
        query: (cards:TCards) => ({
          url: "/cards",
          method: "POST",
          body:cards
        }),
        invalidatesTags:["carts"]
      }),
      
        getSingleCardByTitle: builder.query({
          query: (title) => ({
              url: `/cards/title/title?${title}`, 
              method: "GET"
          }),
          providesTags:["carts"]
        }),

        getAllCards: builder.query({
            query: (searchTerm: string) => ({
              url: `/cards`,
              method: "GET",
              params: { searchTerm:searchTerm }, // This uses URLSearchParams to append query parameters correctly
            }),
            providesTags: ["carts"],
          }),
         
    }),
  });

  export const {useCreateNewCardsMutation,useGetSingleCardByTitleQuery,useGetAllCardsQuery} =cardApi