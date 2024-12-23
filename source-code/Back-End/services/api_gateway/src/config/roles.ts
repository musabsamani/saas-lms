// Export all permissions together for easy access
export const ROLES = {
  SAAS_OWNER: "saas_owner",
  INSTRUCTOR: "instructor",
  USER: "user",
};
// Create a union type for permissions based on PERMISSIONS values
export type rolesTypes = (typeof ROLES)[keyof typeof ROLES];

export const ROLES_ARRAY: rolesTypes[] = Object.values(ROLES);
