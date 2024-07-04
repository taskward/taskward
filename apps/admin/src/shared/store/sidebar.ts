import { BrowserUtils } from '@taskward/utils'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface State {
  isCollapse: boolean
  isDisplay: boolean
}

interface Actions {
  /**
   * 修改折叠状态
   */
  setIsCollapse: (isCollapse: boolean) => void
  /**
   * 切换折叠状态
   */
  toggleCollapse: () => void
  /**
   * 修改显示状态
   */
  setIsDisplay: (isDisplay: boolean) => void
  /**
   * 切换显示状态
   */
  toggleDisplay: () => void
}

const initialState: State = {
  /**
   * 是否折叠侧边栏，默认不折叠
   */
  isCollapse: false,

  /**
   * 是否显示侧边栏，默认显示
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
