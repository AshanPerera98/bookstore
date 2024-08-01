import { z } from "zod";

export const addressSchema = z.object({
  firstName: z.string().min(5, "First name must be at least 5 characters"),
  lastName: z.string().optional(),
  number: z.string().min(1, "Address number can not be empty"),
  street: z.string().min(1, "Street name can not be empty"),
  city: z.string().min(1, "City can not be empty"),
  state: z.string().optional(),
  country: z.string().min(1, "Country can not be empty"),
  postal: z.string().min(1, "Postal code can not be empty"),
});

export type TAddressSchema = z.infer<typeof addressSchema>;
