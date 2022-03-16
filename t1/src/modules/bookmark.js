export const bookmark = () => {
  let url = window.location.href; // http://localhost:3000/main
  let title = document.title; // 공실클럽
  console.log(window.chrome);
  if (document.all) {
    window.external.AddFavorite(url, title);
  }
  // Google Chrome
  else if (window.chrome) {
    alert('Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.');
  }
  // Firefox
  else if (window.sidebar) {
    window.sidebar.addPanel(title, url, '');
  }
  // Opera
  else if (window.opera && window.print) {
    var elem = document.createElement('a');
    elem.setAttribute('href', url);
    elem.setAttribute('title', title);
    elem.setAttribute('rel', 'sidebar');
    elem.click();
  }
};
