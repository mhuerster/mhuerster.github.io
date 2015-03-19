var tweetButton = document.getElementById('tweet');
tweetButton.onclick = function(event) {
  console.log(this);
  var width = 575,
    height = 400,
    left = (window.outerWidth - width) / 2,
    top = (window.outerHeight - height) / 2,
    url = this.href,
    opts = 'status=1' +
    ',width=' + width +
    ',height=' + height +
    ',top=' + top +
    ',left=' + left;
  window.open(url, 'twitter', opts);
  return false;
};