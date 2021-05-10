// Package imports
import axios from 'axios';
// Styling
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: false,
  action: 'https://sheet.best/api/sheets/1ed47246-bc99-462a-99cf-89b45e80e34c/tabs/photos',
  onChange(info: any) {
    const { status } = info.file;
    console.log('info', info, 'status', status)
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
      // axios.post('https://sheet.best/api/sheets/1ed47246-bc99-462a-99cf-89b45e80e34c/tabs/photos', info.file)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Gallery = () => {
  return (
    <div className="gallery" style={{ flexDirection: 'column' }}>
      <h1>This is the Gallery page!</h1>
      <div style={{ width: '35%' }}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
      </div>
    </div>
  );
};

export default Gallery;