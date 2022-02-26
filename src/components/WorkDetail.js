import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import itemData from './data.js'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function WorkDetail(){
  const { workName } = useParams();
  const workData = itemData.find(item => item.urlName===workName)


  const handleLink = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
  }

  return(
    <>
      <BgPaper />
      <Container sx={{ pt: 3 }}>
        <Typography variant='h5' color='primary.main' sx={{ fontFamily: 'Cormorant Garamond' }}>{workData.title}</Typography>
        <Typography variant='body1' color='text.main'>{workData.discription}</Typography>
        {workData.ifLink && <Button variant='contained' endIcon={<ArrowForwardIcon />} sx={{ mt: 2.5, float: 'right' }} disableElevation onClick={() => handleLink(workData.link)}>see my work</Button>}
        <BannerImg src={workData.banner} />
        {workData.content.map((item) => (
          <>
            <Typography variant='h5' color='secondary.main' sx={{ fontWeight: 'regular' }}>{item.subtitle}</Typography>
            <Typography variant='body1' color='text.main'>{item.text}</Typography>
          </>
        ))}
      </Container>
    </>
    )
  }
  
export default WorkDetail;

const BgPaper = styled(Paper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 150%;
  background-color: '#fff';
  z-index: -1;

  @media only screen and (max-width: 680px) {
		width: 750px;
	}
`

const BannerImg = styled.img`
  width: 100%;
  padding-top: 3%;

  @media only screen and (max-width: 680px) {
		width: 680px;
	}
`