export interface Employee {
  profilePicture: string;
  username: string;
  email: string;
  phone: string;
  birthdate: string;
  role: 'admin' | 'user' | 'moderator';
}
