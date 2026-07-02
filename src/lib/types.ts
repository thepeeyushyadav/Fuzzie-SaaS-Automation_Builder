export type Connection = {
  title: string
  description: string
  image: string
  connectionKey: string
  accessTokenKey?: string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}

export type EditorCanvasCardType = {
  title: string
  description: string
  completed: boolean
  current: boolean
  metadata: unknown
  type: string
}

export type EditorNodeType = {
  id: string
  type: EditorCanvasCardType['type']
  position: {
    x: number
    y: number
  }
  data: EditorCanvasCardType
}

export type EditorActions =
  | { type: 'LOAD_DATA'; payload: { elements: EditorNodeType[]; edges: { id: string; source: string; target: string }[] } }
  | { type: 'UPDATE_NODE'; payload: { elements: EditorNodeType[] } }
  | { type: 'SELECTED_ELEMENT'; payload: { element: EditorNodeType } }
  | { type: 'UNDO'; payload: null }
  | { type: 'REDO'; payload: null }

export type HistoryItem = { elements: EditorNodeType[]; edges: { id: string; source: string; target: string }[] }

export type EditorState = {
  editor: {
    elements: EditorNodeType[]
    selectedNode: EditorNodeType
    history: HistoryItem[]
    currentIndex: number
  }
}
