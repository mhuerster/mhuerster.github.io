window.fbAsyncInit = function() {
  FB.init({
    appId: '394712660699945',
    xfbml: true,
    version: 'v2.2'
  });
};

function cancelEvent(event) {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var facebookButton = document.getElementById('fb');
facebookButton.onclick = function(event) {
  cancelEvent(event);
  FB.ui({
    method: 'share',
    href: window.location.href,
  }, function(response) {});
};