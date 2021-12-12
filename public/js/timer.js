document.addEventListener("DOMContentLoaded", function() {
    // timer
    let detik = 0;
    window.setInterval(() => {
        detik = detik + 1;
        document.getElementById('timer').innerHTML = detik;
    }, 1000);

    // sesi
    const sesi = document.getElementById('sesi');
    const sesi1 = 'Sesi ini akan hilang pada detik ke 20';
    const sesi2 = 'Sesi ini hanya sampai detik ke 30 dan akan berganti';
    const sesi3 = 'Sesi ini hanya akan tampil dalam 15 detik atau sampai detik ke 45 dan akan hilang';
    sesi.innerHTML = sesi1;
    setTimeout(() => {
        sesi.innerHTML = sesi2;
    }, 1000 * 20);

    setTimeout(() => {
        sesi.innerHTML = sesi3;
    }, 1000 * 30);

    setTimeout(() => {
        sesi.classList.add('hidden')
    }, 1000 * 45);
});