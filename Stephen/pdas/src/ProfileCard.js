function ProfileCard(props) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={props.image} alt="profile" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src={props.image} alt="profile" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{props.title}</p>
            <p class="subtitle is-6">{props.handle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
