import React, { useState, useEffect } from 'react';
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
import bg from '../../images/chat-bg-3.png';
import MaterialUIPickers from '../../components/Crud//datePicker/datepicker';
import NativeSelects from '../../components/Crud/select.js/index.js';
import EditIcon from '@material-ui/icons/Edit';

// import Switch from '@material-ui/core/Switch';
import {
  Grid,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import UploadImg from '../../components/Crud/upload';

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
    width: "97%",

  },
  Dialog: {
    marginLeft: 255,
    backgroundColor: '#f8fafc',
    // backgroundImage: `url(${bg})`
  },
  Toolbar: {
    background: "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))",
  },


}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function EditUser(props) {
  

  const [dob, setDob] = React.useState('');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [schoolClass, setSchoolClass] = useState('');
  const [faculty, setFaculty] = useState('');
  const [schoolYear, setSchoolYear] = useState('');
  const [clubYear, setClubYear] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');
  const [gender, setGender] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [isFormer, setIsFormer] = useState(false);


  // =============================================
  //==============================================
  //==============================================

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(props.Editdatas)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Icon className="fa fa-plus-circle" color="primary" onClick={handleClickOpen}></Icon> */}
     
        <EditIcon onClick={handleClickOpen}/>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add
      </Button> */}
      
      <Dialog className={classes.Dialog} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <ValidatorForm >
          <AppBar className={classes.appBar}>
            <Toolbar className={classes.Toolbar}  >
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
                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      value={props.Editdatas.fullName}
                      // onChange={handChangeUserInfor('fullName')}

                      label="Tên thành viên"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={6}>
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
                      value={props.Editdatas.email}
                      // onChange={handChangeUserInfor('email')}
                      // value={userInfor.email}
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={6}>
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
                      value={props.Editdatas.role}
                    />
                  </Grid>
                  <Grid item xs={6}>
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
                      value={props.Editdatas.studentCode}
                    />
                  </Grid>

                  <Grid item xs={6}>
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
                      value={props.Editdatas.class}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Khoa"
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      margin="normal"
                      value={props.Editdatas.faculty}
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
                      value={props.Editdatas.clubYear}
                    />
                  </Grid>

                  <Grid item xs={6}>
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
                      value={props.Editdatas.schoolYear}
                    />
                  </Grid>
                  <Grid item xs={6}>
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
                      value={props.Editdatas.phone}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {/* <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Ngày Sinh"
                      margin="normal"
                    /> */}


                    <MaterialUIPickers value = {props.Editdatas.dob}></MaterialUIPickers> 
                    {/* Editdatas is a props from memberpage */}


                  </Grid>


                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Địa chỉ"
                      margin="normal"
                      value={props.Editdatas.address} //Editdatas is a props from memberpage
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {/* <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Giới tính"
                      margin="normal"
                    /> */}
                    <div className={classes.textField} style={{ marginTop: '7px' }}>
                      <NativeSelects value = {props.Editdatas.gender} ></NativeSelects>
                    </div>
                  </Grid>



                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Vị trí"
                      margin="normal"
                      value = {props.Editdatas.position}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Status"
                      margin="normal"
                      value={props.Editdatas.isActive}
                      
                    />
                  </Grid>


                  <Grid item xs={12}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Giới thiệu ngắn "
                      margin="normal"
                      value = {props.Editdatas.bio}
                    />
                  </Grid>

                  {/* <FormControlLabel
                    control={
                      <Switch checked={true}  />
                    }
                    label="Secondary"
                  /> */}


                 






                </Grid>
              </Grid>
            </Grid>
          </div>
        </ValidatorForm>

      </Dialog>
    </div>
  );
}
