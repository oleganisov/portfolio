const yandexmaps = ()=> {
  const ymaps=window.ymaps;
  ymaps.ready(function () {
    const map = new ymaps.Map("yandex_map", {
      center: [55.117973, 36.620963],
      zoom: 12,
      controls:['zoomControl'],
      behaviors:['drag']
    });
    const placemark = new ymaps.Placemark([55.117973, 36.620963],{
      hintContent:'<div class="map__hint">ул. Энгельса, д.2</div>',
      balloonContent:['<div>ул. Энгельса, д.2</div>',
                      '<div>Обнинск, Россия</div>']
                      .join('')
    },
    {
      iconLayout:'default#image',
      iconImageHref:'./assets/images/map_marker.svg'
    }
    );
    map.geoObjects.add(placemark);
  });
}

export default yandexmaps;