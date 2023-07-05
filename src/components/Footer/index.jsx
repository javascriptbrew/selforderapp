import { Box, Typography, Link } from "@mui/material"

const Footer = () => {
  return (
    <Box className="Footer" sx={{
      width: '100%',
      position: 'sticky',
      bottom: 0,
    }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          width: '100%',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          <Link href="#" variant="body2" sx={{
            textDecoration: 'none',
            color: 'inherit',
            '&:active': {
              color: 'blue',
            },
            '&:hover': {
              color: 'blue',
              fontSize: '16px',
              transition: 'all',
              transitionDuration: '300ms'
            },
          }} >
            Food Menu
          </Link>

        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link href="#" variant="body2" sx={{
            textDecoration: 'none',
            '&:active': {
              color: 'blue',
            },
            '&:hover': {
              color: 'blue',
              fontSize: '16px',
              transition: 'all',
              transitionDuration: '300ms'
            },
            color: 'inherit',
          }}
            selected >
            Food Expo
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link href="#" variant="body2" sx={{
            textDecoration: 'none',
            color: 'inherit',
            '&:active': {
              color: 'blue',
            },
            '&:hover': {
              color: 'blue',
              fontSize: '16px',
              transition: 'all',
              transitionDuration: '300ms'
            },
          }} >
            Bill
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer