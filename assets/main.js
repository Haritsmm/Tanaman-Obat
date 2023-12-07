
//Pesan Form
function submitForm() {
    // Ambil nilai dari input
    var nama = document.getElementById('nama').value;
    var npm = document.getElementById('npm').value;
    var tgl = document.getElementById('tgl').value;
    var pesan = document.getElementById('pesan').value;

    // Tampilkan output
    var outputTextarea = document.getElementById('output');
    outputTextarea.value += `
        Output Pesan:
        Nama: ${nama}
        NPM: ${npm}
        Tanggal: ${tgl}
        Pesan: ${pesan}
    `;

    // Bersihkan formulir setelah submit
    document.getElementById('nama').value = '';
    document.getElementById('npm').value = '';
    document.getElementById('tgl').value = '';
    document.getElementById('pesan').value = '';
}
