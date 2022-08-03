function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  try {
    cekValidasi_nilaiAwal_nilaiAkhir(nilaiAwal, nilaiAkhir);
    cekValidasi_dataArray(dataArray);
    dataArrayHitung(nilaiAwal, nilaiAkhir, dataArray);
  } catch (error) {
    console.log(error);
  }
}

function cekValidasi_nilaiAwal_nilaiAkhir(nilaiAwal, nilaiAkhir) {
  if (nilaiAwal == "") throw "Angka dalam nilai awal Kosong, Mohon isi kembali";
  if (nilaiAkhir == "") throw "Angka dalam nilai akhir Kosong, Mohon isi kembali";
  if (nilaiAkhir < nilaiAwal) throw "Nilai akhir harus lebih besar dari nilai awal";
}

function cekValidasi_dataArray(dataArray) {
  if (dataArray == "") throw "Angka dalam dataArray Kosong, Mohon isi kembali";
  if (dataArray.length < 5) throw "Jumlah angka dalam dataArray harus lebih dari 5";

  for (let i = 0; i < dataArray.length; i++) {
    if (isNaN(dataArray[i])) {
      throw "Nilai dalam dataArray harus berupa Angka";
    }
  }
}

function dataArrayHitung(nilaiAwal, nilaiAkhir, dataArray) {
  dataFilter = dataArray.filter((nilaiArray) => nilaiArray >= nilaiAwal && nilaiArray <= nilaiAkhir);

  dataHasilSort = dataFilter.sort((a, b) => a - b);

  if (dataHasilSort != "") {
    console.log(dataHasilSort);
  } else {
    console.log(`Nilai tidak ditemukan`);
  }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);

seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);

seleksiNilai(5, 17, [2, 25, 4]);

seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);

