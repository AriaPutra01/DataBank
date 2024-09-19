export default function formatDateToIndonesia(dateString) {
    if (!dateString) return ""; // Menangani kasus di mana dateString kosong atau undefined

    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const date = new Date(dateString);

    // Periksa apakah tanggal valid
    if (isNaN(date.getTime())) return dateString; // Kembalikan string asli jika tidak valid

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}
