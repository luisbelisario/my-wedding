const firebaseConfig = {
    apiKey: "AIzaSyCkH-i9y7CGtW8mUIajal_1TTdyVEhaYPA",
    authDomain: "my-party-list.firebaseapp.com",
    databaseURL: "https://my-party-list-default-rtdb.firebaseio.com",
    projectId: "my-party-list",
    storageBucket: "my-party-list.appspot.com",
    messagingSenderId: "83093471982",
    appId: "1:83093471982:web:43b0bfeec0003fc04429ff"
};

firebase.initializeApp(firebaseConfig);

var guest = firebase.database().ref('my-party-list');

document.querySelector("#button").addEventListener("click", saveData);

function saveData(e) {
    e.preventDefault();
    var names = document.querySelectorAll(".name");

    for(var i = 0; i < names.length; i++) {
        var newGuest = guest.push();

        newGuest.set({
            name: names[i].value,
        })

        names[i].value = '';

        window.location.href = "success.html";
    }
}