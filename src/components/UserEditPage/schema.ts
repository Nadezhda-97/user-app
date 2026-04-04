import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(2, 'Необходимо минимум 2 символа').max(64, 'Максимум 64 символа'),
  username: z.string().min(2, 'Необходимо минимум 2 символа').max(64, 'Максимум 64 символа'),
  email: z.email('Некорректный формат email'),
  city: z.string().min(2, 'Необходимо минимум 2 символа').max(64, 'Максимум 64 символа'),
  phone: z.string().regex(/^\d+$/, 'Только цифры'),
  company: z.string().min(2, 'Необходимо минимум 2 символа').max(64, 'Максимум 64 символа'),
});

export type FormData = z.infer<typeof schema>;
