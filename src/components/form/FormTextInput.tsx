import React from 'react'

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form'
import { IInput, Input } from '../input/Input'

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...props
}: IInput & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field, fieldState }) => (
        <Input
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...props}
        />
      )}
    />
  )
}
