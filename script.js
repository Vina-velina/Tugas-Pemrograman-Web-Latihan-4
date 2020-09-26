$(document).ready(function () {
    $('#form').submit(function () {
        var nama = $('#nama_lengkap').val();
        var alamat = $('#alamat').val();
        var jk = $('#jk').val();
        var prodi = $('#program_studi').val();
        var semester = $('#semester').val();
        var hobi = $('#hobi').val();
        var peng_organisasi = $('#peng_organisasi').val();
        var alasan_organisasi = $('#alasan_organisasi').val();
        if (nama != "" && alamat != "" && jk != "" && prodi != "" && semester != "" && hobi != "" && peng_organisasi != "" && alasan_organisasi != "") {
            alert('Data Sedang Diproses!');
        } else {
            alert('Data Yang Diinputkan Tidak Lengkap!');
        }
    });

});