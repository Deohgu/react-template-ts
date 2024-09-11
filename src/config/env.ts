const getEnvVar = (key: string): string => {
  return import.meta.env[key] || "https://expenses-backend-mu.vercel.app";
};

export const env = {
  API_URL: getEnvVar("VITE_API_URL_URL"),
};
