import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import HomeButton from '../uiComponents/homeButton';
import axios from 'axios';
import { useData } from '../contextFolder/dataContext';
import { useNavigate } from 'react-router-dom';
const images = [
  {
    url: 'https://wallpapercave.com/dwp2x/wp4871607.jpg',
    title: 'Tamil',
    width: '50%',
  },
  {
    url: 'https://w0.peakpx.com/wallpaper/902/790/HD-wallpaper-avatar-2-the-way-of-water-trailer.jpg',
    title: 'English',
    width: '50%',
  },
  {
    url: 'https://wallpapercave.com/dwp2x/wp6578205.jpg',
    title: 'Hindi',
    width: '50%',
  },
  {
    url: 'https://wallpapercave.com/dwp2x/wp9932802.jpg',
    title: 'Korean',
    width: '50%',
  },

];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
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
      border: '4px solid currentColor',
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

export default function Language() {
  const navigate = useNavigate();
  const { setLanguageArray } = useData();

  const handleLanguage = (language) => {
    axios.get(`https://popcorntime-movie-series.onrender.com/popcornTime/languagepicture/${language}`)
      .then((res) => {
        const fetchedLanguageArray = res.data; // Assuming the response contains an array
       

        // Update the context with the fetched data
        setLanguageArray(fetchedLanguageArray);

        // Navigate to the child component for languages
        navigate('/childlanguage');
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
        alert('An error occurred while making the request.');
      });
  };
  return (
  <div className='language-container'>
    <HomeButton/>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
       
       {images.map((image) => (
         <ImageButton
           focusRipple
           key={image.title}
           style={{
             width: image.width,
           }}
           onClick={() => handleLanguage(image.title)}
         >
           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
           <ImageBackdrop className="MuiImageBackdrop-root" />
           <Image>
             <Typography
               component="span"
               variant="subtitle1"
               color="inherit"
               sx={{
                 position: 'relative',
                 p: 4,
                 pt: 2,
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
  </div>
  );
}