import React from 'react';
import ReactDOM from 'react-dom';
import FocusableInput from './#2';
import Message from './#3';
import App from './#4';
import App2 from './#5';
import GroceryApp from './#6';
import ImageGallery from './#7';
import App3 from './#8'

ReactDOM.render(
  <React.StrictMode>
    <FocusableInput />
    <Message/>
    <App/>
    <App2/>
    <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 }
    ]}/>
    <ImageGallery links={ ["https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png", 
                           "https://logospng.org/download/spotify/logo-spotify-256.png"] } />
    <App3
    items={[ 
      { text: 'Buy grocery', done: true },
      { text: 'Play guitar', done: false },
      { text: 'Romantic dinner', done: false }
    ]}/>

  </React.StrictMode>,
  document.getElementById('root')
);
