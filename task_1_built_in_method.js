// build in number method

// // 1. .valueOf()
// // ialah untuk memunculkan hasil data di dalam object bisa berupa Number ,Boolean, atau String, Date
// // contohnya
// let x = new Number(12.321);
// let x = new Boolean(true);
// let x = new String("Data String Text");
// let x = new Date(2021, 6, 28, 11, 2, 30);
// // untuk date lebih menekankan jumlah total seluruh detik bukan untuk mempresentasikan hari, tahun, bulan tanggal, jam ,menit, maupun detik

// console.log(`Hasil Data .valueOf() adalah ${x.valueOf()}`);
// console.log(`Jenis Type data sebelum menggunakan .valueOf adalah ${typeof (x)}`);
// console.log(`Jenis Type data setelah menggunakan .valueOf adalah ${typeof (x.valueOf())}`);
















// // 2. .toString()
// // ialah untuk mengubah data menjadi string bisa berupa Number ,Boolean, atau String, Array, Date
// contohnya
// let x = 12.321;
// let x = true;
// let x = "Data String Text";
// let x = ["orange", "mango", "banana", "sugar"];
// let x = new Date(2021, 6, 28, 11, 2, 30);
// untuk date penekanan hasil di format hari:bulan:tanggal:tahun:jam:menit:detik kemudian wilayah

// let xy = x.toString();
// console.log(`Hasil Data .toString() adalah ${xy}`);
// console.log(`Jenis Type data sebelum menggunakan .toString adalah ${typeof (x)}`);
// console.log(`Jenis Type data setelah menggunakan .toString adalah ${typeof (xy)}`);
















// // 3. .concat()
// // ialah untuk menyisipkan data menjadi ke data baru hanya berlaku pada String dan Array
// // hampir sama seperti spread operator
// contohnya
// let x = "ayam dan kambing";
// let y = "dibikin sate";

// let x = ["ayam", "kambing"];
// let y = ["sapi", "ikan"];

// let xy = x.concat(y);
// console.log(`Hasil Data .concat() adalah ${xy}`);
















// // 4. .indexOf()
// // ialah untuk mencari data menggunakan index pada String dan Array

// // Untuk String
// // menggunakan syntax .indexOf( search item )
// // contohnya
// let x = "ayam dan kambing dibikin sate";
// let xy = x.indexOf("dan");
// index dimulai dari 0 langsung cari itemnya apa nanti diindex

// // Untuk Array
// // menggunakan syntax .indexOf( search item , item dimulai )
// // contohnya
// let x = ["ayam", "kambing", "sapi", "ikan"];
// let xy = x.indexOf("ikan", 0);
// // index dimulai dari 0 cari itemnya apa nanti dicari mulai dari index keberapa

// console.log(`Hasil Data .indexOf() adalah ${xy}`);



















// // 5. .length()
// // ialah untuk menentukan jumlah data pada string
// // // contohnya
// let x = "ayam dan kambing dibikin sate";
// let xy = x.length;

// console.log(`Hasil Data .length() adalah ${xy}`);










// // 6. .match()
// // ialah untuk menentukan data yang sama pada string
// // contohnya
// let x = "ayam dan kambing dibikin sate";
// let y = "ayam"
// let xy = x.match(y);
// // misal y sebagai nilai sama tidak ada dalam x maka hasil null
// // hasil akan berupa object bukan string lagi

// console.log(`Hasil Data .match() adalah ${xy}`);












// // 7. .replace()
// // ialah untuk mengganti data lama dengan data baru pada string
// // syntaxnya ialah .replace( data_lama , data_baru )
// // // contohnya
// let x = "ayam dan kambing dibikin sate";
// let y = "ayam"
// // y sebagai data lama
// let z = "sapi"
// // z data baru
// let xyz = x.replace(y, z);
// // shasil akan berupa string lagi, data awal masih tetap ada dan yang terganti hanya data lama dan data baru

// console.log(`Hasil Data .replace() adalah ${xyz}`);















// // 8. .pop()
// // ialah untuk menampilkan data yang terhapus paling belakang pada Array, bisa seluruh data , bisa hanya data yang terhapus

// let x = ["ayam", "kambing", "sapi", "ikan"];

// // ada 2 metode untuk menampilkan hasil pop yaitu :

// // 1. hasil seluruh data array yang telah dihapus dari belakang
// // contohnya
// x.pop();
// let xy = x;

// // 2. hasil data yang terhapus
// // contohnya
// let xy = x.pop();

// console.log(`Hasil Data .pop() adalah ${xy}`);


















// // 9. .push()
// // ialah untuk menambahkan data baru pada sebuah Array, serta penambahan data ditambahkan pada paling belakang

// // contohnya

// let x = ["ayam", "kambing", "sapi", "ikan"];
// let y = ["kelinci"];
// let z = ["kudanil", "paus"];

// x.push(y);
// // untuk push array y ke array x
// x.push(z);
// // untuk push array z ke array x

// console.log(`Hasil Data .push() adalah ${x}`);

















// // 10. .filter()
// // ialah untuk memfilter data pada Array

// // Contoh
// let x = [10, 13, 11, 8];

// // menggunakan arrow function
// let xy = x.filter((y) => y >= 10);

// // menggunakan callback
// function xyz(y) {
//     return y >= 10;
// };

// let xy = x.filter(xyz);

// console.log(`Hasil Data .filter() adalah ${xy}`);
