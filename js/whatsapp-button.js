var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 

link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'wp-content/plugins/filimm-whatsapp-button//css/style.css';  
head.appendChild(link); 

var btn = document.createElement("a");
btn.href = "https://web.whatsapp.com/send?=5521992195826";
btn.target = "_blank"
btn.setAttribute("class", "bottom-right");
btn.innerHTML = "<img src='wp-content/plugins/filimm-whatsapp-button/img/whatsapp-icone.png' alt='icone whatsapp' />";
document.body.appendChild(btn);