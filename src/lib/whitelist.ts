const adminEmails = import.meta.env.VITE_ADMIN_EMAILS || "";
export const whitelist = adminEmails.split(",").map((email: string) => email.trim());
