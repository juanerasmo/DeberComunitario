var app_fireBase = {};
(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAze-E1GPa-l3PG6aUqB0iUqnWudCeCt_M",
        authDomain: "debercomunitario.firebaseapp.com",
        databaseURL: "https://debercomunitario.firebaseio.com",
        projectId: "debercomunitario",
        storageBucket: "",
        messagingSenderId: "10425808804"
    };
    firebase.initializeApp(config);

    app_fireBase = firebase;
})()