import { create } from 'zustand'
import { getTodosGroupedByColumns } from '@/lib/getTodosGroupedByColumns';

interface BoardState {
  board: Board;
  getBoard: () => void
}

const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map <TypedColumn, Column>()
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumns ();
    set({board})
  }
}))

export {useBoardStore}