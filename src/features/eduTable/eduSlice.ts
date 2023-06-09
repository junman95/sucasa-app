import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EduProgram } from "./type";

export interface EduProgramState {
  programs: EduProgram[];
  selectedProgram: EduProgram | null;
  programCount: number;
}

const initialState: EduProgramState = {
  programs: [],
  selectedProgram: null,
  programCount: 0,
};

export const eduSlice = createSlice({
  name: "edu",
  initialState,
  reducers: {
    setPrograms: (state, action: PayloadAction<EduProgram[]>) => {
      state.programs = action.payload;
      state.programCount = action.payload.length;
    },
    setSelectedProgram: (state, action: PayloadAction<number>) => {
      state.selectedProgram = state.programs[action.payload];
    },
  },
});

export const { setPrograms, setSelectedProgram } = eduSlice.actions;

export default eduSlice.reducer;
