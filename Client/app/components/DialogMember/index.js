/**
 *
 * DialogMember
 *
 */
import axios from 'axios';
import { USER } from '../../urlConfig';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Grid,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Close } from '@material-ui/icons';
import { Portlet } from 'components';
import reducer from '../../containers/MemberPage/reducer';
import saga from '../../containers/MemberPage/saga';
import {
  createUserAction,
  updateUserAction,
} from '../../containers/MemberPage/actions';
import makeSelectMemberPage from '../../containers/MemberPage/selectors';
import styles from './styles';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
function Transition(props) {
  return <Slide direction="left" {...props} />;
}
const defineLevel = {
  fullName: undefined,
  email: undefined,
  // password: undefined,
  role: undefined,
  studentCode: undefined,
  class: undefined,
  faculty: undefined,
  schoolYear: undefined,
  clubYear: undefined,
  phone: undefined,
  address: undefined,
  dob: undefined,
  position: undefined,
  gender: undefined,
  isActive: false,
  // expiredAt: undefined,
  bio: undefined,
  avatar: undefined,
  // avatarURL: undefined,
  qrCode: undefined,
  isFormer: false,
  // birth: undefined,
};

function DialogMember(props) {
  const [open, setOpen] = useState(true);
  const [userInfor, setUserInfor] = useState({
    fullName: undefined,
    email: undefined,
    // password: undefined,
    role: undefined,
    studentCode: undefined,
    class: undefined,
    faculty: undefined,
    schoolYear: undefined,
    clubYear: undefined,
    phone: undefined,
    address: undefined,
    dob: undefined,
    position: undefined,
    gender: undefined,
    isActive: false,
    // expiredAt: undefined,
    bio: undefined,
    avatar: undefined,
    // avatarURL: undefined,
    qrCode: undefined,
    isFormer: false,
  });
  // 
  useInjectReducer({ key: 'memberPage', reducer });
  useInjectSaga({ key: 'memberPage', saga });
  // useEffect
  useEffect(prop => {
    // setOpen(props.open);
    // setUserInfor(defineLevel);
    if (props.open !== { open }) {
      if (props.isEdit && props.editData) {
        setUserInfor(props.editData);
        setOpen(props.open);
      } else {
        setOpen(props.open);
        setUserInfor(defineLevel);
      }
    }
  });
  const handChangeUserInfor = name => event => {
    userInfor[name] = event.target.value;
    setUserInfor({ userInfor });
  };
  //Handle submit
  const handleSubmit = () => {
    const newUser = Object.assign({}, { userInfor });
    
    
  //============================>
  // console.log(newUser.userInfor);
  // let file1 = newUser.userInfor.avatar;
  //   let file2 = newUser.userInfor.qrCode;
  // console.log( file);
  //   let formData = new FormData();
  //   formData.append('image',file1);
  //   formData.append('image2', file2);

  //   axios.post('http://localhost:5000/user/add', formData).then((response) => {
  //     console.log(a); // do something with the response
  //   });

    console.log(newUser.userInfor);
    console.log(props.isEdit);

    if (!props.isEdit) {

      newUser.role = props.type;
      props.onCreateUser(newUser.userInfor);
    } else {
      console.log('update');
      props.onUpdateUser(newUser.userInfor);
      props.handleClose();
    }
    props.handleClose();
  };

  
  //SELECT IMGS=====================>
  const onSelectImg = e => {
    userInfor['avatar'] = e.target.files[0];
    // const linkAvatar = URL.createObjectURL(e.target.files[0]);
      // userInfor['avatarURL'] = linkAvatar,
      console.log(userInfor['avatar']);
  }
  const onSelectQr = e => {
    userInfor['qrCode'] = e.target.files[0];
    // const linkQr = URL.createObjectURL(e.target.files[0]);
    // userInfor['qrURL'] = linkQr,
    console.log(userInfor['qrCode']);
  }
  //CHANGE SWITCH ===================>
  const handleChangeSwitch = name => event => {
      userInfor[name] = event.target.checked ;
  
  };
  const handleDateChange = date => {
    userInfor['dob'] = date;
  };




  const { classes, className, ...rest } = props;
  return (
    <div style={{ background: '#F8FAFC' }}>
      <Dialog
        style={{ marginLeft: 271, backgroundColor: '#f8fafc' }}
        fullScreen
        open={open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <ValidatorForm onSubmit={handleSubmit}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={props.handleClose}
                aria-label="Close"
              >
                <Close />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Thoát
              </Typography>
              <Button type="submit" color="inherit">
                Lưu
              </Button>
            </Toolbar>
          </AppBar>
          <div className="p-4" style={{ height: '100%', paddingTop: '50px' }}>
            <Portlet {...rest}>
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
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('fullName')}
                        value={userInfor.fullName}
                        label="Tên thành viên"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Email"
                        validators={['required', 'isEmail']}
                        errorMessages={[
                          'Vui lòng nhập dữ liệu trường này',
                          'Email không hợp lệ',
                        ]}
                        onChange={handChangeUserInfor('email')}
                        value={userInfor.email}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Chức vụ"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('role')}
                        value={userInfor.role}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Mã Sinh Viên"
                        validators={['required','isNumber']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này','Vui lòng nhập dữ liệu là số']}
                        onChange={handChangeUserInfor('studentCode')}
                        value={userInfor.studentCode}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Lớp"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('class')}
                        value={userInfor.class}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Khoa"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('faculty')}
                        value={userInfor.faculty}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Niên khoá CLB"
                        validators={['required','isNumber']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này','Vui lòng nhập kí tự số']}
                        onChange={handChangeUserInfor('clubYear')}
                        value={userInfor.clubYear}
                        margin="normal"
                        // type="Number"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required','isNumber']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này',
                                        'Vui lòng nhập kí tự số',
                      ]}
                        onChange={handChangeUserInfor('schoolYear')}
                        value={userInfor.schoolYear}
                        label="Khóa"
                        margin="normal"
                        // type="Number"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
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
                        onChange={handChangeUserInfor('phone')}
                        value={userInfor.phone}
                        label="Số điện thoại"
                        margin="normal"
                        // type="Number"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('address')}
                        value={userInfor.address}
                        label="Địa chỉ"
                        margin="normal"
                      />
                    </Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                      <Grid item xs={6}  >
                      {/* <TextValidator
                        className={classes.textField}
                        id="datetime-local"
                        defaultValue="2017-05-24"
                        fullWidth
                        
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('dob')}
                        value={userInfor.dob}
                        label="Ngày sinh"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      /> */}
                      {/* <form className={classes.container} noValidate>
                        <TextField
                          id="date"
                          label="Birthday"
                          validators={['required']}
                          errorMessages={['Vui lòng nhập dữ liệu trường này']}
                          onChange={handChangeUserInfor('dob')}
                          value={userInfor.dob}
                          type="date"
                          
                          defaultValue="2019-01-01"
                          fullWidth
                          margin="normal"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form> */}
                      
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          label="Date picker dialog"
                          format="MM/dd/yyyy"
                          value={userInfor.dob}
                          // type="date"                                                 
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                    </Grid>
                    </MuiPickersUtilsProvider>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('position')}
                        value={userInfor.position}
                        label="Vị trí"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('gender')}
                        value={userInfor.gender}
                        label="Giới tính"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('bio')}
                        value={userInfor.bio}
                        label="Giới thiệu ngắn "
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Switch defaultChecked={props.editData.isFormer}
                          onChange={handleChangeSwitch('isFormer')} />}
                        label="Trạng Thái"
                      />
                    </Grid>
                    
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Switch value={props.editData.isFormer} defaultChecked={props.editData.isActive}
                          onChange={handleChangeSwitch('isActive')}  />}
                        label="Cựu"
                      />
                    </Grid>
                    
                    
                    {/* upload file */}
                    <Grid item xs={6}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        name="avatar"
                        onChange={onSelectImg}
                        id="contained-button-file"
                        multiple
                        type="file"
                      />
                      <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span" variant="contained"
                          component="span"
                          className={classes.button}
                          size="large"
                          color="primary">
                          
                          Upload Avatar
                        </Button>
                      </label>
                    </Grid>
                    {/* qrcode */}
                    <Grid item xs={6}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        name="qrcode"
                        onChange={onSelectQr}
                        id="contained-button-file"
                        multiple
                        type="file"

                      />
                      <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                          Upload Qrcode
                        </Button>
                      </label>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Portlet>
          </div>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

DialogMember.propTypes = {
  classes: PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  memberPage: makeSelectMemberPage(),
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // onGetUsers: query => dispatch(getUsers(query)),
    onCreateUser: newUser => dispatch(createUserAction(newUser)),
    onUpdateUser: newUser => dispatch(updateUserAction(newUser)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect,
)(DialogMember);
