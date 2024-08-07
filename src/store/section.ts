import { create } from "zustand"
import { persist } from "zustand/middleware"

interface SectionState {
  section: Section
  setSection: (section: Section) => void
}

export const useSectionStore = create<SectionState>()(
  persist(
    (set) => ({
      section: "#home",
      setSection: (section) => set(() => ({ section })),
    }),
    { name: "section-store" }
  )
)