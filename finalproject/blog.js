const data = [
    {
        title: "Bulan Kitab Suci Nasional (BKSN) 2020",
        date: "6 Oktober 2020",
        author: "SMP Damai",
        description: "Setiap bulan, sekolah kita mengadakan acara pengajian untuk mendekatkan diri kepada Allah dan mempererat silaturahmi antar siswa, guru, dan orang tua. Pengajian ini biasanya diisi dengan berbagai kegiatan, seperti ceramah dari ustadz, pembacaan ayat-ayat suci Al-Qur'an, dan diskusi keagamaan...",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "Sukses Mengikuti PTS Nak",
        date: "2 Oktober 2020",
        author: "SD Damai",
        description: "Ditengah merebaknya Pandemi Covid 19, sehingga masa PSBB diperpanjang lagi oleh Gubernur DKI Jakarta sampai 11 Oktober 2020 namun itu tidak menyurutkan semangat anak-anak SD...",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "Kegiatan PTS Ganjil Tahun Pelajaran 2020/2021 SMP Damai Berjalan Lancar",
        date: "1 Oktober 2020",
        author: "SMP Damai",
        description: "Kegiatan belajar dan bermain di TK Tadinya Mesra tahun ajaran 2020/2021 berlangsung dengan penuh keceriaan. Dari tanggal 16 hingga 22 September 2020, anak-anak mengikuti berbagai kegiatan yang dirancang untuk mendukung perkembangan mereka, baik secara kognitif maupun sosial...",
        image: "https://via.placeholder.com/300x200"
    },
    // Add more data objects here if needed
];

const itemsPerPage = 3;
const totalPages = Math.ceil(data.length / itemsPerPage);
let currentPage = 1;

function renderPage() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const items = data.slice(start, end);

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('news-card');
        card.innerHTML = `
            <img src="${item.image}" alt="Image">
            <div class="news-content">
                <h2>${item.title}</h2>
                <p class="author">Oleh ${item.author} / ${item.date} / Berita</p>
                <p>${item.description}</p>
                <a href="#" class="read-more">Selengkapnya</a>
            </div>
        `;
        contentContainer.appendChild(card);
    });

    updateButtons();
}

function renderPageNumbers() {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    pageNumbersContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('a');
        pageNumber.textContent = i;
        pageNumber.href = '#';
        pageNumber.classList.add('page-number');
        if (i === currentPage) {
            pageNumber.classList.add('active');
        }
        pageNumber.onclick = (e) => {
            e.preventDefault();
            goToPage(i);
        };
        pageNumbersContainer.appendChild(pageNumber);
    }
}

function goToPage(page) {
    currentPage = page;
    renderPage();
    renderPageNumbers();
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage();
        renderPageNumbers();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
        renderPageNumbers();
    }
}

function updateButtons() {
    document.getElementById('nextButton').disabled = currentPage === totalPages;
}

document.addEventListener('DOMContentLoaded', () => {
    renderPage();
    renderPageNumbers();
});
