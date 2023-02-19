# Wordle Clone dengan Next.js dan Tailwind CSS

Ini adalah kloningan aplikasi Wordle yang menggunakan Next.js dan Tailwind CSS, serta menggunakan [KBBI API](https://github.com/btrianurdin/new-kbbi-api) untuk mengambil kata-kata yang digunakan dalam permainan.

## Cara Menggunakan

1. Clone repository ini ke komputer lokal Anda.
2. Jalankan perintah `npm install` atau `yarn install` untuk menginstal semua dependensi.
3. Jalankan perintah `npm run dev` atau `yarn dev` untuk memulai aplikasi di lingkungan pengembangan.
4. Buka http://localhost:3000 pada browser web Anda.
5. Mulai bermain dengan memasukkan kata-kata yang ingin ditebak!

## Cara Mengubah Kata-kata yang Digunakan

Kata-kata yang digunakan dalam permainan diambil dari KBBI API dan disimpan dalam file `/pages/api/randomWord.ts`. Anda dapat menambahkan kata-kata baru ke dalam file ini.

## Tentang Next.js dan Tailwind CSS

Next.js adalah kerangka kerja React yang sangat populer, yang memungkinkan pengembang web untuk membuat aplikasi web yang efisien, mudah dikelola, dan mudah diimplementasikan. Tailwind CSS, seperti yang disebutkan sebelumnya, adalah sebuah kerangka kerja CSS yang memberikan sejumlah besar kelas utilitas CSS yang dapat digunakan untuk membangun tata letak halaman web yang cepat dan efisien.

## Kredit

Aplikasi ini dibuat oleh [Rico Muhammad](https://github.com/ricomuh) menggunakan Next.js dan Tailwind CSS, dengan bantuan dari KBBI API. Terima kasih kepada pencipta Wordle asli, KBBI API, Next.js, dan Tailwind CSS atas sumber daya mereka.
