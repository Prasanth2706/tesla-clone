import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/Car/CarSlice'
import chargerReducer from '../features/Car/Charging/ChargingSlice'
import partReducer from '../features/Car/Charging/parts'
export const store = configureStore({
  reducer: {
    car: carReducer,
    charger: chargerReducer,
    part: partReducer,
  },
});

