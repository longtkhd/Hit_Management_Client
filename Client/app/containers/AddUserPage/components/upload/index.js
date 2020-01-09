import { Upload, Button, Icon } from 'antd';
import React, { Component } from 'react';

const fileList = [
  {
    uid: '-1',
    name: 'img.jpg',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  
];

const props = {
  // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
};





class UploadImg extends React.Component {
   state = {
     loading: false,
   };

   handleChange = info => {
     if (info.file.status === 'uploading') {
       this.setState({ loading: true });
       return;

     }
     if (info.file.status === 'done') {
       console.log("success")

       message.success(`${info.file.name} file uploaded successfully`)
        //Get this url from response in real world.
       getBase64(info.file.originFileObj, imageUrl =>
         this.setState({
           imageUrl,
           loading: false,
         }),
       );
     }
   };

  render() {
    //  const uploadButton = (
    //    <div>
    //      <Icon type={this.state.loading ? 'loading' : 'plus'} />
    //      <div className="ant-upload-text">{this.props.name}</div>
    //    </div>
    //  );
    //  const { imageUrl } = this.state;
    //  return (
    //    <Upload
    //      name="avatar"
    //      listType="picture-card"
    //      className="avatar-uploader"
    //      showUploadList={true}
    //      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    //      beforeUpload={beforeUpload}
    //      onChange={this.handleChange}
    //    >
    //      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    //    </Upload>
    //  );
    return(
    <div>
      <Upload {...props}
          onChange={this.handleChange}
      >
        <Button>
          <Icon type="upload" /> {this.props.name}
        </Button>
      </Upload>
      <br />
      <br />
      
    </div>
    )
  }
}

export default UploadImg;