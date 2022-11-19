import { IFieldProps } from '@/components/ui/field/field.interface'
import { TextareaHTMLAttributes } from 'react'

type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps

export interface ITextArea extends TypeInputPropsField {}
