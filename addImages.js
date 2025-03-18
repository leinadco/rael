console.clear();

  /*// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyABl0AhIdGDp7qILZd0ZzHa6qNijHtPHcY",
    authDomain: "nunta-poze.firebaseapp.com",
    projectId: "nunta-poze",
    storageBucket: "nunta-poze.firebasestorage.app",
    messagingSenderId: "2966986939",
    appId: "1:2966986939:web:336625f50ea50e370a499e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);*/

  // 🔥 Configurarea Firebase (înlocuiește cu datele din Firebase Console)
  const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROIECT_ID.firebaseapp.com",
    projectId: "PROIECT_ID",
    storageBucket: "PROIECT_ID.appspot.com",
    messagingSenderId: "MESAJ_ID",
    appId: "APP_ID"
};

// Inițializare Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();

// 📤 Încărcarea pozei
function uploadImage() {
    const file = document.getElementById("fileInput").files[0];
    if (!file) return alert("Selectează o poză!");

    const storageRef = storage.ref("poze/" + file.name);
    storageRef.put(file).then(() => {
        storageRef.getDownloadURL().then(url => {
            db.collection("poze").add({ url });
            alert("Poza a fost încărcată!");
            loadImages();  // Reîncarcă galeria
        });
    });
}

// 🖼️ Afișarea pozelor încărcate
function loadImages() {
    document.getElementById("imageGallery").innerHTML = "";
    db.collection("poze").get().then(snapshot => {
        snapshot.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.data().url;
            img.style.width = "150px";
            img.style.margin = "10px";
            document.getElementById("imageGallery").appendChild(img);
        });
    });
}

// 🔄 Încarcă pozele la pornire
loadImages();