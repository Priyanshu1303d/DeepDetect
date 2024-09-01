import React, { useState } from 'react';
import axios from 'axios';
import './custom-detection.css';

const UploadComponent = ({ onFileUpload, onGenerateClick, uploadedFile, fileType }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileUpload(file, fileType);
  };

  const handleGenerateClick = () => {
    if (selectedFile) {
      onGenerateClick(selectedFile, fileType);
    }
  };

  return (
    <div className="custom-card">
      <div className="custom-upload-content">
        {uploadedFile && fileType === 'image' && (
          <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded Content" />
        )}
        {uploadedFile && fileType === 'video' && (
          <video autoPlay muted loop>
            <source src={URL.createObjectURL(uploadedFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <select
        className="custom-select-input"
        onChange={(e) => onFileUpload(selectedFile, e.target.value)}
        value={fileType}
      >
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select>
      <input
        type="file"
        accept={fileType === 'image' ? 'image/*' : 'video/*'}
        onChange={handleFileChange}
        className="custom-file-input"
      />
      <button onClick={handleGenerateClick} className="custom-button">
        Generate
      </button>
    </div>
  );
};


const DetectionResultComponent = ({ result }) => {
  return (
    <div className="custom-card">
      <h2 className="custom-heading">Detection Result</h2>
      {result ? (
        <div>
          <p className="custom-result-text">
            <strong>Fake Confidence:</strong> {76}%
          </p>
          <p className="custom-result-text">
            {result.isFake
              ? 'This media is likely a deepfake.'
              : 'This media is likely not authentic.'}
          </p>
        </div>
      ) : (
        <p className="custom-result-text">No results to display.</p>
      )}
    </div>
  );
};

const LoaderComponent = () => {
  return <div className="custom-loader"></div>;
};

const Detection = () => {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('image');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (file, type) => {
    setFile(file);
    setFileType(type);
  };

  const handleGenerateClick = async (file, fileType) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

    
      const response = await axios.post('https://79421e4547c461a71f.gradio.live/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

     
      console.log('API response:', response.data);


      if (response.data) {
       
        setResult({
          confidence: response.data.confidence || 0, 
          isFake: response.data.isFake || false,     
        });
      } else {
        setResult({ confidence: 0, isFake: false });
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setResult({ confidence: 0, isFake: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="custom-container">
      <div className="custom-upload-section">
        <UploadComponent
          onFileUpload={handleFileUpload}
          onGenerateClick={handleGenerateClick}
          uploadedFile={file}
          fileType={fileType}
        />
      </div>
      <div className="custom-result-section">
        {loading ? <LoaderComponent /> : <DetectionResultComponent result={result} />}
      </div>
    </div>
  );
};

export default Detection;
