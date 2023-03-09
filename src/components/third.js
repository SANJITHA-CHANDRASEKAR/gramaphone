import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://data.whicdn.com/images/323641830/original.jpg',
    title: 'TRENDING',
    width: '40%',
    link:"/four",
  },
  {
    url: 'https://i.pinimg.com/736x/ff/fc/47/fffc47a7808ae434e65e73dd551a5bf9.jpg',
    title: 'MELODY',
    width: '20%',
    link:"/four",
  },
  {
    url: 'https://cdn.pixabay.com/photo/2014/05/09/21/11/concert-340989_960_720.jpg',
    title: 'POP',
    width: '40%',
    link:"/four",
  },
  {
    url:'https://societymusictheory.org/sites/default/files/styles/large/public/2020-02/music-647921_1920.jpg?itok=UpEiBgf6',
    title: 'FOLK',
    width: '30%',
    link:"/four",
  },
  {
    url: 'https://wallpapers.com/images/high/neon-purple-gospel-musical-notes-vdtcr7od76w200ah.jpg',
    title: 'SOUND TRACK',
    width: '40%',
    link:"/four",
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJm7AarnYm6P5gFolVJJupydGNsCCSOvfAsDr0kHpjcl39DVGMhG-6BwskjcDAD87pPI&usqp=CAU',
    title: 'CLASSICAL',
    width: '30%',
    link:"/four",
  },
  {
    url: 'https://i.pinimg.com/originals/cf/64/a4/cf64a4fe4b397be81c710fe8878f727f.png',
    title: 'ALBUM',
    width: '40%',
    link:"/four",
  },
  {
    url: 'https://img.freepik.com/premium-photo/jazz-music-concept-abstract-motion-blurred-image-saxophone-player-performing-stage-sax-player-going-crazy_173948-4914.jpg',
    title: 'JAZZ',
    width: '35%',
    link:"/four",
  },
  {
    url: 'https://i.pinimg.com/736x/23/80/3d/23803d9988f6163d534fb210a2dbc3d9.jpg',
    title: 'K-POP',
    width: '25%',
    link:"/four",
  },
];

export default function ThirdPage() {
  return (
    
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" className='genre' align="center" component="h2">
        Genres
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
              <Link to={image.link} className="genre">{image.title}</Link>
                <div className="imageMarked">

                </div>
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}