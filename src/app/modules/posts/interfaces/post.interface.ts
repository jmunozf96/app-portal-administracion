export interface IPost {
  id: number | null;
  title: string;
  body: string;
  userId: number | null;
  tags: string[];
  reactions: number;
}
