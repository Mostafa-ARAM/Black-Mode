const saveButton=document.getElementById("saveContact"),toast=document.getElementById("toast");
function showToast(message){toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3200)}
saveButton.addEventListener("click",()=>{
const vcard=["BEGIN:VCARD","VERSION:3.0","FN:Black Mode | بلک مود","ORG:Black Mode","TEL;TYPE=CELL,VOICE:+93792681684","URL:https://www.instagram.com/black_mode001","URL:https://t.me/MODE782025","ADR;TYPE=WORK:;;هرات، مستوفیت، نرسیده به چهاراهی بلند آب، ساختمان تجاری هایپر مشتری، طبقه دوم، واحد اول;;;;","NOTE:کانال تلگرام: https://t.me/AramPerfumes","END:VCARD"].join("\r\n");
const blob=new Blob([vcard],{type:"text/vcard;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");
a.href=url;a.download="Black-Mode.vcf";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
showToast("فایل مخاطب آماده شد؛ آن را باز کنید و «افزودن به مخاطبین» را بزنید.");
});
