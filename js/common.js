(function() {

  /* map actions*/
  var mapButton = document.getElementById('map-expand');
  var mapBox = document.getElementById('map-box');
  var contentSearchMap = document.getElementById('content__search-map');
  var schoolsBlock = document.getElementById('schools');

  mapButton.onclick = function() {
    mapButton.classList.toggle('fullscreen-btn_active');
    contentSearchMap.classList.toggle('content__search-map_expanded');
    schoolsBlock.classList.remove('schools_grid');
  }

  /* change view buttons */
  var viewButton = document.getElementsByClassName('view-selector__item');

  for (var i = 0; i < viewButton.length; i++) {
    viewButton[0].onclick = function () {
      viewButton[0].classList.add('view-selector__item_active');
      viewButton[1].classList.remove('view-selector__item_active');
      schoolsBlock.classList.remove('schools_grid');
    }
    viewButton[1].onclick = function () {
      viewButton[1].classList.toggle('view-selector__item_active');
      viewButton[1].classList.add('view-selector__item_active');
      viewButton[0].classList.remove('view-selector__item_active');
      if (!contentSearchMap.classList.contains('content__search-map_expanded')) {
        schoolsBlock.classList.add('schools_grid');
      }
    }
  }
})();