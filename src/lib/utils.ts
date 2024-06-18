export interface PostType {
  userId: string;
  id: string;
  title: string;
  desc: string;
  slug: string;
  img?: string
}


export interface UserType {
  username: string;
  id: string;
  email: string;
  password: string;
  isAdmin: boolean;
  img?: string;
}
