import { createGlobalStyle } from 'styled-components';
// import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100% ;
    line-height: 1.5;
  }
  

.dropzone {
    min-height: 100px;
    border: 2px dashed #ffb74d;
    background: $body-bg;
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus {
        outline: 0;
    }
}

.dz-thumb {
    display: inline-flex;
    border-radius: 2px;
    border: 1px solid #eaeaea;
    margin-bottom: 8px;
    margin-right: 8px;
    width: 100px;
    height: 100px;
    padding: 4px;
    box-sizing: border-box;
}

.thumb-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
}

.dz-thumb-inner {
    display: flex;
    min-width: 0;
    overflow: hidden;
}

.dz-img {
    display: block;
    width: 100%;
    height: 100%;
}

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
 

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  
  
}

`;

export default GlobalStyle;
