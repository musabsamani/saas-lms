// bycrpt constants
export const SALT_ROUNDS = 10 as const;

// jwt constants
export const JWT_EXPIRES = {
  VERY_LONG: "45d", // 45 days for long-term tokens like "Remember Me"
  LONG: "14d", // 14 days for tokens used for less frequent activities
  MEDIUM: "1d", // 1 day for standard sessions
  SHORT: "1h", // 1 hour for temporary access or elevated permissions
  VERY_SHORT: "15m", // 15 minutes for highly sensitive operations
} as const;

export type JwtExpiresValues = (typeof JWT_EXPIRES)[keyof typeof JWT_EXPIRES];
