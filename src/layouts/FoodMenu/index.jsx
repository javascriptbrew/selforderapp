import { Box, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Footer from '../../components/Footer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { Search } from '@mui/icons-material';

const FoodMenu = () => {

  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <Container component="main" maxWidth="xs"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{
      }}>
        <Box className="header" sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
            <Typography component="h3" variant="h5">
              Restro Name
            </Typography>
            <Typography component="p">
              Table No: AZ-10
            </Typography>
          </Box>
          <Box>
            <ShoppingCartIcon />
          </Box>
        </Box>
        <Box className="searchAndFilter" sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}>
          <TextField
            label="Search"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <Search position="start" />,
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="Filter">Filter</InputLabel>
            <Select
              labelId="Filter"
              id="demo-simple-select"
              value={filter}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value={10}>meow</MenuItem>
              <MenuItem value={20}>meowww</MenuItem>
              <MenuItem value={30}>meowwww</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Footer />
    </Container>
  )
}

export default FoodMenu