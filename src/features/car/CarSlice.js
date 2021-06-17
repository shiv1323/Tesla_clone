import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cars: ["model S", "model 3", "model Y", "model X"]
}
const carSclice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})
export const selectCars = state => state.car.cars
export default carSclice.reducer