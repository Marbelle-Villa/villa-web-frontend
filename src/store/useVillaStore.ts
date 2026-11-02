import { create } from 'zustand'
import type { Suite } from '../types'

type Currency = 'USD' | 'LKR'

interface VillaState {
  currency: Currency
  checkIn: string
  checkOut: string
  suiteId: string
  adults: number
  children: number
  mobileMenuOpen: boolean
  activeSuite: Suite | null
  bookingMessage: string
  setCurrency: (currency: Currency) => void
  setCheckIn: (date: string) => void
  setCheckOut: (date: string) => void
  setSuiteId: (suiteId: string) => void
  setAdults: (adults: number) => void
  setChildren: (children: number) => void
  setMobileMenuOpen: (open: boolean) => void
  setActiveSuite: (suite: Suite | null) => void
  setBookingMessage: (message: string) => void
}

export const useVillaStore = create<VillaState>((set) => ({
  currency: 'USD',
  checkIn: '',
  checkOut: '',
  suiteId: 'ocean-whisper',
  adults: 2,
  children: 0,
  mobileMenuOpen: false,
  activeSuite: null,
  bookingMessage: '',
  setCurrency: (currency) => set({ currency }),
  setCheckIn: (checkIn) => set({ checkIn }),
  setCheckOut: (checkOut) => set({ checkOut }),
  setSuiteId: (suiteId) => set({ suiteId }),
  setAdults: (adults) => set({ adults }),
  setChildren: (children) => set({ children }),
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  setActiveSuite: (activeSuite) => set({ activeSuite }),
  setBookingMessage: (bookingMessage) => set({ bookingMessage }),
}))
