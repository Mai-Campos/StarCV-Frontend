export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  alias: string;
  bio: string | null;
  avatarUrl: string | null;
  country: string | null;
  githubUrl: string | null;
  linkedinUrl: string | null;
  websiteUrl: string | null;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export type Role = "ADMINISTRATOR" | "DEVELOPER" | "RECRUITER";

export interface User {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  role: Role;
  profile: Profile | null;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}
