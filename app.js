// Import fungsi yang dibutuhkan dari Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, orderBy, deleteDoc, doc } 
       from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Konfigurasi Firebase (Ganti dengan milik Anda dari Firebase Console!)
const firebaseConfig = {
    apiKey: "AIzaSyCQoZVGDACnexR005uqoTYIVC_VCpA7I1A",
    authDomain: "my-digital-notes.firebaseapp.com",
    projectId: "my-digital-notes",
    storageBucket: "my-digital-notes.firebasestorage.app",
    messagingSenderId: "290629867732",
    appId: "1:290629867732:web:2573563fde053761cd8341"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCol = collection(db, "catatan");
// Ambil elemen HTML
const saveBtn = document.getElementById("saveBtn");
const notesList = document.getElementById("notesList");
const deleteButtons = document.querySelectorAll(".delete-btn");

// FUNGSI 1: Simpan Catatan ke Firestore
saveBtn.addEventListener("click", async () => {
    const title = document.getElementById("noteTitle").value;
    const content = document.getElementById("noteContent").value;

    if (title && content) {
        try {
            await addDoc(notesCol, {
                judul: title,
                isi: content,
                waktu: new Date()
            });
            // Reset input setelah simpan
            document.getElementById("noteTitle").value = "";
            document.getElementById("noteContent").value = "";
        } catch (e) {
            console.error("Gagal simpan: ", e);
        }
    } else {
        alert("Judul dan isi tidak boleh kosong!");
    }
});

// FUNGSI TAMPIL DAN HAPUS (DIPERBAIKI)
const q = query(notesCol, orderBy("waktu", "desc"));
onSnapshot(q, (snapshot) => {
    notesList.innerHTML = "";
    snapshot.forEach((snapshotDoc) => {
        const data = snapshotDoc.data();
        const id = snapshotDoc.id; // ID unik dari Firestore

        const noteDiv = document.createElement("div");
        noteDiv.className = "note-card";
        noteDiv.innerHTML = `
            <div class="note-header">
                <h3>${data.judul}</h3>
                <button class="delete-btn">🗑️</button>
            </div>
            <p>${data.isi}</p>
            <small>${data.waktu ? data.waktu.toDate().toLocaleString('id-ID') : ''}</small>
        `;

        // Pasang aksi klik LANGSUNG ke tombol di dalam div ini
        const deleteBtn = noteDiv.querySelector(".delete-btn");
        deleteBtn.onclick = async () => {
            if (confirm("Hapus catatan ini?")) {
                try {
                    // Gunakan variabel 'id' secara langsung
                    await deleteDoc(doc(db, "catatan", id)); 
                    console.log("Catatan berhasil dihapus dari database.");
                } catch (error) {
                    console.error("Gagal menghapus dari database:", error);
                    alert("Gagal menghapus! Coba cek console (F12).");
                }
            }
        };

        notesList.appendChild(noteDiv);
    });
});