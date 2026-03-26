# 🗒️ My Digital Notes

Aplikasi pencatatan berbasis web sederhana yang menggunakan **Firebase Firestore** untuk penyimpanan data secara real-time. Proyek ini dibuat sebagai latihan implementasi database NoSQL dan sinkronisasi cloud.

## 🚀 Fitur Utama
- **Sinkronisasi Real-time**: Catatan langsung terupdate tanpa perlu refresh halaman.
- **Operasi CRUD**: Bisa Menambah (Create), Membaca (Read), dan Menghapus (Delete) catatan dengan lancar.
- **Cloud Hosted**: Sudah online dan bisa diakses dari mana saja melalui Firebase Hosting.
- **Desain Responsif**: Antarmuka bersih dan sederhana, nyaman dibuka di laptop maupun HP.

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend/Database**: [Firebase Firestore](https://firebase.google.com/)
- **Hosting**: [Firebase Hosting](https://firebase.google.com/docs/hosting)
- **Version Control**: Git & GitHub (Dikelola via CachyOS Linux)

## 📂 Struktur Proyek
- `index.html` - Struktur utama aplikasi.
- `style.css` - Desain kartu catatan (Note Cards).
- `app.js` - Logika utama Firebase dan manipulasi tampilan (DOM).
- `firebase.json` - Konfigurasi untuk Firebase Hosting.

## 🔧 Cara Instalasi & Setup Lokal
### 1. Clone repositori ini:
```bash
git clone https://github.com/bimofakot/my-digital-notes.git
```
### 2. Masuk ke folder project:
```bash
cd my-digital-notes
```
### 3. Buka file `index.html` atau deploy ulang menggunakan Firebase CLI:
```bash
firebase deploy
```
---
Dikembangkan oleh Bimo sebagai bagian dari perjalanan belajar Web Development & Sistem Cloud.