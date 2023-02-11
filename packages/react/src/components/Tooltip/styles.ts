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
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderTop: '20px solid $gray900',
    bottom: '-20px',
    left: '40%',
  },
})
