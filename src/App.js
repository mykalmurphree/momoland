import React from 'react';
import avatar from './images/img_avatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="grid">
        <header>this is the header</header>
        <div className="area_1">
           <div className="gallery_large">
              <article>
              <img class="avatar" src={avatar} aria-label={'avatar'} aria-required="true" />
                <div class="text">
                  <h3>Seamlessly visualize quality</h3>
                  <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                  <button>Here's why</button>
                </div>
              </article>
              <article>
              <img class="avatar" src={avatar} aria-label={'avatar'} aria-required="true" />
                <div class="text">
                  <h3>Seamlessly visualize quality</h3>
                  <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                  <button>Here's why</button>
                </div>
              </article>
              <article>
              <img class="avatar" src={avatar} aria-label={'avatar'} aria-required="true" />
                <div class="text">
                  <h3>Seamlessly visualize quality</h3>
                  <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                  <button>Here's why</button>
                </div>
              </article>
              <article>
              <img class="avatar" src={avatar} aria-label={'avatar'} aria-required="true" />
                <div class="text">
                  <h3>Seamlessly visualize quality</h3>
                  <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                  <button>Here's why</button>
                </div>
              </article>
              <article>
              <img class="avatar" src={avatar} aria-label={'avatar'} aria-required="true" />
                <div class="text">
                  <h3>Seamlessly visualize quality</h3>
                  <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                  <button>Here's why</button>
                </div>
              </article>
              <article>
            <img class="avatar" src={avatar} aria-label={'avatar'} aria-required="true" />
              <div class="text">
                <h3>Seamlessly visualize quality</h3>
                <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                <button>Here's why</button>
              </div>
            </article>
            </div>
          </div>
        <div className="area_2">
          <div className="gallery_small">
            <div className="image-circular">
              <img className="image-circular-centered" src={avatar} aria-label={'avatar'} aria-required="true" />
            </div>
            <div className="image-circular">
              <img className="image-circular-centered" src={avatar} aria-label={'avatar'} aria-required="true" />
            </div>
            <div className="image-circular">
              <img className="image-circular-centered" src={avatar} aria-label={'avatar'} aria-required="true" />
            </div>
            <div className="image-circular">
              <img className="image-circular-centered" src={avatar} aria-label={'avatar'} aria-required="true" />
            </div>
            <div className="image-circular">
              <img className="image-circular-centered" src={avatar} aria-label={'avatar'} aria-required="true" />
            </div>
            <div className="image-circular">
              <img className="image-circular-centered" src={avatar} aria-label={'avatar'} aria-required="true" />
            </div>
          </div>

        </div>
        <div calssName="area3">
          <div className="about">
             <div className="name">
                <p>Seamlessly visualize quality</p>
             </div>
             <div className="info">
                <p>Seamlessly visualize quality</p>
             </div>
             
              
            </div>
        </div>
        <footer>this is the footer</footer>
      </main>
  </div>
  );
}

export default App;