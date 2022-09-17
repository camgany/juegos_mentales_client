import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ADM from '../../assets/images/escuelas/ADM.png';
import COM from '../../assets/images/escuelas/COM.png';
import CSJ from '../../assets/images/escuelas/CSJ.png';
import DIS from '../../assets/images/escuelas/DIS.png';
import DTI from '../../assets/images/escuelas/DTI.png';
import EIE from '../../assets/images/escuelas/EIE.png';
import FIN from '../../assets/images/escuelas/FIN.png';
import ICO from '../../assets/images/escuelas/ICO.png';
import MEE from '../../assets/images/escuelas/MEE.png';
import MKT from '../../assets/images/escuelas/MKT.png';
import { Link } from '@mui/material';
const images = [
  {
    url: ADM,
    title: 'Administración',
    width: '30%',
    height: '30%',
  
  },
  {
    url: COM,
    title: 'Comunicación',
    width: '30%',
  },
  {
    url: CSJ,
    title: 'CSJ',
    width: '30%',
  },
  {
    url: DIS,
    title: 'Diseño',
    width: '30%',
  },
  {
    url: DTI,
    title: 'DTI',
    width: '30%',
  },
  {
    url: EIE,
    title: 'EIE',
    width: '30%',
  },
  {
    url: FIN,
    title: 'FIN',
    width: '30%',
  },
  {
    url: ICO,
    title: 'ICO',
    width: '30%',
  },
  {
    url: MEE,
    title: 'MEE',
    width: '30%',
  },
  {
    url: MKT,
    title: 'MKT',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 600,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
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
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 600, width: '100%' }}>
      {images.map((image) => (

        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            margin: 'auto auto auto auto',
          }}
          marginBottom="20px"
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
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
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
