import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  background: '$gray900',
  borderRadius: '$sm',
  width: '$64',
  height: '$12',
  color: '#fff',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$shorter',

  '&:after': {
    content: '',
    width: 0,
    height: 0,
    position: 'absolute',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid $gray900',
    bottom: '-10px',
    left: '40%',
  },
})
