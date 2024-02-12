import { z } from 'zod'

export const loadingSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
})

export type LoginSchemaType = z.infer<typeof loadingSchema>
