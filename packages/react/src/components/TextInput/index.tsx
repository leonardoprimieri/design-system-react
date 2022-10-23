import { ComponentProps } from 'react'
import { Input, Label, Prefix, TextInputContainer } from './styles'

export type TextInputProps = {
  prefix?: string
  label?: string
} & ComponentProps<typeof Input>

export function TextInput({ prefix, label, ...props }: TextInputProps) {
  return (
    <>
      {!!label && <Label>{label}</Label>}
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
      </TextInputContainer>
    </>
  )
}

TextInput.displayName = 'TextInput'
