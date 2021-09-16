function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showLocation);
        }
    }

    function showLocation(position) {

        var russialat = 59.0641554;
        var russialon = 27.7927063;

        var currentpositionlat=position.coords.latitude;
        var currentpositionlon=position.coords.longitude;

        var distance=getDistanceFromLatLonInMiles(russialat, russialon, currentpositionlat, currentpositionlon);
        document.getElementById("geodisplay").innerHTML="LATITUDE: " + currentpositionlat + "<br>LONGITUDE: " + currentpositionlon;
            alert("YOUR CURRENT COORDINATES ARE: " + "LATITUDE: " + currentpositionlat + " LONGITUDE: " + currentpositionlon);
            alert("CALCULATING DISTANCE FROM CURRENT POSITION TO: SLANTSEVSKY DISTRICT, PEREVOLOK, LENINGRAD OBLAST, RUSSIA...");
            alert("YOU ARE " + distance + " MILES FROM RUSSIA");
    }

    function getDistanceFromLatLonInMiles(lat1,lon1,lat2,lon2) {
            var R = 6371; 
            var dLat = deg2rad(lat2-lat1);
            var dLon = deg2rad(lon2-lon1);
            var a =
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon/2) * Math.sin(dLon/2);

            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c * 0.621371;  
            return d;
        }

    function deg2rad(deg) {
        return deg * (Math.PI/180);
    }

    function hide_location() {
        document.getElementById("geodisplay").style.display="none";
    }

    function show_location() {
        document.getElementById("geodisplay").style.display="block";
    }

    function showMap() {
        window.location.href="russia_images/russia_map.jpg";
    }