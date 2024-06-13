import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeType } from 'components/Employees/Employees';

interface EmployeeState {
  employees: EmployeeType[];
  projects: string[]; 
}

const initialState: EmployeeState = {
  employees: [],
  projects: [],
};

export const employeeSlice = createSlice({
  name: 'Employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<EmployeeType[]>) => {
      state.employees = action.payload;
    },
    setProjects: (state, action: PayloadAction<string[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { setEmployees, setProjects } = employeeSlice.actions;
export default employeeSlice.reducer;
