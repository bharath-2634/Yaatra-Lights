import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
};

export const addReview = createAsyncThunk(
  "/order/addReview",
  async (formdata) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/shop/review/add`,
        formdata
      );
      return response.data; 
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to add review");
    }
  }
);


export const getReviews = createAsyncThunk("/order/getReviews", async (id) => {
  const response = await axios.get(
    `http://localhost:5000/api/shop/review/${id}`
  );

  return response.data;
});

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
        state.reviews = [];
      })
      .addCase(addReview.fulfilled, (state, action) => {
        // Assuming the new review is included in `action.payload.data`
        if (action.payload.success) {
          state.reviews.push(action.payload.data); // Append new review
        }
      })
      .addCase(addReview.rejected, (state, action) => {
        console.error("Add review failed:", action.error.message);
      });
  },
});

export default reviewSlice.reducer;
