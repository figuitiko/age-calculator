
import { create } from 'zustand'
interface IFormStore {
  day: number
  setDay: (val: number) => void
  month: number
  setMonth: (val: number) => void
  year: number
  setYear: (val: number) => void
}

export const useFormStore = create<IFormStore>((set) => (
  {
    day: 0,
    setDay: (val: number) => { set({ day: val }) },
    month: 0,
    setMonth: (val: number) => { set({ month: val }) },
    year: 0,
    setYear: (val: number) => { set({ year: val }) }
  }
))
