function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
          console.log('Successfully logged in with Facebook');
           FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }

  }
// testing
//Add this callback at bottom of facebook.js and add the required functionality in it 
function changeUser(response) {
  var newMessage = {
    "name": response.name,
    "proficiency": "beginner",
    "progress": "0/50",
    "imageURL": response.picture.data.url			
  }

  // local storage needs key, value pair. Takes in only strings
  localStorage.setItem("username", response.name);
  localStorage.setItem("userpic", response.picture.data.url);
  
  window.location.href = "/proficiency";
  $.post("/user", newMessage, callBackFn);
}

function callBackFn(result){
  console.log("callback");
}

function authfreeLogin(){
  var newMessage = {
    "name": "Chris",
    "proficiency": "beginner",
    "progress": "0/50",
    "imageURL": "/images/Chris.png"		
  }
  localStorage.setItem("username", "Chris");
  localStorage.setItem("userpic", "/images/Chris.png");
  $.post("/user", newMessage, callBackFn);
}