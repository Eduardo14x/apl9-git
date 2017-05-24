// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",ondeviceready,false);
	
});

function ondeviceready(){
	
	$('#posicion').on('click',function (){
	getposition ();
	});
	
	$('#watch').on('click',function (){
		watchposition ();
	});
	
}

function getposition(){
	
	var options={
		enablehighaccuracy:true,
		maximumage:3600000
	}
	
	var watchid=navigator.geolocation.getCurrentPosition(onsuccess,onerror,options);
	
	function onsuccess(position){
		
		alert('latitude:'      +position.coords.latitude   +'\n'+
		'Longitude:'    +position.coords.longitude   +'\n'+
		'Altitude:'    +position.coords.altitude   +'\n'+
		'Accuracy:'   +position.coords.accuracy      +'\n'+
		'Altitude Accuracy:'   +position.coords.altitudeaccuracy +'\n'+
		'Heading:'    +position.coords.heading    +'\n'+
		'Speed:'      +position.coords.speed     +'\n'+
		'Timestamp:'     +position.timestamp   +'\n');
	};
	
	function onerror(error){
		alert('code:'   +error.code  +'\n'+'message:'+error.message+'\n');
	}
}

function watchposition(){
	
	var options={
		maximumage:3600000,
		timeout:3000,
		enablehighaccuracy:true,
	}
	
	var watchid=navigator.geolocation.watchPosition(onsuccess,onerror,options);
	
	function onsuccess(position){
		
		$('#latitud').html(position.coords.latitude);
		$('#longitud').html(position.coords.longitude);
		$('#altitud').html(position.coords.altitude);
		$('#accuracy').html(position.coords.accuracy);
		$('#aaccuracy').html(position.coords.altitudeaccuracy);
		$('#headingg').html(position.coords.heading);
		$('#speed').html(position.coords.speed);
		$('#timestamp').html(position.timestamp);
	};
	
 function onerror(error){
	 alert('code:'  +error.code   +'\n'+'message:'+error.message+'\n');
 }
}
		