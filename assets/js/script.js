document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Pastikan kedua elemen ada sebelum menambahkan event listener
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            // Toggle kelas 'active' pada nav-links untuk menampilkan/menyembunyikan menu
            navLinks.classList.toggle('active');

            // Tambahkan animasi pada ikon hamburger (opsional)
            hamburger.classList.toggle('active');
        });
    }
});