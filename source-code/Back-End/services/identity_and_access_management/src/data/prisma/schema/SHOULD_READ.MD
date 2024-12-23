# **Database Constraints Guide**

This document outlines the steps for applying additional constraints to the database. These constraints are essential to enforce data integrity beyond what is defined in the Prisma schema. Follow these instructions carefully after generating the Prisma client and before running migrations.

---

## **Steps to Apply Constraints**

1. **Generate a Prisma Migration**
   Run the following command to generate a migration file:

   ```bash
   npx prisma migrate dev --name <migration_name>
   ```

   Replace `<migration_name>` with a descriptive name for the migration (e.g., `add_username_constraint`).

2. **Locate the Migration File**
   Navigate to the `prisma/migrations` directory and locate the newly created migration folder. Open the `migration.sql` file within this folder.

3. **Copy and Paste the Code**
   Copy the SQL code provided below and paste it at the end of the `migration.sql` file.

4. **Apply the Migration**
   Save the file and apply the migration to the database using:

   ```bash
   npx prisma migrate dev
   ```

---

## **SQL Code for Constraints**

```sql
-- Add a constraint to ensure the `username` field does not contain the '@' character
ALTER TABLE "User" ADD CONSTRAINT username_no_at CHECK (username NOT LIKE '%@%');
```

---

## **Important Notes**

- Ensure that the constraint is added only after generating the migration file. Directly editing an existing migration file after it has been applied to the database may cause issues.
- This constraint is specific to databases that support SQL `CHECK` constraints (e.g., PostgreSQL). For other database types, consult their documentation for equivalent functionality.
- Prisma does not directly recognize custom database constraints. Document any newly added constraints in a clear way.
