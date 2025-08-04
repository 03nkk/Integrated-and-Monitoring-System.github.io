document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const timelines = document.querySelectorAll('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Fungsi untuk Tab Navigasi Bulan
    if (tabs.length > 0 && timelines.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(item => item.classList.remove('active'));
                timelines.forEach(item => item.classList.remove('active'));
                tab.classList.add('active');
                const targetTimeline = document.getElementById(tab.dataset.tab);
                if (targetTimeline) {
                    targetTimeline.classList.add('active');
                }
            });
        });
    }

    // Fungsi untuk Accordion (Hanya satu yang terbuka)
    if (timelineItems.length > 0) {
        timelineItems.forEach(clickedItem => {
            const header = clickedItem.querySelector('.timeline-content');
            if (header) {
                header.addEventListener('click', () => {
                    // Cek apakah item yang diklik saat ini sudah aktif (terbuka)
                    const isAlreadyActive = clickedItem.classList.contains('active');

                    // Pertama, tutup semua item yang mungkin sedang terbuka
                    timelineItems.forEach(item => {
                        item.classList.remove('active');
                    });

                    // Jika item yang diklik tadi belum aktif, maka buka item tersebut
                    if (!isAlreadyActive) {
                        clickedItem.classList.add('active');
                    }
                    // Jika sudah aktif, maka aksi di atas (menutup semua) sudah cukup,
                    // sehingga item tersebut akan ikut tertutup.
                });
            }
        });
    }
});