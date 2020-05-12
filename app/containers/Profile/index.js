import React,{useEffect,useState} from 'react';
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
// import test from '../../assets/img/avatar/longtkhd.jpg'
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import WcIcon from '@material-ui/icons/Wc';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getUserById, getUserByIdSuccess, getUserByIdFailed } from './actions';
import {BASE_URL} from '../../urlConfig'

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

export  function Profile(props) {
  const classes = useStyles();
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });
  const {profile} = props;
  // console.log(`${BASE_URL}`)

  useEffect(() => {
    const id = props.match.params.id;
    props.onGetUsersId(id);
    
   

  }, []);
  console.log(props.profile)

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
                image={`${BASE_URL}/user/${props.match.params.id}/avatar/large`}
                
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {profile.users.fullName}
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {profile.users.bio}
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow
        </Button>
                <Button size="small" color="primary">                 Message
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
              <HomeIcon /> Live in : { profile.users.address }
            </Typography>
              <Typography color="textSecondary" component="h1" className={classes.about}>
              <EmojiPeopleIcon /> Age : {profile.users.dob}
            </Typography>
              <Typography color="textSecondary" component="h1" className={classes.about}>
                <StayCurrentPortraitIcon />  Phone : {profile.users.phone}
            </Typography>
              <Typography color="textSecondary" component="h1" className={classes.about}>
              <WcIcon />  Gender : {profile.users.gender}
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

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
   
    onGetUsersId: id => dispatch(getUserById(id)),
    


  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  // withStyles(styles),
  withConnect,
)(Profile);

