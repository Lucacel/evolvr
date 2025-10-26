import apiClient from "../apiClient";
import { ENDPOINTS } from "../endpoints";

export interface User {
  id: string;
  name?: string;
  email: string;
}

export async function fetchCurrentUser(): Promise<User> {
  const res = await apiClient.get<User>(`${ENDPOINTS.USERS}/me`);
  return res.data;
}

export async function createAccount({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<User> {
  const res = await apiClient.post<User>(`${ENDPOINTS.USERS}/register`, {
    name,
    email,
    password,
  });
  return res.data;
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> {
  const res = await apiClient.post<User>(`${ENDPOINTS.USERS}/login`, {
    email,
    password,
  });
  return res.data;
}
