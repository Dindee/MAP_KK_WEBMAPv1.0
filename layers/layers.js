var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_RUBBER_KK_1 = new ol.format.GeoJSON();
var features_RUBBER_KK_1 = format_RUBBER_KK_1.readFeatures(json_RUBBER_KK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUBBER_KK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUBBER_KK_1.addFeatures(features_RUBBER_KK_1);
var lyr_RUBBER_KK_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUBBER_KK_1, 
                style: style_RUBBER_KK_1,
                interactive: true,
                title: '<img src="styles/legend/RUBBER_KK_1.png" /> RUBBER_KK'
            });
var format_FOREST_KK_2 = new ol.format.GeoJSON();
var features_FOREST_KK_2 = format_FOREST_KK_2.readFeatures(json_FOREST_KK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOREST_KK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOREST_KK_2.addFeatures(features_FOREST_KK_2);
var lyr_FOREST_KK_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FOREST_KK_2, 
                style: style_FOREST_KK_2,
                interactive: false,
                title: '<img src="styles/legend/FOREST_KK_2.png" /> FOREST_KK'
            });
var format_HYDROP_KK_3 = new ol.format.GeoJSON();
var features_HYDROP_KK_3 = format_HYDROP_KK_3.readFeatures(json_HYDROP_KK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HYDROP_KK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HYDROP_KK_3.addFeatures(features_HYDROP_KK_3);
var lyr_HYDROP_KK_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HYDROP_KK_3, 
                style: style_HYDROP_KK_3,
                interactive: false,
                title: '<img src="styles/legend/HYDROP_KK_3.png" /> HYDROP_KK'
            });
var format_ROADEDGE_KK_4 = new ol.format.GeoJSON();
var features_ROADEDGE_KK_4 = format_ROADEDGE_KK_4.readFeatures(json_ROADEDGE_KK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADEDGE_KK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADEDGE_KK_4.addFeatures(features_ROADEDGE_KK_4);
var lyr_ROADEDGE_KK_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROADEDGE_KK_4, 
                style: style_ROADEDGE_KK_4,
                interactive: false,
                title: '<img src="styles/legend/ROADEDGE_KK_4.png" /> ROADEDGE_KK'
            });
var format_TREE_KK_5 = new ol.format.GeoJSON();
var features_TREE_KK_5 = format_TREE_KK_5.readFeatures(json_TREE_KK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TREE_KK_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TREE_KK_5.addFeatures(features_TREE_KK_5);
var lyr_TREE_KK_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TREE_KK_5, 
                style: style_TREE_KK_5,
                interactive: false,
                title: '<img src="styles/legend/TREE_KK_5.png" /> TREE_KK'
            });
var format_SOIL_DES_POINT_KK_6 = new ol.format.GeoJSON();
var features_SOIL_DES_POINT_KK_6 = format_SOIL_DES_POINT_KK_6.readFeatures(json_SOIL_DES_POINT_KK_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_DES_POINT_KK_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_DES_POINT_KK_6.addFeatures(features_SOIL_DES_POINT_KK_6);
var lyr_SOIL_DES_POINT_KK_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SOIL_DES_POINT_KK_6, 
                style: style_SOIL_DES_POINT_KK_6,
                interactive: true,
                title: '<img src="styles/legend/SOIL_DES_POINT_KK_6.png" /> SOIL_DES_POINT_KK'
            });
var format_HYDROL_KK_7 = new ol.format.GeoJSON();
var features_HYDROL_KK_7 = format_HYDROL_KK_7.readFeatures(json_HYDROL_KK_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HYDROL_KK_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HYDROL_KK_7.addFeatures(features_HYDROL_KK_7);
var lyr_HYDROL_KK_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HYDROL_KK_7, 
                style: style_HYDROL_KK_7,
                interactive: false,
                title: '<img src="styles/legend/HYDROL_KK_7.png" /> HYDROL_KK'
            });
