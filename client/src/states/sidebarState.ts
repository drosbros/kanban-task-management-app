import { proxy } from 'valtio'

interface SidebarState {
  isOpen: boolean
}

export const sidebarState = proxy<SidebarState>({
  isOpen: true,
})

export const openSidebar = () => {
  sidebarState.isOpen = true
}
export const closeSidebar = () => {
  sidebarState.isOpen = false
}
