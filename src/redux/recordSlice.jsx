import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../common/http/axiosInstance.js";

const initialState = {
  uploadRecord: {
    loading: false,
    data: null,
    error: null,
  },
  getReports: {
    loading: false,
    data: [],
    error: null,
  },
};

export const uploadRecord = createAsyncThunk(
  "uploadAction",
  async ({ onSuccess, file }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const { data } = await axiosInstance.post("/record/upload", formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });

      if (onSuccess) {
        onSuccess();
      }
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Invalid File!");
    }
  },
);
export const getReports = createAsyncThunk("getReportsAction", async () => {
  try {
    const { data } = await axiosInstance.get("/record");

    return data.filenames;
  } catch (e) {
    console.log(e);
    throw new Error("Something went wrong");
  }
});

export const recordsSlice = createSlice({
  name: "recordSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadRecord.pending, (state) => {
      state.uploadRecord.loading = true;
      state.uploadRecord.data = null;
      state.uploadRecord.error = null;
    });
    builder.addCase(uploadRecord.fulfilled, (state, { payload }) => {
      state.uploadRecord.loading = false;
      state.uploadRecord.data = payload;
      state.uploadRecord.error = null;
    });
    builder.addCase(uploadRecord.rejected, (state, { error }) => {
      state.uploadRecord.loading = false;
      state.uploadRecord.data = null;
      state.uploadRecord.error = error.message;
    });

    builder.addCase(getReports.pending, (state) => {
      state.getReports.loading = true;
      state.getReports.data = [];
      state.getReports.error = null;
    });
    builder.addCase(getReports.fulfilled, (state, { payload }) => {
      state.getReports.loading = false;
      state.getReports.data = payload;
      state.getReports.error = null;
    });
    builder.addCase(getReports.rejected, (state, { error }) => {
      state.getReports.loading = false;
      state.getReports.data = [];
      state.getReports.error = error.message;
    });
  },
});

export default recordsSlice.reducer;
