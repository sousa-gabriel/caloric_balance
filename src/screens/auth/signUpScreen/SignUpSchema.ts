import { z } from 'zod'

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim
export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(10, 'nome muito curto')
      .max(50, 'nome muito longo')
      .transform(value => {
        return value
          .split(' ')
          .map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join(' ')
      }),
    nickName: z
      .string()
      .regex(userNameRegex, 'username invalido')
      .toLowerCase(),
    email: z.string().email(),
    password: z.string().min(8, 'minimum 8 characters'),
    confirmPassword: z.string().min(8, 'minimum 8 characters'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'as senhas não são iguais',
        path: ['confirmPassword'],
      })
    }
  })

export type SignUpSchemaType = z.infer<typeof signUpSchema>
