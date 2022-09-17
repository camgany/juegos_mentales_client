import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import DTI from '../../assets/images/escuelas/DTI.png';
import Paper from '@mui/material/Paper';
const image = [
  {
    url: DTI,
    title: 'DTI',
    width: '50%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 500,
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    width: '50% !important', // Overrides inline-style
    height: 400,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '8px solid currentColor',
      color: 'white',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius: '10px',
  border: '15px solid #00b700',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  borderRadius: '10px',
  border: '15px solid #00b700',
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
  borderRadius: '10px',
  border: '15px solid #00b700',
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
 
}));

export default function ButtonBases() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 600, width: '100%', justifyContent: 'center', alignItems: 'center', spacing: 2,
    }}>  

        <ImageButton
          
          key={'DTI'}
          style={{
            width: '30%',
            margin: '2%',
            elevation: 24,
            

          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${DTI})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                fontSize: '1.5rem',
                bgcolor: 'rgba(0, 0, 5, 0.8)',
                borderRadius: '10px',
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              DTI
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
    </Box>
  );
}
