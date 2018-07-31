var mainApp = {};
(function () {
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            uid = user.uid;
            console.log(user);
            document.getElementById('usuario').innerHTML = user.displayName

        }else{
            uid = null;
            window.location.replace("index.html");
        }
    });
    
    function logOut() {
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
})()

function setCategory(tipo){
    var type = firebase.database().ref().child("categoria");
    type.push().set(tipo);
    console.log(tipo)
}