
import {create} from 'zustand';

export const useFormStore = create((set) => (
   {
    day: 1,
    setDay: (val: number) => set({
        day: val
    }),
    month: 1,
    setMonth: (val: number) => set({
        month: val
    }),
    year: 1920,
    setYear: (val: number) => set({
        year: val
    }),    
   }
))