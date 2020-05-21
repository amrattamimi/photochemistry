import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/common/utils/ScrollToTop';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { getUserGallery } from './app/features/Gallery/user/UserDetailed/userActions';


const store = configureStore();

// //render will only be ready until authentication is ready 
// store.firebaseAuthIsReady.then(()=>{
  
  ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode  >
    <BrowserRouter>
    <ScrollToTop>
      <ReduxToastr
      position="bottom-center"
      transitionIn="bounceIn"
      transitionOut="bounceOut"/>
    <App />
    </ScrollToTop>
    
    </BrowserRouter>
 </React.StrictMode>
 </Provider>
 ,
  document.getElementById('root')
);
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
