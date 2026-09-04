const defaults={
news:[
{id:"n1",title:"SPMB 2026 Dibuka Transparan",date:"2026-06-09",excerpt:"SDN Larangan 11 menyiapkan daya tampung 56 murid dalam dua rombongan belajar pada SPMB 2026.",image:"https://tangerangekspres.disway.id/upload/41e8591802ca9390ba3fdc27369b1e04.jpg"},
{id:"n2",title:"Tasyakuran Kelulusan Kelas VI",date:"2026-06-14",excerpt:"Kegiatan tasyakuran kelulusan kelas VI sekaligus launching buku digital SDN Larangan 11.",image:"https://tangerangekspres.disway.id/upload/f5942297febc2e06a016d240a9fd4687.jpeg"},
{id:"n3",title:"SPMB Tahap Dua",date:"2026-06-24",excerpt:"Setelah tahap pertama, sekolah masih memiliki sisa kuota untuk jalur KK dalam Kota Tangerang.",image:"https://tangerangekspres.disway.id/upload/1903cf25e9984cad7df4df617e57b60a.jpeg"}],
announcements:[
{id:"a1",title:"Portal Informasi Sekolah",date:"2026-09-04",body:"Website ini masih berupa prototype pengembangan. Informasi resmi dapat diperbarui oleh administrator sekolah."}],
achievements:[
{id:"p1",title:"Juara 3 Muratal Qur'an",level:"STQ Kecamatan Larangan",year:"2026"}],
gallery:[
{id:"g1",title:"Upacara di Halaman Sekolah",image:"https://tangerangekspres.disway.id/upload/41e8591802ca9390ba3fdc27369b1e04.jpg"},
{id:"g2",title:"Kelulusan Kelas VI",image:"https://tangerangekspres.disway.id/upload/f5942297febc2e06a016d240a9fd4687.jpeg"},
{id:"g3",title:"Kegiatan Siswa",image:"https://tangerangekspres.disway.id/upload/1903cf25e9984cad7df4df617e57b60a.jpeg"},
{id:"g4",title:"Upacara Bendera",image:"https://tangerangekspres.disway.id/upload/573156cd46f2508f175d17e17eeb0efa.jpeg"}]};
for(const k in defaults)if(!localStorage.getItem("sdn11_"+k))localStorage.setItem("sdn11_"+k,JSON.stringify(defaults[k]));
const get=k=>JSON.parse(localStorage.getItem("sdn11_"+k)||"[]");
const fmt=d=>new Date(d+"T00:00:00").toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"});
const fallback="data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600"><rect width="100%" height="100%" fill="#dfe7ed"/><text x="50%" y="50%" text-anchor="middle" fill="#667085" font-family="Arial" font-size="26">SDN Larangan 11</text></svg>`);
function img(url,title){return `<img src="${url||fallback}" alt="${title||""}" onerror="this.onerror=null;this.src='${fallback}'">`}
function render(){
newsList.innerHTML=get("news").map(x=>`<article class="content-card">${img(x.image,x.title)}<div class="body"><small>${fmt(x.date)}</small><h3>${x.title}</h3><p>${x.excerpt}</p></div></article>`).join("")||'<div class="empty">Belum ada berita.</div>';
announcementList.innerHTML=get("announcements").map(x=>`<article class="announcement"><strong>${fmt(x.date)}</strong><div><b>${x.title}</b><p>${x.body}</p></div></article>`).join("")||'<div class="empty">Belum ada pengumuman.</div>';
achievementList.innerHTML=get("achievements").map(x=>`<article class="achievement-card"><strong>${x.title}</strong><p>${x.level}</p><small>${x.year}</small></article>`).join("")||'<div class="empty">Belum ada prestasi.</div>';
galleryList.innerHTML=get("gallery").map(x=>`<figure>${img(x.image,x.title)}<figcaption>${x.title}</figcaption></figure>`).join("")||'<div class="empty">Belum ada foto.</div>';
}
menuBtn.addEventListener("click",()=>navMenu.classList.toggle("open"));render();