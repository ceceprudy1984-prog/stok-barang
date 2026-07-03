let produk = [

{
nama:"Kemeja Batik",
stok:12,
harga:150000
},

{
nama:"Celana Chino",
stok:0,
harga:200000
},

{
nama:"Kaos Polos",
stok:4,
harga:80000
},

{
nama:"Jaket Hoodie",
stok:8,
harga:250000
},

{
nama:"Kemeja Flanel",
stok:100,
harga:175000
},

];

// ==============================
// FUNGSI TAMPILKAN DATA
// ==============================

function tampilkanData(){

let html = `
<table>

<tr>
<th>No</th>
<th>Nama Produk</th>
<th>Harga</th>
<th>Stok</th>
<th>Status</th>
</tr>
`;

for(let i=0;i<produk.length;i++){

let status = "";
let warna = "";

if(produk[i].stok === 0){

status = "🔴 Habis";
warna = "merah";

}
else if(produk[i].stok <=5){

status = "🟠 Hampir Habis";
warna = "orange";

}
else{

status = "🟢 Tersedia";
warna = "hijau";

}

html += `
<tr>

<td>${i+1}</td>

<td>${produk[i].nama}</td>

<td>
Rp ${produk[i].harga.toLocaleString("id-ID")}
</td>

<td>${produk[i].stok}</td>

<td class="${warna}">
${status}
</td>

</tr>
`;

}

html += "</table>";

document.getElementById("hasil").innerHTML = html;

}

// ==============================
// RESET
// ==============================

function resetData(){

document.getElementById("hasil").innerHTML = "";

}

