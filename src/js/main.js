window.onload = function() {
    ymaps.ready(init);
}

function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75144067332613,37.618876684295635],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 11
    });
    var myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'mark.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });
    myMap.controls.remove('geolocationControl');

    myMap.controls.remove('trafficControl');

    myMap.controls.remove('typeSelector');

    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('zoomControl');

    myMap.controls.remove('rulerControl');
    myMap.controls.remove('searchControl');

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small",
            position: {
                bottom: '50px',
                right: '30px'
            }

        }

    });



    myMap.controls.add(zoomControl);
    var myPlacemark1 = new ymaps.Placemark([55.801131568944264,37.508166499999994], {

    });
    var myPlacemark2 = new ymaps.Placemark([55.7575560689813,37.65159149999997], {

    });
    myCollection.add(myPlacemark1).add( myPlacemark2);
    myMap.geoObjects.add(myCollection);
}


if ("ontouchstart" in document.documentElement)
{
    myMap.behavior.disable('scrollZoom');
    myMap.behavior.disable('drag');
}

function validatePostCode(evt){
    var el=evt.target;
    if(el.validity){
// HTML5 aware browsers
        if(el.validity.patternMismatch){
            el.setCustomValidity('Not a valid UK Postal Code.eg:G1 1AA ');
        }else{
            el.setCustomValidity("");
        }
    }else{
// fallback for legacy browsers.


    }
}
var inputInvalid = document.querySelectorAll('.validate');

inputInvalid.forEach(function (item) {

    item.addEventListener("input", function (evt) {
        if (item.validity.patternMismatch){
            item.classList.add('invalidValue');

        }
        else {
            item.classList.remove('invalidValue');
        }
    })


})


