import { Box, Container, Typography } from '@mui/material';
import Footer from '../../components/Footer';

const FoodMenu = () => {
  return (
    <Container component="main" maxWidth="xs"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        position: 'relative',
      }}
    >
      {/* TODO: remove the height */}
      <Box sx={{
        height: '100vh'
      }}>
        <Typography component="h1" variant="h5">
          Food Menu
        </Typography>
      </Box>
      <Footer />
    </Container>
  )
}

export default FoodMenu