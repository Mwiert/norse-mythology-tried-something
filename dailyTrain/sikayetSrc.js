var btnSikayet = document.getElementById("SikayetSend");
btnSikayet.onclick = function(){
    var SikayetName =document.getElementById("SikayetAd").value;
    var SikayetEmail =document.getElementById("SikayetEmail").value;
    var SikayetSbjct =document.getElementById("SikayetSbjt").value;
    var SikayetMessage =document.getElementById("SikayetMssg").value;
    var SikayetCzm =document.getElementById("SikayetCzm").value;
    document.getElementById('yazdirSonucSikayet').innerHTML = "Gönderi Durumu: Basarili"
    document.getElementById('yazdirSonucSikayet').style.backgroundColor = "green";
    if(SikayetName==0){
        document.getElementById('yazdirSonucSikayet').innerHTML = "Gönderi Durumu: Basarisiz"
        document.getElementById('yazdirSonucSikayet').style.backgroundColor = "red";
    }
    /*veritabanına kaydedilebilir. */

    console.log("Adınız:"+SikayetName+"Email Adresiniz: "+SikayetEmail+"Konu:"+SikayetSbjct+"Mesajnız"+SikayetMessage+"Öneriniz:"+SikayetCzm);
};