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
import RoleSelect from '../../components/Crud/select.js/roleselect';
import RadioButtonsGroup from '../../components/Ratio';
import GenderRatio from '../../components/Ratio/gender';

// import Switch from '@material-ui/core/Switch';
import {
  Grid,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import UploadImg from '../../components/Crud/upload';

//=================================================/////////////

import { updateUserAction } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import makeSelectEditUser from './selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { createStructuredSelector } from 'reselect';
//=========================================================//////////////

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

export  function EditUser(props) {

  useInjectReducer({ key: 'editUserPage', reducer });
  useInjectSaga({ key: 'editUserPage', saga });
  

  const [dob, setDob] = React.useState('');

  const [fullName, setFullName] = useState(props.Editdatas.fullName);
  const [email, setEmail] = useState(props.Editdatas.email);
  const [role, setRole] = useState(props.Editdatas.role);
  const [studentCode, setStudentCode] = useState(props.Editdatas.studentCode);
  const [schoolClass, setSchoolClass] = useState(props.Editdatas.class);
  const [faculty, setFaculty] = useState(props.Editdatas.faculty);
  const [schoolYear, setSchoolYear] = useState(props.Editdatas.schoolYear);
  const [clubYear, setClubYear] = useState(props.Editdatas.clubYear);
  const [phone, setPhone] = useState(props.Editdatas.phone);
  const [address, setAddress] = useState(props.Editdatas.address);
  const [position, setPosition] = useState(props.Editdatas.position);
  const [gender, setGender] = useState(props.Editdatas.gender);
  const [isActive, setIsActive] = useState(props.Editdatas.isActive);
  const [bio, setBio] = useState(props.Editdatas.bio);
  const [avatar, setAvatar] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [isFormer, setIsFormer] = useState(props.Editdatas.isFormer);


  function handleSubmit() {
    props.onCreateUser({
      ...{ fullName },
      ...{ email },
      ...{ role },
      ...{ studentCode },
      class: schoolClass,
      ...{ clubYear },
      ...{ faculty },
      ...{ schoolYear },
      ...{ phone },
      ...{ address },
      ...{ dob },
      ...{ position },
      ...{ gender },
      ...{ isActive },
      ...{ bio },
      ...{ avatar },
      ...{ qrCode },
      ...{ isFormer },
    });
   

    console.log({
      ...{ fullName },
      ...{ email },
      ...{ role },
      ...{ studentCode },
      class: schoolClass,
      ...{ faculty },
      ...{ schoolYear },
      ...{ phone },
      ...{ address },
      ...{ dob },
      ...{ position },
      ...{ gender },
      ...{ isActive },
      ...{ bio },
      ...{ avatar },
      ...{ qrCode },
      ...{ isFormer },
    });


  }


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
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}

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
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      // onChange={handChangeUserInfor('email')}
                      // value={userInfor.email}
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    {/* <TextValidator
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
                      
                    /> */}
                    <div className={classes.textField} style={{ marginTop: '7px' }}>
                      <RoleSelect ></RoleSelect>
                    </div>
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
                      value={studentCode}
                      onChange={e => setStudentCode(e.target.value)}
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
                      value={schoolClass}
                      onChange={e => setSchoolClass(e.target.value)}
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
                      value={faculty}
                      onChange={e => setFaculty(e.target.value)}
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
                      value={clubYear}
                      onChange={e => setClubYear(e.target.value)}
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
                      value={schoolYear}
                      onChange={e => setSchoolYear(e.target.value)}
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
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
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
                      value={address} //Editdatas is a props from memberpage
                      onChange={e => setAddress(e.target.value)}
                    />
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
                      value = {position}
                      onChange={e => setPosition(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    {/* <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Giới tính"
                      margin="normal"
                    /> */}
                    <div className={classes.textField} >
                      <GenderRatio isRadio = {props.Editdatas.gender} />
                      {/* <NativeSelects onSelect = {value => setGender(value)}></NativeSelects> */}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    {/* <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      label="IsActive"
                      margin="normal"
                      onChange={e => setIsActive(e.target.value)}
                      value = {isActive}
                    /> */}
                    <RadioButtonsGroup isActive = {props.Editdatas.isActive} />
                  </Grid>
                  <Grid item xs = {4}>
                    <FormControlLabel
                      control={
                        <Switch
                          
                          onChange={e => setIsFormer(e.target.checked)}
                          value={props.Editdatas.isFormer}

                        />
                      }
                      label="Trạng thái (Cựu)"
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
                      value = {bio}
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

EditUser.propTypes = {
  classes: PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  editUser: makeSelectEditUser(),
});


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // onGetUsers: query => dispatch(getUsers(query)),
    onUpdateUser: data => dispatch(updateUserAction(data)),

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  // withStyles(styles),
  withConnect,
)(EditUser);
