import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import test from '../../assets/img/avatar/longtkhd.jpg'
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import WcIcon from '@material-ui/icons/Wc';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight:0,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  about : {
    textAlign:'left',
    paddingTop: theme.spacing(1),
   
  }
  
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={4}>
         
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`${test}`}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jennie Kim
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow
        </Button>
                <Button size="small" color="primary">
                 Message
        </Button>
              </CardActions>
            </Card>
            
         
        </Grid>

        <Grid item xs={8}>
          <Paper className={classes.paper}> 
            More
          </Paper>
       
          
        </Grid>
        <Grid item xs={4}>
         
            <Paper className={classes.paper}>

              <Typography gutterBottom variant="h5" component="h2" className={classes.about}>
                About
          </Typography>
              <Typography color="textSecondary" component="h1" className={classes.about} >
                <HomeIcon /> Live in : Hải Dương
            </Typography>
              <Typography color="textSecondary" component="h1" className={classes.about}>
                <EmojiPeopleIcon /> Age : 20
            </Typography>
              <Typography color="textSecondary" component="h1" className={classes.about}>
                <StayCurrentPortraitIcon />  Phone : 0353792709
            </Typography>
              <Typography color="textSecondary" component="h1" className={classes.about}>
                <WcIcon />  Gender : Male
            </Typography>


           
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Skill</Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}
