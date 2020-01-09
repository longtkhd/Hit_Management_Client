import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
// import Switch from '@material-ui/core/Switch';
import {
  Grid,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import UploadImg from './components/upload/index';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "99%",
  },
 
  
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function AddUserPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Icon className="fa fa-plus-circle" color="primary" onClick={handleClickOpen}></Icon> */}
      <Tooltip title="Add">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add
      </Button>
      </Tooltip>
      <Dialog style={{ marginLeft: 255, backgroundColor: '#f8fafc' }} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <ValidatorForm >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cancel
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <div className="p-4" style={{ height: '100%', paddingTop: '50px' }}>
          <Grid
            container
            spacing={12}
            className="p-4"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      // onChange={handChangeUserInfor('fullName')}
                      
                      label="Tên thành viên"
                      margin="normal"
                    /> 
                </Grid>
                  <Grid item xs={8}>
                    <TextValidator
                      // style={{ width: '100%' }}
                      className={classes.textField}
                      fullWidth
                      
                    label="Email"
                      variant="outlined"
                      validators={['required', 'isEmail']}
                      errorMessages={[
                        'Vui lòng nhập dữ liệu trường này',
                        'Email không hợp lệ',
                      ]}
                      // onChange={handChangeUserInfor('email')}
                      // value={userInfor.email}
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Chức vụ"
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      // onChange={handChangeUserInfor('role')}
                      // value={userInfor.role}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Mã Sinh Viên"
                      validators={['required', 'isNumber']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này', 'Vui lòng nhập dữ liệu là số']}
                      // onChange={handChangeUserInfor('studentCode')}
                      // value={userInfor.studentCode}
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Lớp"
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      // onChange={handChangeUserInfor('class')}
                      // value={userInfor.class}
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Khoa"
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Niên khoá CLB"
                      validators={['required', 'isNumber']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này', 'Vui lòng nhập kí tự số']}
                      // onChange={handChangeUserInfor('clubYear')}
                      // value={userInfor.clubYear}
                      margin="normal"
                    // type="Number"
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required', 'isNumber']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này',
                        'Vui lòng nhập kí tự số',
                      ]}
                      // onChange={handChangeUserInfor('schoolYear')}
                      // value={userInfor.schoolYear}
                      label="Khóa"
                      margin="normal"
                    // type="Number"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required',
                        'isNumber',
                        'minStringLength:10',
                        'maxStringLength:10',]}
                      errorMessages={['Vui lòng nhập dữ liệu trường này',
                        'Yêu cầu nhập kí tự số',
                        'Số điện thoại với 10 kí tự số',
                        'Số điện thoại với 10 kí tự số',]}
                      
                      label="Số điện thoại"
                      margin="normal"
                    // type="Number"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Ngày Sinh"
                      margin="normal"
                    />
                  </Grid>

                  
                  <Grid item xs={9}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      
                      label="Địa chỉ"
                      margin="normal"
                    />
                  </Grid>
                  

                  <Grid item xs={3}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                     
                      label="Vị trí"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      
                      label="Giới tính"
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={9}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      
                      label="Giới thiệu ngắn "
                      margin="normal"
                    />
                  </Grid>

                  {/* <FormControlLabel
                    control={
                      <Switch checked={true}  />
                    }
                    label="Secondary"
                  /> */}
                  

                  <Grid item xs={5}
                  style = {{paddingTop: '50px'}}
                    
                  >
                    <UploadImg name ='Avatar'/>
                      
                  </Grid>
                  <Grid item xs={2}

                  >
                    

                  </Grid>
                  
                  <Grid item xs={5}
                    style={{ paddingTop: '50px' }}>
                    <UploadImg name='QR Code'/>
                 
                  </Grid>
                  

                 



              </Grid>
            </Grid>
          </Grid>
          </div>
        </ValidatorForm> 
        
      </Dialog>
    </div>
  );
}
