export interface ITag {
  text: string
  isSelected?: boolean,
  id?: string,
  onClick?: (event, id: string | null) => void
}