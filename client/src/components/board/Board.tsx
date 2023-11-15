'use client'

import Sidebar from '@components/sidebar/Sidebar'
import SidebarShowButton from '@components/sidebar/SidebarShowButton'
import { cn } from '@lib/utils'
import { useSidebarStore } from '@stores/sidebarStore'
import ScrollContainer from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css'
import BoardColumn from './BoardColumn'

type Props = {
  board: Board
}

function Board({ board }: Props) {}

export default Board
