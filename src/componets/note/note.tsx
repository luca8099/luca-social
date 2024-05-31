export interface Root {
    posts: TNote[]
    total: number
    skip: number
    limit: number
  }
  
 export interface TNote {
    id: number
    title: string
    body: string
    views: number
    userId: number
  }
  