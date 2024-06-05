import * as React from 'react';

// MUI Imports
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// Image Imports
import techStoreImg from '../images/techstore.PNG';
import dustersSiteImg from '../images/dusters.png'

const projectsSlides = [
    {
        label: 'Faux Tech Store',
        imgPath: techStoreImg,
    },
    {
      label: 'Local Edmonton Soccer Team',
      imgPath: dustersSiteImg,
    }
];


export default function ProjectSlideCarousel() {

    const theme = useTheme();
    const [action, setAction] = React.useState(0);
    const maxAction = projectsSlides.length;


    const nextProject = () => {
        setAction((prevAction) => prevAction + 1);
    };

    const lastProject = () => {
        setAction((prevAction) => prevAction - 1);
    };


    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '2rem', m: '2rem',backgroundColor: 'lightgrey', borderRadius: '5rem'}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          width: '90%',
          borderRadius: '5rem',
          backgroundColor: 'lightgrey'
        }}
      >
        <Typography sx={{fontSize: "4rem", fontWeight: 700}}>{projectsSlides[action].label}</Typography>
      </Paper>

      <Box sx={{ p: 2 }}>
      {projectsSlides.map((choice, index) => (
          <div key={choice.label} style={{ display: action === index ? 'block' : 'none' }}>
            {Math.abs(action - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  objectFit: 'cover',
                  margin: 'auto',

                }}
                src={choice.imgPath}
                alt={choice.label}
                />
          ) : null}
          </div>
      ))}
      </Box>
   

      <MobileStepper
        sx={{ width: '90%', textAlign: 'center', m: 2, position: "inherit",borderRadius: '5rem', backgroundColor: 'white'}}

        steps={maxAction}
        activeStep={action}
        nextButton={
          <Button
            size="large"
            onClick={nextProject}
            disabled={action === maxAction - 1}
            sx={{color: 'black', fontWeight: 700}}
          >
            Next Project
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button 
            size="large" 
            onClick={lastProject} 
            disabled={action === 0}
            sx={{color: 'black', fontWeight: 700}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Last Project
          </Button>
        }
      />
    </Box>
    );

}