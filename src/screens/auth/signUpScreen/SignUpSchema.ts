import { z } from 'zod'

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(10, 'create_account_very_short_name_error')
      .max(50, 'create_account_very_long_username_error')
      .transform(value => {
        return value
          .split(' ')
          .map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join(' ')
      }),
    email: z.string().email(),
    password: z.string().min(6, 'login_password_have_min_6_char'),
    confirmPassword: z.string().min(6, 'login_password_have_min_6_char'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'create_account_password_not_match_error',
        path: ['confirmPassword'],
      })
    }
  })

export type SignUpSchemaType = z.infer<typeof signUpSchema>
