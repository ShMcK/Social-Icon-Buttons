// https://gist.github.com/jonathanmoore/2640302
var url = encodeURI(document.URL);
var text = encodeURI(document.title);

function callFacebookAPI() {
  window.open('//www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + text, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
}

function callTwitterAPI() {
  window.open('//twitter.com/share?text=' + text, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=255, width=550');
}