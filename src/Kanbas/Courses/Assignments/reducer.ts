import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<{
      title: string;
      course: string;
      description: string;
      points: number;
      dueDate: string;
      availableFrom: string;
      availableUntil: string;
    }>) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: action.payload.title,
        course: action.payload.course,
        description: action.payload.description,
        points: action.payload.points,
        dueDate: action.payload.dueDate,
        availableFrom: action.payload.availableFrom,
        availableUntil: action.payload.availableUntil,
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action: PayloadAction<{
      _id: string;
      title: string;
      course: string;
      description: string;
      points: number;
      dueDate: string;
      availableFrom: string;
      availableUntil: string;
    }>) => {
      const updatedAssignment = action.payload;
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === updatedAssignment._id ? updatedAssignment : assignment
      );
    },
  },
});

// Export actions for use in components
export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;

// Export the reducer for configuration in the store
export default assignmentsSlice.reducer;
