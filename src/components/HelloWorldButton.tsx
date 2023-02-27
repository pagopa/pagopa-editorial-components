import { Button, type ButtonPropsVariantOverrides } from '@mui/material'
import { type OverridableStringUnion } from '@mui/types'

export interface HelloWorldButtonProps {
  variant: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides>
  text?: string
}

const HelloWorldButton = (props: HelloWorldButtonProps) =>
  <Button variant={props.variant}>{ (props.text != null) || 'Hello World'}</Button>

export default HelloWorldButton
