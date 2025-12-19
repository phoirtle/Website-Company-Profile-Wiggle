# Website-Company-Profile-Wiggle

# 💗 Wiggle - Fashion for Gen Z (UAS Pemrograman Web)

Wiggle adalah proyek website profil perusahaan fashion yang dirancang khusus untuk memenuhi tugas **Ujian Akhir Semester (UAS) Mata Kuliah Pemrograman Web**. Website ini mengusung konsep desain yang lucu, stylish, dan interaktif sesuai dengan karakteristik target audiensnya (Gen Z).

## 🚀 Fitur & Teknologi yang Digunakan

Proyek ini memaksimalkan penggunaan framework **Bootstrap 5** dan **JavaScript** untuk menciptakan pengalaman pengguna yang modern:
### 1. Bootstrap 5 Components & Utilities
* Navbar Sticky: Navigasi yang tetap berada di atas saat di-scroll.
* Hero Carousel: Slider gambar di halaman utama dengan efek *backdrop blur* pada caption.
* Bootstrap Grid System: Layouting yang responsif menggunakan `row` dan `col` untuk memastikan tampilan rapi di HP maupun Desktop.
* Modals: Digunakan untuk notifikasi sukses saat berhasil mengirim pesan di halaman kontak.
* Accordion: Digunakan pada bagian FAQ di halaman kontak untuk menghemat ruang informasi.
* Badges & Cards: Untuk pelabelan produk "NEW" atau "SALE" dan tampilan kartu produk/tim.

### 2. Fitur JavaScript (script.js)
* Dark Mode Toggle: Fitur ganti tema gelap/terang. Data tersimpan di `localStorage`, sehingga saat halaman di-refresh, tema tidak kembali ke awal.
* Product Filtering: Sistem filter kategori produk (Tops, Bottoms, Accessories) tanpa reload halaman.
* Real-time Form Validation: Validasi input nama dan email pada halaman kontak dengan pesan error yang muncul otomatis jika input tidak valid.
* Scroll to Top: Tombol interaktif untuk kembali ke bagian paling atas halaman dengan efek *smooth scroll*.

### 3. Custom CSS (style.css)
* Custom Variables: Menggunakan `:root` untuk manajemen warna yang konsisten.
* Glassmorphism: Efek blur transparan pada caption carousel.
* Hover Animations: Efek transisi halus dan transformasi (scale/translate) pada setiap kartu dan tombol.

## 📂 Struktur Folder
├── index.html        # Halaman Utama (Home)
├── about.html        # Halaman Tentang Kami & Tim
├── products.html     # Halaman Katalog Produk & Filter
├── contact.html      # Halaman Kontak & FAQ
├── style.css         # Custom Styling & Dark Mode Theme
├── script.js         # Logic Filter, Dark Mode, & Validasi
└── image/            # Folder Aset Gambar & Produk

🛠️ Cara Menjalankan
 * Download atau Clone repositori ini.
 * Pastikan Anda memiliki koneksi internet (untuk memuat library Bootstrap & FontAwesome via CDN).
 * Buka file index.html menggunakan browser (Chrome/Edge/Firefox).

Proyek ini dibuat untuk kepentingan nilai UAS.
