import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input, InputProps } from '../ui/input'

export const TextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  placeholder,
  inputMode
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  label: string
  placeholder?: string
  inputMode?: InputProps['inputMode']
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} inputMode={inputMode} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
