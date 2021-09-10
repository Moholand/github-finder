// Init Github
const github = new Github;

// Init UI
const ui = new UI;

// Search User
const searchUser = document.getElementById('serachUser');

// Serach input Event listener
searchUser.addEventListener('keyup', (e) => {
  // Get user text
  let userText = e.target.value;

  if(userText !== '') {
    // Send http request
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show Allert 
  
        } else {
          // Show Profile
          ui.showProfile(data.profile)
        }
      });
  } else {
    // Clear profile
  }
});