const K=x=>"sdn11_"+x,G=x=>JSON.parse(localStorage.getItem(K(x))||"[]"),S=(x,v)=>localStorage.setItem(K(x),JSON.stringify(v)),U=p=>p+Date.now().toString(36);
document.querySelectorAll(".side[data-target]").forEach(b=>b.onclick=()=>{document.querySelectorAll(".side[data-target]").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelectorAll(".admin-section").forEach(x=>x.classList.remove("active"));document.getElementById(b.dataset.target).classList.add("active");renderAll()});
const e=s=>(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function row(t,m,type,id){return `<div class="admin-list-item"><div><strong>${e(t)}</strong><br><small>${e(m)}</small></div><div class="actions-mini"><button class="mini" onclick="editItem('${type}','${id}')">Edit</button><button class="mini danger" onclick="deleteItem('${type}','${id}')">Hapus</button></div></div>`}
function renderAll(){stats.innerHTML=[["Berita",G("news").length],["Pengumuman",G("announcements").length],["Prestasi",G("achievements").length],["Foto",G("gallery").length]].map(([a,b])=>`<div class="stat"><strong>${b}</strong><span>${a}</span></div>`).join("");
adminNewsList.innerHTML=G("news").map(x=>row(x.title,x.date,"news",x.id)).join("")||'<div class="empty">Belum ada berita.</div>';
adminAnnouncementList.innerHTML=G("announcements").map(x=>row(x.title,x.date,"announcements",x.id)).join("")||'<div class="empty">Belum ada pengumuman.</div>';
adminAchievementList.innerHTML=G("achievements").map(x=>row(x.title,x.level+" · "+x.year,"achievements",x.id)).join("")||'<div class="empty">Belum ada prestasi.</div>';
adminGalleryList.innerHTML=G("gallery").map(x=>row(x.title,x.image,"gallery",x.id)).join("")||'<div class="empty">Belum ada foto.</div>'}
function up(type,obj){let a=G(type),i=a.findIndex(x=>x.id===obj.id);i>=0?a[i]=obj:a.unshift(obj);S(type,a);renderAll()}
function deleteItem(type,id){if(confirm("Hapus konten ini?")){S(type,G(type).filter(x=>x.id!==id));renderAll()}}
function editItem(type,id){const x=G(type).find(a=>a.id===id);if(!x)return;document.querySelector(`[data-target="${type}"]`)?.click();
if(type==="news"){newsId.value=x.id;newsTitle.value=x.title;newsDate.value=x.date;newsExcerpt.value=x.excerpt;newsImage.value=x.image||""}
if(type==="announcements"){announcementId.value=x.id;announcementTitle.value=x.title;announcementDate.value=x.date;announcementBody.value=x.body}
if(type==="achievements"){achievementId.value=x.id;achievementTitle.value=x.title;achievementLevel.value=x.level;achievementYear.value=x.year}
if(type==="gallery"){galleryId.value=x.id;galleryTitle.value=x.title;galleryImage.value=x.image}}
window.editItem=editItem;window.deleteItem=deleteItem;
newsForm.onsubmit=q=>{q.preventDefault();up("news",{id:newsId.value||U("n"),title:newsTitle.value,date:newsDate.value,excerpt:newsExcerpt.value,image:newsImage.value});q.target.reset();newsId.value=""};
announcementForm.onsubmit=q=>{q.preventDefault();up("announcements",{id:announcementId.value||U("a"),title:announcementTitle.value,date:announcementDate.value,body:announcementBody.value});q.target.reset();announcementId.value=""};
achievementForm.onsubmit=q=>{q.preventDefault();up("achievements",{id:achievementId.value||U("p"),title:achievementTitle.value,level:achievementLevel.value,year:achievementYear.value});q.target.reset();achievementId.value=""};
galleryForm.onsubmit=q=>{q.preventDefault();up("gallery",{id:galleryId.value||U("g"),title:galleryTitle.value,image:galleryImage.value});q.target.reset();galleryId.value=""};
renderAll();