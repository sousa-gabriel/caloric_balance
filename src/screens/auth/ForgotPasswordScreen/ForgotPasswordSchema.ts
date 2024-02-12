import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
})

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>
