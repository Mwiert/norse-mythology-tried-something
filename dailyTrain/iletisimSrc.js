var btnCntct = document.getElementById("iletisimSend");


btnCntct.onclick = function(){
var cntctName =document.getElementById('iletisimAd').value;
var cntctEmail =document.getElementById('iletisimEmail').value;
var cntctSbjct =document.getElementById('iletisimSbjt').value;
var cntctMessage =document.getElementById('iletisimMssg').value;
document.getElementById('yazdirSonuc').innerHTML = "Gönderi Durumu: Basarili"
document.getElementById('yazdirSonuc').style.backgroundColor = "green";
if(cntctName==0){
    document.getElementById('yazdirSonuc').innerHTML = "Gönderi Durumu: Basarisiz"
    document.getElementById('yazdirSonuc').style.backgroundColor = "red";
}
/*veritabanına kaydedilebilir. */
console.log("Adınız:"+cntctName+"Email Adresiniz: "+cntctEmail+"Konu:"+cntctSbjct+"Mesajnız"+cntctMessage);
};
