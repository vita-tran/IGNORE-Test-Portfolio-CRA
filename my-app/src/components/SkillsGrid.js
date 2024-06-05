import React from 'react';

// MUI Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// Constants 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function SkillGrid() {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Grid container spacing={15} justifyContent="center" alignItems= "center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3} md={1.5}>
            <Item>
                <img src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png' alt='python icon' style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                JavaScript
            </Item>
          </Grid>

          <Grid item xs={3} md={1.5}>
            <Item>
                <img src='https://cdn-icons-png.flaticon.com/128/8422/8422322.png' alt='SQL icon' style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
                SQL
            </Item>
          </Grid>

          <Grid item xs={3} md={1.5}>
            <Item>
                <img src='https://cdn-icons-png.flaticon.com/128/6132/6132221.png' alt='C# icon' style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                C#
            </Item>
          </Grid>
          
          <Grid item xs={3} md={1.5}>
            <Item>
                <img src='https://cdn-icons-png.flaticon.com/128/5968/5968350.png' alt='SQL icon' style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                Python
            </Item>
          </Grid>

          <Grid item xs={3} md={1.5}>
            <Item>
                <img src='https://cdn-icons-png.flaticon.com/128/1051/1051277.png' alt='SQL icon' style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                HTML
            </Item>
          </Grid>

          <Grid item xs={3} md={1.5}>
            <Item>
                <img src='https://cdn-icons-png.flaticon.com/128/16020/16020753.png' alt='SQL icon' style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                CSS
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }