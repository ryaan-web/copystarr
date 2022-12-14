import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styledWrapper from 'styled-components';
import AvatarImg from '../../images/copystarr_avatar.jpg';
import LogoImg from '../../images/copystarr_logo.png';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Testimonials() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 900 , margin: '6rem auto' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Testimonials"
        titleTypographyProps = {{ color: '#EABA3F', fontSize: '20px' }}
        style={{color: '#EABA3F', background: '#161616' }}
      />
      <CardContent>
        <Typography sx={{ textAlign: 'center' }} variant="h5" color="text.primary">
          I help businesses 5-10x their sales by providing high precision conversion copy.
          I have worked with various clients over a unique combination of niches that all complement each other.

        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{background: '#161616'}}>
        <span style={{ 
          color: '#e9ba3f',
          width: '100%',
          textAlign:'right'
          }}>see more</span>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="more"
        >
          <Typography sx={{ color: '#EABA3F' }} variant="span" color="text.primary"></Typography>
          <ExpandMoreIcon style={{color: '#EABA3F' }}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <TestimonialCard>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                KL
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Name: K. S. Luthra"
            subheader="(Tohima Filters)"
            subheaderTypographyProps = {{color: '#EEE', fontSize: '16px' }}
            titleTypographyProps = {{ color: '#EEE', fontSize: '16px' }}
            style={{color: '#EABA3F', background: '#161616' }}
          />
          <CardContent>
            <Typography sx={{ 
              textAlign: 'left', 
              fontSize: '18px', 
              background: 'lightgrey',
              padding: '1rem',
              borderRadius: '0.5rem' }} variant="h5" color="text.primary">
              Aon reached out to me randomly and started giving me insights on my business that 
              I had never thought of during last 10 years of my operations.
              My sales were boosted by 1.8x in the 2nd month itself. Great experience. Time for new milestones
            </Typography>
          </CardContent>
        </TestimonialCard>

        <TestimonialCard>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                VS
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Name: V. Singh"
            subheader="(Black Rose)"
            subheaderTypographyProps = {{color: '#EEE', fontSize: '16px' }}
            titleTypographyProps = {{ color: '#EEE', fontSize: '16px' }}
            style={{color: '#EABA3F', background: '#161616' }}
          />
          <CardContent>
            <Typography sx={{ 
              textAlign: 'left', 
              fontSize: '18px', 
              background: 'lightgrey',
              padding: '1rem',
              borderRadius: '0.5rem' }} variant="h5" color="text.primary">
              Very fast results! I am impressed. The best thing I like about you is that you don't
              just get things done but also teach and discuss how and why a certain approach was taken.
            </Typography>
          </CardContent>
        </TestimonialCard>
      </CardContent>
      </Collapse>
    </Card>
  );
}

const CardMediaWrapper = styledWrapper.div`
  display: flex;
  -webkit-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  -moz-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  padding: 1rem;
`;

const TestimonialCard = styled(Card)`
  margin: 2rem;
`;