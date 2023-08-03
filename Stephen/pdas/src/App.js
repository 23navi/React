import ProfileCard from "./ProfileCard";

import alexaImage from "./images/alexa.png";
import siriImage from "./images/siri.png";
import cortanaImage from "./images/cortana.png";

import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Personal Assistent list</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa_99"
                image={alexaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri_69" image={siriImage} />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana_8"
                image={cortanaImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
