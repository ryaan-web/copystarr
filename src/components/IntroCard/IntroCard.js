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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 900 , margin: '3rem auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            AS
          </Avatar>
        }
        title="Name: Aon Starr"
        subheader="(aonstarr@copystarr.com)"
        subheaderTypographyProps = {{color: '#EABA3F', fontSize: '20px' }}
        titleTypographyProps = {{ color: '#EABA3F', fontSize: '20px' }}
        style={{color: '#EABA3F', background: '#161616' }}
      />
      <CardMediaWrapper>
        <CardMedia
          component="img"
          height="300"
          image={LogoImg}
          alt="Logo"
        />
      </CardMediaWrapper>
      <CardContent>
        <Typography sx={{ textAlign: 'center' }} variant="h3" color="text.primary">
          Freelance Copywriter
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{background: '#161616'}}>
        <IconButton aria-label="instagram">
          <Link variant='a' href="https://www.instagram.com/copy_starr" target="_blank">
            <InstagramIcon style={{color: '#EABA3F' }} />
          </Link>
        </IconButton>
        <IconButton aria-label="twitter">
          <Link variant='a' href="https://twitter.com/copystarr" target="_blank">
            <TwitterIcon style={{color: '#EABA3F' }}  />
          </Link>
        </IconButton>
        
        {/* <ExpandMore
          expand={true}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color: '#EABA3F' }}/>
        </ExpandMore> */}
      </CardActions>
      <Collapse in={true} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography sx={{ textAlign: 'center' }} variant="h3" color="text.primary">
          <ServicesTitle>
          Sevices
          </ServicesTitle>
          
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h4" color="text.primary">
          Email Copy
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h4" color="text.primary">
          Sales Pages
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h4" color="text.primary">
          Sequential Emails
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h4" color="text.primary">
          Facebook Ads
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h4" color="text.primary">
          Twitter Posts
        </Typography>
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

const ServicesTitle = styledWrapper.span`
  display: inline-block;
  width 100%;
  color: #E9BA3F;
  margin-bottom: 1rem;
`;