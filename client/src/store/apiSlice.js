import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({ baseUrl : baseURI}),
    endpoints : builder => ({
        // get cars
        getCars : builder.query({
            // get: 'http://localhost:8080/api/cars'
            query: () => '/api/cars',
            providesTags: ['cars']
        }),
        // add new sale
        addCars : builder.mutation({
            query : (initialCar) => ({
                // post: 'http://localhost:8080/api/cars'
                url: '/api/cars',
                method: "POST",
                body: initialCar
            }),
            invalidatesTags: ['cars']
        })
    })
})

export default apiSlice;