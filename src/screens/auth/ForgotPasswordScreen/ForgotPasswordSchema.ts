import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'common_email_invalid' }),
})

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>
