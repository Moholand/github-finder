class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4" style="width:100%">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-success">Followers: ${user.followers}</span>
            <span class="badge bg-info">Following: ${user.following}</span>
            <br /><br />
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3> 
      <div id="repos"></div>
    `;
  }

  // Show alert
  showAlert(msg, className) {
    // Clear remaining alert
    this.clearAlert();

    // Create Div
    const div = document.createElement('div');

    // Add class
    div.className = className;

    // Add Text
    div.appendChild(document.createTextNode(msg));

    // Get parent
    const container = document.querySelector('.container');

    // Get serach box
    const search = document.querySelector('.serach');

    // Insert Alert
    container.insertBefore(div, search);

    // Timeout after 3 second
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile in UI
  clearProfile() {
    this.profile.innerHTML = '';
  }
}