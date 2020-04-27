
import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import dashboardImg from '../../images/HIT/Hit.jpg'
import welcomeImg from '../../images/HIT/chaomunghit.png';
import welcomImg1 from'../../images/HIT/asset4.png'
import UserChart from './component/userPieChart';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMemberPage from '../MemberPage/selectors';
import reducer from '../MemberPage/reducer';
import saga from '../MemberPage/saga';
import { getAllUserAction} from '../MemberPage/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export  function DashboardPage(props) {
  useInjectReducer({ key: 'memberPage', reducer });
  useInjectSaga({ key: 'memberPage', saga });
  const { memberPage } = props;
  useEffect(() => {
    props.onGetUsers({
      filter: {
        role: 'admin',
      },
    });
    console.log(memberPage)

  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <img align="center"
                className={classes.logoImage}
                // src="/images/logos/brainalytica_logo.svg"
                alt="anh"
                src={dashboardImg}
                style={{ width: "100%" }}
              />
            </Paper>
          </Grid>
          <Paper className={classes.paper}>
            <img align="center"
              className={classes.logoImage}
              // src="/images/logos/brainalytica_logo.svg"
              alt="anh"
              src={welcomImg1}
              style={{ width: "50%" }}
            />
          </Paper>
        </Grid>
        
        <Grid item xs={6}>
         
          <UserChart style ={{height:'100%'}}/>

          
        </Grid>
        
      </Grid>



      {/* hang2 */}
      <Grid item xs={6}>
        

          {/* <Paper className={classes.paper}>
            <img align="center"
              className={classes.logoImage}
              // src="/images/logos/brainalytica_logo.svg"
              alt="anh"
              src={welcomImg1}
              style={{ width: "100%" }}
            />
          </Paper> */}

      
       
      </Grid>
    </div>
  );
}

// const countActive = () => {
//   for(let i = 0 ;i<props.memberPage.users.length;i++){
      
//   }

// }

const mapStateToProps = createStructuredSelector({
  memberPage: makeSelectMemberPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,   
    onGetUsers: body => dispatch(getAllUserAction(body)),
    
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  // withStyles(styles),
  withConnect,
)(DashboardPage);

