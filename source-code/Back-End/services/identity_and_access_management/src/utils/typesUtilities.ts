// Remove required fields from interface `T`
type removeRequiredMakeNullableOptional<T> = {
  [P in keyof T as null extends T[P] ? P : never]?: T[P];
};

// Remove nullable fields from interface `T`
type removeNullableFields<T> = {
  [P in keyof T as null extends T[P] ? never : P]: T[P];
};

/**
 * Make all nullable fields from interface `T` optional while preserving required fields
 * @param T Type representing the interface to make its all nullable fields optional
 */
export type makeNullFieldsOptional<T> = removeNullableFields<T> & removeRequiredMakeNullableOptional<T>;
