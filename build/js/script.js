function o(){var o=new ymaps.Map("map",{center:[55.75144067332613,37.618876684295635],zoom:11});new ymaps.GeoObjectCollection({},{iconLayout:"default#image",iconImageHref:"mark.svg",iconImageSize:[30,42],iconImageOffset:[-3,-42]});o.controls.remove("geolocationControl"),o.controls.remove("trafficControl"),o.controls.remove("typeSelector"),o.controls.remove("fullscreenControl"),o.controls.remove("zoomControl"),o.controls.remove("rulerControl"),o.controls.remove("searchControl");new ymaps.control.ZoomControl({options:{size:"small",position:{bottom:"50px",right:"30px"}}})}window.onload=function(){ymaps.ready(o)},"ontouchstart"in document.documentElement&&(myMap.behavior.disable("scrollZoom"),myMap.behavior.disable("drag")),document.querySelectorAll(".validate").forEach(function(e){e.addEventListener("input",function(o){e.validity.patternMismatch?e.classList.add("invalidValue"):e.classList.remove("invalidValue")})});