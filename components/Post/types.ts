export interface IPost {
  id?: number | string
  title: string
  body: string
}

export interface PostProps {
  title: string
  body: string
  id?: string | number
}
