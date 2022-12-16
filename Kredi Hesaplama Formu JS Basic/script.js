// *değişken tanımlamaları:


function krediHesapla() {
    var cekilecekTutar, vadeSayisi;
    var aylikTaksit, ödenecekToplamTutar;

    cekilecekTutar=document.getElementById("txtKrediTutari").value;
    var liste = document.getElementById("listeVade");
    vadeSayisi=liste.options[liste.selectedIndex].value;

    if (vadeSayisi == 12) {
        ödenecekToplamTutar = cekilecekTutar * 1.1;
    }
    else if (vadeSayisi == 24) {
        ödenecekToplamTutar = cekilecekTutar * 1.2;
    }
    else if (vadeSayisi == 36) {
        ödenecekToplamTutar = cekilecekTutar * 1.3;
    }
    else if (vadeSayisi == 48) {
        ödenecekToplamTutar = cekilecekTutar * 1.4;
    }
    

    aylikTaksit = ödenecekToplamTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML="Geri Ödeme Toplami: " +ödenecekToplamTutar+"<br>"+
        "Aylik Taksit Tutariniz: "+aylikTaksit.toFixed(2);

}

