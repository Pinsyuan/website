import styled from 'styled-components'
import { useEffect, useState } from 'react';
import itemData from './data.js'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import TuneIcon from '@mui/icons-material/Tune';

function Portfolio(props){  

  const programmingType = ['Web', 'Framework', 'Algorithm', 'Game'];
  const designType = ['UIUX', 'Visual', 'Animation', 'Brand'];

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
  const [anchorEl, setAnchorEl] = useState(null);
  const [types, setTypes] = useState(programmingType.concat(designType));


  const handlePopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }
  const open = Boolean(anchorEl)

  const handleSwitch = (type) => {
    const index = types.indexOf(type);
    index===-1 ? types.push(type) : types.splice(index, 1)
    setTypes(types)
    setTypes(t=>[...t])
  }


  return(
    <>
      <BgPaper />
      <TitleContainer elevation={0}>
        <Typography variant='h3' sx={{ position: 'relative', top: 50 }}>Portfolio.</Typography>
      </TitleContainer>
      <Container>
        <IconButton color='primary' size='large' sx={{ boxShadow: 2 }} onClick={handlePopper}>
          <TuneIcon />
        </IconButton>
        <Popper open={open} anchorEl={anchorEl} placement='bottom-start'>
          <Box sx={{ p: 2, boxShadow: 2, borderRadius: 2, bgcolor: 'background.paper' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant='body2' color='text.main' sx={{ pb: 1 }}>Programming</Typography>
                <FormGroup>
                  {programmingType.map((type) => (
                    <FormControlLabel control={<Switch color='primary' defaultChecked onClick={() => handleSwitch(`${type}`)}/>} label={type} />
                  ))}
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='body2' color='text.main' sx={{ pb: 1 }}>Design</Typography>
                <FormGroup color='secondary'>
                  {designType.map((type) => (
                    <FormControlLabel control={<Switch color='secondary' defaultChecked onClick={() => handleSwitch(`${type}`)}/>} 
                    label={<Typography variant='body1' color='secondary'>{`${type}`}</Typography>} />
                  ))}
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
        </Popper>
        <ImageList cols={ isMobile ? 3 : 2 } gap={20} sx={{ width: 1 }}>
          {itemData.filter(prop => types.indexOf(prop.class)>=0).map((item) => (
            <ImgListItem sx={{ cursor: 'pointer', p: 0.5 }} onClick={()=>props.navigate(`/Portfolio/${item.urlName}`)}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={<Typography variant='body1' sx={{ height: 30 }}>{item.title}</Typography>}
                subtitle={<Typography variant='body2'sx={{ height: 20 }}>{item.hashtag}</Typography>}
                position="below"
              />
            </ImgListItem>
          ))}
        </ImageList>
      </Container>
      
    </>
  )
}
  
export default Portfolio;

const BgPaper = styled(Paper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 350%;
  background-color: '#fff';
  z-index: -1;
`

const TitleContainer = styled(Paper)`
  width: 100vw;
  height: 35vh;
  text-align: center;
`

const ImgListItem = styled(ImageListItem)`
  transition: 500ms;
  :hover{
    transform: scale(1.02);
  }
`