var format_ROAD_KK_8 = new ol.format.GeoJSON();
var features_ROAD_KK_8 = format_ROAD_KK_8.readFeatures(json_ROAD_KK_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_KK_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_KK_8.addFeatures(features_ROAD_KK_8);
var lyr_ROAD_KK_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROAD_KK_8, 
                style: style_ROAD_KK_8,
                interactive: false,
                title: '<img src="styles/legend/ROAD_KK_8.png" /> ROAD_KK'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_RUBBER_KK_1.setVisible(true);lyr_FOREST_KK_2.setVisible(true);lyr_HYDROP_KK_3.setVisible(true);lyr_ROADEDGE_KK_4.setVisible(true);lyr_TREE_KK_5.setVisible(true);lyr_SOIL_DES_POINT_KK_6.setVisible(true);lyr_HYDROL_KK_7.setVisible(true);lyr_ROAD_KK_8.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_RUBBER_KK_1,lyr_FOREST_KK_2,lyr_HYDROP_KK_3,lyr_ROADEDGE_KK_4,lyr_TREE_KK_5,lyr_SOIL_DES_POINT_KK_6,lyr_HYDROL_KK_7,lyr_ROAD_KK_8];
lyr_RUBBER_KK_1.set('fieldAliases', {'FSC_ID': 'FSC_ID', 'X': 'X', 'Y': 'Y', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'เลขที่ดิน': 'เลขที่ดิน', 'ชื่อสมาชิก': 'ชื่อสมาชิก', 'ผลผลิต': 'ผลผลิต', 'เนื้อที่(ไร่)': 'เนื้อที่(ไร่)', 'พันธุ์ยาง': 'พันธุ์ยาง', 'ระยะปลูก': 'ระยะปลูก', 'ชื่อผู้กรีด': 'ชื่อผู้กรีด', 'รูปแบบการกรีด': 'รูปแบบการกรีด', 'ความลาดชัน': 'ความลาดชัน', });
lyr_FOREST_KK_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Sqm': 'Sqm', 'Area_Rai': 'Area_Rai', });
lyr_HYDROP_KK_3.set('fieldAliases', {'ID': 'ID', 'HY_USE': 'HY_USE', 'HY_PNAME': 'HY_PNAME', 'HY_PVOL': 'HY_PVOL', 'HY_PQUAL': 'HY_PQUAL', 'REMARK': 'REMARK', });
lyr_ROADEDGE_KK_4.set('fieldAliases', {'id': 'id', });
lyr_TREE_KK_5.set('fieldAliases', {'NUM': 'NUM', 'X': 'X', 'Y': 'Y', 'T_NAME(Tha)': 'T_NAME(Tha)', 'IMAGE': 'IMAGE', });
lyr_SOIL_DES_POINT_KK_6.set('fieldAliases', {'FID_prov_2': 'FID_prov_2', 'SOILGROUP': 'SOILGROUP', 'ชุดดิน': 'ชุดดิน', 'ชุดดินที่พบ': 'ชุดดินที่พบ', 'คุณสมบัติของดิน': 'คุณสมบัติของดิน', 'ความอุดมสมบูรณ์': 'ความอุดมสมบูรณ์', 'ปัญหาของดิน': 'ปัญหาของดิน', 'ความเหมาะสมในการถมดิน': 'ความเหมาะสมในการถมดิน', 'ความเหมาะสมในการขุดบ่อ': 'ความเหมาะสมในการขุดบ่อ', 'LDD_Soilgrop_URL': 'LDD_Soilgrop_URL', 'การปลูกไม้ผลไม้ยืนต้น': 'การปลูกไม้ผลไม้ยืนต้น', });
lyr_HYDROL_KK_7.set('fieldAliases', {'ID': 'ID', 'HY_USE': 'HY_USE', 'HY_LNAME': 'HY_LNAME', });
lyr_ROAD_KK_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_RUBBER_KK_1.set('fieldImages', {'FSC_ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'เลขที่ดิน': 'TextEdit', 'ชื่อสมาชิก': 'TextEdit', 'ผลผลิต': 'TextEdit', 'เนื้อที่(ไร่)': 'TextEdit', 'พันธุ์ยาง': 'TextEdit', 'ระยะปลูก': 'TextEdit', 'ชื่อผู้กรีด': 'TextEdit', 'รูปแบบการกรีด': 'TextEdit', 'ความลาดชัน': 'TextEdit', });
lyr_FOREST_KK_2.set('fieldImages', {'id': 'Range', 'Name': 'TextEdit', 'Sqm': 'TextEdit', 'Area_Rai': 'TextEdit', });
lyr_HYDROP_KK_3.set('fieldImages', {'ID': 'Range', 'HY_USE': 'Range', 'HY_PNAME': 'TextEdit', 'HY_PVOL': 'Range', 'HY_PQUAL': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_ROADEDGE_KK_4.set('fieldImages', {'id': 'Range', });
lyr_TREE_KK_5.set('fieldImages', {'NUM': 'Range', 'X': 'Range', 'Y': 'Range', 'T_NAME(Tha)': 'TextEdit', 'IMAGE': 'ExternalResource', });
lyr_SOIL_DES_POINT_KK_6.set('fieldImages', {'FID_prov_2': 'Range', 'SOILGROUP': 'TextEdit', 'ชุดดิน': 'TextEdit', 'ชุดดินที่พบ': 'TextEdit', 'คุณสมบัติของดิน': 'TextEdit', 'ความอุดมสมบูรณ์': 'TextEdit', 'ปัญหาของดิน': 'TextEdit', 'ความเหมาะสมในการถมดิน': 'TextEdit', 'ความเหมาะสมในการขุดบ่อ': 'TextEdit', 'LDD_Soilgrop_URL': 'TextEdit', 'การปลูกไม้ผลไม้ยืนต้น': 'TextEdit', });
lyr_HYDROL_KK_7.set('fieldImages', {'ID': 'Range', 'HY_USE': 'Range', 'HY_LNAME': 'TextEdit', });
lyr_ROAD_KK_8.set('fieldImages', {'id': 'Range', 'Name': 'TextEdit', });
lyr_RUBBER_KK_1.set('fieldLabels', {'FSC_ID': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'เลขที่ดิน': 'inline label', 'ชื่อสมาชิก': 'inline label', 'ผลผลิต': 'inline label', 'เนื้อที่(ไร่)': 'inline label', 'พันธุ์ยาง': 'inline label', 'ระยะปลูก': 'inline label', 'ชื่อผู้กรีด': 'inline label', 'รูปแบบการกรีด': 'inline label', 'ความลาดชัน': 'inline label', });
lyr_FOREST_KK_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Sqm': 'no label', 'Area_Rai': 'no label', });
lyr_HYDROP_KK_3.set('fieldLabels', {'ID': 'no label', 'HY_USE': 'no label', 'HY_PNAME': 'no label', 'HY_PVOL': 'no label', 'HY_PQUAL': 'no label', 'REMARK': 'no label', });
lyr_ROADEDGE_KK_4.set('fieldLabels', {'id': 'no label', });
lyr_TREE_KK_5.set('fieldLabels', {'NUM': 'no label', 'X': 'inline label', 'Y': 'inline label', 'T_NAME(Tha)': 'inline label', 'IMAGE': 'inline label', });
lyr_SOIL_DES_POINT_KK_6.set('fieldLabels', {'FID_prov_2': 'no label', 'SOILGROUP': 'inline label', 'ชุดดิน': 'inline label', 'ชุดดินที่พบ': 'inline label', 'คุณสมบัติของดิน': 'inline label', 'ความอุดมสมบูรณ์': 'inline label', 'ปัญหาของดิน': 'inline label', 'ความเหมาะสมในการถมดิน': 'inline label', 'ความเหมาะสมในการขุดบ่อ': 'inline label', 'LDD_Soilgrop_URL': 'inline label', 'การปลูกไม้ผลไม้ยืนต้น': 'inline label', });
lyr_HYDROL_KK_7.set('fieldLabels', {'ID': 'no label', 'HY_USE': 'no label', 'HY_LNAME': 'no label', });
lyr_ROAD_KK_8.set('fieldLabels', {'id': 'no label', 'Name': 'header label', });
lyr_ROAD_KK_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});