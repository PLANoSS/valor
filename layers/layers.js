var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Oferta2017_0 = new ol.format.GeoJSON();
var features_Oferta2017_0 = format_Oferta2017_0.readFeatures(json_Oferta2017_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oferta2017_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Oferta2017_0.addFeatures(features_Oferta2017_0);var lyr_Oferta2017_0 = new ol.layer.Vector({
                source:jsonSource_Oferta2017_0, 
                style: style_Oferta2017_0,
    title: 'Precio de oferta del suelo 2017 ($/m2)<br />\
    <img src="styles/legend/Oferta2017_0_0.png" />  7 - 100 <br />\
    <img src="styles/legend/Oferta2017_0_1.png" />  100 - 200 <br />\
    <img src="styles/legend/Oferta2017_0_2.png" />  200 - 300 <br />\
    <img src="styles/legend/Oferta2017_0_3.png" />  300 - 400 <br />\
    <img src="styles/legend/Oferta2017_0_4.png" />  400 - 500 <br />\
    <img src="styles/legend/Oferta2017_0_5.png" />  500 - 600 <br />\
    <img src="styles/legend/Oferta2017_0_6.png" />  600 - 700 <br />\
    <img src="styles/legend/Oferta2017_0_7.png" />  700 - 800 <br />'
        });var format_oferta2016_1 = new ol.format.GeoJSON();
var features_oferta2016_1 = format_oferta2016_1.readFeatures(json_oferta2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oferta2016_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_oferta2016_1.addFeatures(features_oferta2016_1);var lyr_oferta2016_1 = new ol.layer.Vector({
                source:jsonSource_oferta2016_1, 
                style: style_oferta2016_1,
    title: 'Precio de oferta del suelo 2016 ($/m2)<br />\
    <img src="styles/legend/oferta2016_1_0.png" />  7 - 100 <br />\
    <img src="styles/legend/oferta2016_1_1.png" />  100 - 200 <br />\
    <img src="styles/legend/oferta2016_1_2.png" />  200 - 300 <br />\
    <img src="styles/legend/oferta2016_1_3.png" />  300 - 400 <br />\
    <img src="styles/legend/oferta2016_1_4.png" />  400 - 500 <br />\
    <img src="styles/legend/oferta2016_1_5.png" />  500 - 600 <br />\
    <img src="styles/legend/oferta2016_1_6.png" />  600 - 700 <br />\
    <img src="styles/legend/oferta2016_1_7.png" />  700 - 800 <br />'
        });

lyr_Oferta2017_0.setVisible(true);lyr_oferta2016_1.setVisible(true);
var layersList = [baseLayer,lyr_Oferta2017_0,lyr_oferta2016_1];
lyr_Oferta2017_0.set('fieldAliases', {'Fuente': 'Fuente', 'Fecha': 'Fecha de recolección', 'V_cat': 'Valor catastral ($/m2)', 'servicios': 'Servicios básicos', 'tamano': 'Superficie (m2)', 'ciudad_mas': 'Ciudad', 'valorsuelo': 'Precio de oferta ($/m2)', });
lyr_oferta2016_1.set('fieldAliases', {'V_act': 'Precio de oferta ($/m2)', 'Agua': 'Tiene agua?', 'Luz': 'Tiene Luz?', 'Tipo_via': 'Tipo de vía', 'Ancho_via': 'Ancho de vía (m)', 'Superficie': 'Superficie (m2)', 'Zona': 'Zona', 'Fuente': 'Fuente de datos', 'Fecha': 'Fecha de recopilación de datos', 'V_cat': 'Valor catastral ($/m2)', });
lyr_Oferta2017_0.set('fieldImages', {'Fuente': 'TextEdit', 'Fecha': 'TextEdit', 'V_cat': 'TextEdit', 'servicios': 'TextEdit', 'tamano': 'TextEdit', 'ciudad_mas': 'TextEdit', 'valorsuelo': 'TextEdit', });
lyr_oferta2016_1.set('fieldImages', {'V_act': 'TextEdit', 'Agua': 'TextEdit', 'Luz': 'TextEdit', 'Tipo_via': 'TextEdit', 'Ancho_via': 'TextEdit', 'Superficie': 'TextEdit', 'Zona': 'TextEdit', 'Fuente': 'TextEdit', 'Fecha': 'TextEdit', 'V_cat': 'TextEdit', });
lyr_Oferta2017_0.set('fieldLabels', {'Fuente': 'header label', 'Fecha': 'header label', 'V_cat': 'header label', 'servicios': 'header label', 'tamano': 'header label', 'ciudad_mas': 'header label', 'valorsuelo': 'header label', });
lyr_oferta2016_1.set('fieldLabels', {'V_act': 'header label', 'Agua': 'header label', 'Luz': 'header label', 'Tipo_via': 'header label', 'Ancho_via': 'header label', 'Superficie': 'header label', 'Zona': 'header label', 'Fuente': 'header label', 'Fecha': 'header label', 'V_cat': 'header label', });
lyr_oferta2016_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_oferta2016_1.on("postcompose", update);

    var listenerKey = lyr_oferta2016_1.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });