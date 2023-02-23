import { Button, ButtonPropsVariantOverrides  } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

interface HelloWorldButtonProps {
  variant: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides>;
  text?: string
}

const HelloWorldButton = (props: HelloWorldButtonProps) => <Button variant={props.variant}>{ props.text || 'Hello World'}</Button>;

export default HelloWorldButton;