// src/utils/auth.ts
export type Role = "admin" | "limited";

export const USERS = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "limited" },
];

export const login = (username: string, password: string): Role | null => {
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    sessionStorage.setItem(
      "auth",
      JSON.stringify({ username, role: user.role })
    );
    return user.role as Role;
  }
  return null;
};

export const logout = () => sessionStorage.removeItem("auth");

export const getAuth = () => {
  const data = sessionStorage.getItem("auth");
  return data ? JSON.parse(data) : null;
};

export const isAuthenticated = () => !!getAuth();

export const getRole = (): Role | null => {
  const auth = getAuth();
  return auth?.role || null;
};
