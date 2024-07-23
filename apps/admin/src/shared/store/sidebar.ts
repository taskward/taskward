import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface State {
  isCollapse: boolean
  isDisplay: boolean
}

interface Actions {
  /**
   * Change the collapse state.
   */
  setIsCollapse: (isCollapse: boolean) => void
  /**
   * Toggle the collapse state.
   */
  toggleCollapse: () => void
  /**
   * Change the display state.
   */
  setIsDisplay: (isDisplay: boolean) => void
  /**
   * Toggle the display state.
   */
  toggleDisplay: () => void
}

const initialState: State = {
  /**
   * Whether the sidebar is collapsed.
   * @default `false`
   */
  isCollapse: false,
  /**
   * Whether to display the sidebar.
   * @description
   * - Default is `true` when the device is not mobile.
   */
  isDisplay: !BrowserUtils.isMobile()
}

export const useSidebarStore = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setIsCollapse: (isCollapse) => set(() => ({ isCollapse })),
    toggleCollapse: () => set((state) => ({ isCollapse: !state.isCollapse })),
    setIsDisplay: (isDisplay) => set(() => ({ isDisplay })),
    toggleDisplay: () => set((state) => ({ isDisplay: !state.isDisplay }))
  }))
)
