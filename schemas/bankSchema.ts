import { z } from "zod";

export const bankSchema = z.object({
  cardNumber: z.string().min(12).max(12),
  month: z.string().min(2).max(2),
  year: z.string().min(2).max(2),
  pin: z.string().min(3).max(3),
});

export type TBankSchema = z.infer<typeof bankSchema>;
