import { TooltipContainer } from './styles'

export interface TooltipProps {
  description: string
}

export function Tooltip({ description }: TooltipProps) {
  return <TooltipContainer>{description}</TooltipContainer>
}

Tooltip.displayName = 'Tooltip'
