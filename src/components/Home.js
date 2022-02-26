import styled from 'styled-components'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home(props){
  return(
    <>
      <TitleContainer>
        <Typography variant='h1' sx={{ display: 'inline-block' }}>Pin-hsuan Peng</Typography>
        <Typography variant='h2'>Programmer x Designer</Typography>
        <Button variant='contained' endIcon={<ArrowForwardIcon />} sx={{ mt: 2.5 }} onClick={() => props.navigate('./Portfolio')}>see my portfolio</Button>
      </TitleContainer>
    </>
  )
  }
  
  export default Home;

  const TitleContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    text-align: center;
  `
  