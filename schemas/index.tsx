import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const RegisterSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  userName: z.string().min(3),
  password: z.string().min(6),
  email: z.string().email(),
  investorAccountType: z.enum(["INDIVIDUAL", "CORPORATE"]),
  accountName: z.string().min(2),
  contactNumber: z.string().min(10).max(15),  // Assuming phone numbers have a range between 10 to 15 digits
  contactAddress: z.string().min(5),
});
