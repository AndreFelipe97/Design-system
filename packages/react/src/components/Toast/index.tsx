import { X } from 'phosphor-react'
import {
  ToastContainer,
  ToastContent,
  ToastDescription,
  ToastTitle,
} from './styles'

export interface ToastProps {
  description: string
}

export function Toast({ description }: ToastProps) {
  return (
    <ToastContainer>
      <ToastContent>
        <ToastTitle>Agendamento Realizado</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContent>
      <X size={20} />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
