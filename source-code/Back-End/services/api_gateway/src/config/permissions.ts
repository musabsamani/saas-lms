const USER_PERMISSIONS = {
  CREATE_USER: "create_user",
  DELETE_USER: "delete_user",
  VIEW_USER: "view_user",
  UPDATE_USER: "update_user",
};

const ADMIN_PERMISSIONS = {
  MANAGE_USERS: "manage_users",
  VIEW_AUDIT_LOGS: "view_audit_logs",
};

// Export all permissions together for easy access
export const PERMISSIONS = {
  ...USER_PERMISSIONS,
  ...ADMIN_PERMISSIONS,
};

// Create a union type for permissions based on PERMISSIONS values
export type permissionsTypes = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export const PERMISSIONS_ARRAY: permissionsTypes[] = Object.values(PERMISSIONS);
