// JavaScript untuk tombol di halaman beranda
var tombolSalam = document.getElementById("tombolSalam");

if (tombolSalam) {
    tombolSalam.addEventListener("click", function () {
        document.getElementById("hasilSalam").textContent =
            "Terima kasih sudah mengunjungi website saya!";
    });
}

// JavaScript untuk formulir di halaman kontak
var formKontak = document.getElementById("formKontak");

if (formKontak) {
    formKontak.addEventListener("submit", function (event) {
        event.preventDefault();

        var nama = document.getElementById("nama").value.trim();
        var pesan = document.getElementById("pesan").value.trim();

        if (nama !== "" && pesan !== "") {
            document.getElementById("hasilKontak").textContent =
                "Terima kasih, " + nama + ". Pesan Anda berhasil diproses di halaman ini.";
            formKontak.reset();
        }
    });
}
