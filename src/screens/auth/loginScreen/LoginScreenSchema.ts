import { z } from 'zod'

export const loadingSchema = z.object({
  email: z.string().email({ message: 'common_email_or_password_invalid' }),
  password: z.string().min(6, { message: 'login_password_have_min_6_char' }),
})

export type LoginSchemaType = z.infer<typeof loadingSchema>
