(function() {

  /* map actions*/
  var mapButton = document.getElementById('map-expand');
  var mapBox = document.getElementById('map-box');
  var contentSearchMap = document.getElementById('content__search-map');

  mapButton.onclick = function() {
    mapButton.classList.toggle('fullscreen-btn_active');
    contentSearchMap.classList.toggle('content__search-map_expanded')
  }

  /* change view buttons */
  var viewButton = document.getElementsByClassName('view-selector__item');

  for (var i = 0; i < viewButton.length; i++) {
    viewButton[i].onclick = function () {
      viewButton[0].classList.toggle('view-selector__item_active');
      viewButton[1].classList.toggle('view-selector__item_active');
    }
  }
})();