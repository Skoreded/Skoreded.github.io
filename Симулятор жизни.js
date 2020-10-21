window.onload = function () {
    alert("Здравствуй, ты запустил/ла мой первый проект, в котором я решил сделать кнопочную игру в жанре 'симулятора жизни/бомжа'. Так же игра не имеет сохранения. Рекомендуется играть в Microsoft Edge для корректного воспроизведения музыки. А сейчас введи пожалуйста свой игровой ник.");
    var name = prompt();
    //var test = document.createElement("p");
    //test.innerHTML = "<strong> 1 </strong>";
    //var D = document.getElementById("D");
    //D.parentNode.appendChild(test); //создает объект в конце родительского элемента
    //D.parentNode.insertBefore(test, D); //создает объект перед указанным елементом
    //D.parentNode.replaceChild(test, D); //заменяет 1 объект на 2 объект
    //var id = document.getElementById("D"); //ищем объект по id
    //id.parentNode.removeChild(id); //удаляем объект из родительского эллемента
     
    var audio = document.getElementById("audio");
    audio.volume = 0.3;

    var dop = document.getElementById("lvl");
    var your = document.createElement("td");
    your.innerHTML = name;
    dop.parentNode.appendChild(your);
}

var doc = document; // кеширование document

// интерфейсы 

// интерфейс магазина
function marcet0() {
    var WORK = doc.getElementById("workgl");
    doc.body.removeChild(WORK);

    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);

    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);

    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);

    var EWM = doc.getElementById("td1");

    var bm = doc.getElementById("marcet");
    doc.body.removeChild(bm);

    var bw = doc.getElementById("work");
    doc.body.removeChild(bw);

    // еда
    var eat = doc.createElement("tr");
    eat.id = "eat";
    EWM.parentNode.insertBefore(eat, EWM);

    var tdeat = doc.createElement("td");
    tdeat.id = "tdeat";
    eat.appendChild(tdeat);

    var tdeat1 = doc.getElementById("tdeat");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/EAT1.png";
    tdeat1.appendChild(tdEAT);

    var EAT1 = doc.createElement("td");
    EAT1.innerHTML = "Еда";
    eat.appendChild(EAT1);

    var BUTEAT = doc.createElement("input");
    BUTEAT.type = "button"
    BUTEAT.value = "Посмотреть";
    BUTEAT.id = "marcetEAT";
    eat.appendChild(BUTEAT);

    var marcetEAT = doc.getElementById("marcetEAT");
    marcetEAT.onclick = marceteat;
    // еда

    // напитки
    var wet = doc.createElement("tr");
    wet.id = "wet";
    EWM.parentNode.insertBefore(wet, EWM);

    var tdnap = doc.createElement("td");
    tdnap.id = "tdnap";
    wet.appendChild(tdnap);

    var tdnap1 = doc.getElementById("tdnap");

    var tdNAP = doc.createElement("img");
    tdNAP.src = "Фото/NAP.png";
    tdnap1.appendChild(tdNAP);

    var WET1 = doc.createElement("td");
    WET1.innerHTML = "Напитки";
    wet.appendChild(WET1);

    var BUTWET = doc.createElement("input");
    BUTWET.type = "button"
    BUTWET.value = "Посмотреть";
    BUTWET.id = "marcetWET";
    wet.appendChild(BUTWET);

    var marcetWET = doc.getElementById("marcetWET");
    marcetWET.onclick = marcetwet;
    // напитки

    // кнопка назад
    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenumagaz;
    // кнопка назад
}
// интерфейс магазина

// интерфейс магазина еды
function marceteat() {
    var exit = doc.getElementById("back");
    doc.body.removeChild(exit);

    var eat = doc.getElementById("eat");
    eat.parentNode.removeChild(eat);

    var wet = doc.getElementById("wet");
    wet.parentNode.removeChild(wet);

    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);

    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);

    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);

    var EWM = doc.getElementById("td1");

    // хот-дог
    var hot = doc.createElement("tr");
    hot.id = "hot";
    EWM.parentNode.insertBefore(hot, EWM);

    var tdhot = doc.createElement("td");
    tdhot.id = "tdhot";
    hot.appendChild(tdhot);

    var tdhot1 = doc.getElementById("tdhot");

    var tdHOT = doc.createElement("img");
    tdHOT.src = "Фото/HOT.png";
    tdhot1.appendChild(tdHOT);

    var HOT = doc.createElement("td");
    HOT.innerHTML = "ХОТ-ДОГ - 10 $";
    hot.appendChild(HOT);

    var BUTHOT = doc.createElement("input");
    BUTHOT.type = "button"
    BUTHOT.value = "+10 сытости";
    BUTHOT.id = "buttonhot";
    hot.appendChild(BUTHOT);

    var buthot = doc.getElementById("buttonhot");
    buthot.onclick = HOTDOG;
    // хот-дог

    // бургер
    var bur = doc.createElement("tr");
    bur.id = "bur";
    EWM.parentNode.insertBefore(bur, EWM);

    var tdbur = doc.createElement("td");
    tdbur.id = "tdbur";
    bur.appendChild(tdbur);

    var tdbur1 = doc.getElementById("tdbur");

    var tdBUR = doc.createElement("img");
    tdBUR.src = "Фото/BUR.png";
    tdbur1.appendChild(tdBUR);

    var BUR = doc.createElement("td");
    BUR.innerHTML = "БУРГЕР - 20 $";
    bur.appendChild(BUR);

    var BUTBUR = doc.createElement("input");
    BUTBUR.type = "button"
    BUTBUR.value = "+30 сытости";
    BUTBUR.id = "buttonbur";
    bur.appendChild(BUTBUR);

    var butbur = doc.getElementById("buttonbur");
    butbur.onclick = BUR0;
    // бургер

    // роллы
    var pol = doc.createElement("tr");
    pol.id = "pol";
    EWM.parentNode.insertBefore(pol, EWM);

    var tdrol = doc.createElement("td");
    tdrol.id = "tdrol";
    pol.appendChild(tdrol);

    var tdrol1 = doc.getElementById("tdrol");

    var tdROL = doc.createElement("img");
    tdROL.src = "Фото/ROLL.png";
    tdrol1.appendChild(tdROL);

    var POL = doc.createElement("td");
    POL.innerHTML = "РОЛЛЫ - 28 $";
    pol.appendChild(POL);

    var BUTPOL = doc.createElement("input");
    BUTPOL.type = "button"
    BUTPOL.value = "+33 сытости";
    BUTPOL.id = "buttonpol";
    pol.appendChild(BUTPOL);

    var butpol = doc.getElementById("buttonpol");
    butpol.onclick = POL0;
    // роллы

    // пицца
    var piz = doc.createElement("tr");
    piz.id = "piz";
    EWM.parentNode.insertBefore(piz, EWM);

    var tdpiz = doc.createElement("td");
    tdpiz.id = "tdpiz";
    piz.appendChild(tdpiz);

    var tdpiz1 = doc.getElementById("tdpiz");

    var tdPIZ = doc.createElement("img");
    tdPIZ.src = "Фото/PIZ.png";
    tdpiz1.appendChild(tdPIZ);

    var PIZ = doc.createElement("td");
    PIZ.innerHTML = "ПИЦЦА - 35 $";
    piz.appendChild(PIZ);

    var BUTPIZ = doc.createElement("input");
    BUTPIZ.type = "button"
    BUTPIZ.value = "+45 сытости";
    BUTPIZ.id = "buttonpiz";
    piz.appendChild(BUTPIZ);

    var butpiz = doc.getElementById("buttonpiz");
    butpiz.onclick = PIZ0;
    // пицца

    // суп
    var soup = doc.createElement("tr");
    soup.id = "soup";
    EWM.parentNode.insertBefore(soup, EWM);

    var tdsoup = doc.createElement("td");
    tdsoup.id = "tdsoup";
    soup.appendChild(tdsoup);

    var tdsoup1 = doc.getElementById("tdsoup");

    var tdSOUP = doc.createElement("img");
    tdSOUP.src = "Фото/SOUP.png";
    tdsoup1.appendChild(tdSOUP);

    var SOUP = doc.createElement("td");
    SOUP.innerHTML = "СУП - 50 $";
    soup.appendChild(SOUP);

    var BUTSOUP = doc.createElement("input");
    BUTSOUP.type = "button"
    BUTSOUP.value = "+70 сытости";
    BUTSOUP.id = "buttonsoup";
    soup.appendChild(BUTSOUP);

    var butsoup = doc.getElementById("buttonsoup");
    butsoup.onclick = SOUP0;
    // суп

    // кнопка назад
    var back = doc.createElement("input");
    back.type = "button";
    back.value = "В меню";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenueat;
    // кнопка назад

}
// интерфейс магазина еды

// интерфейс мазагина напитков
function marcetwet() {
    var exit = doc.getElementById("back");
    doc.body.removeChild(exit);

    var eat = doc.getElementById("eat");
    eat.parentNode.removeChild(eat);

    var wet = doc.getElementById("wet");
    wet.parentNode.removeChild(wet);

    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);

    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);

    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);

    var EWM = doc.getElementById("td1");

    // Вода
    var weit = doc.createElement("tr");
    weit.id = "weit";
    EWM.parentNode.insertBefore(weit, EWM);

    var tdwet = doc.createElement("td");
    tdwet.id = "tdwet";
    weit.appendChild(tdwet);

    var tdwet1 = doc.getElementById("tdwet");

    var tdWET = doc.createElement("img");
    tdWET.src = "Фото/WET1.png";
    tdwet1.appendChild(tdWET);

    var WEIT = doc.createElement("td");
    WEIT.innerHTML = "ВОДА - 5 $";
    weit.appendChild(WEIT);

    var BUTWEIT = doc.createElement("input");
    BUTWEIT.type = "button"
    BUTWEIT.value = "+10 жажды";
    BUTWEIT.id = "buttonweit";
    weit.appendChild(BUTWEIT);

    var butweit = doc.getElementById("buttonweit");
    butweit.onclick = weit0;
    // Вода

    // пиво
    var piv = doc.createElement("tr");
    piv.id = "piv";
    EWM.parentNode.insertBefore(piv, EWM);

    var tdwpiv = doc.createElement("td");
    tdwpiv.id = "tdwpiv";
    piv.appendChild(tdwpiv);

    var tdwpiv1 = doc.getElementById("tdwpiv");

    var tdPIV = doc.createElement("img");
    tdPIV.src = "Фото/PIV.png";
    tdwpiv1.appendChild(tdPIV);

    var PIV = doc.createElement("td");
    PIV.innerHTML = "ПИВО - 10 $";
    piv.appendChild(PIV);

    var BUTPIV = doc.createElement("input");
    BUTPIV.type = "button"
    BUTPIV.value = "+10 жажды";
    BUTPIV.id = "buttonpiv";
    piv.appendChild(BUTPIV);

    var butpiv = doc.getElementById("buttonpiv");
    butpiv.onclick = piv0;
    // пиво

    // лимонад
    var lim = doc.createElement("tr");
    lim.id = "lim";
    EWM.parentNode.insertBefore(lim, EWM);

    var tdlim = doc.createElement("td");
    tdlim.id = "tdlim";
    lim.appendChild(tdlim);

    var tdlim1 = doc.getElementById("tdlim");

    var tdLIM = doc.createElement("img");
    tdLIM.src = "Фото/LIM.png";
    tdlim1.appendChild(tdLIM);

    var LIM = doc.createElement("td");
    LIM.innerHTML = "ЛИМОНАД - 20 $";
    lim.appendChild(LIM);

    var BUTLIM = doc.createElement("input");
    BUTLIM.type = "button"
    BUTLIM.value = "+25 жажды";
    BUTLIM.id = "buttonlim";
    lim.appendChild(BUTLIM);

    var butlim = doc.getElementById("buttonlim");
    butlim.onclick = lim0;
    // лимонад

    // молочный коктейль
    var kok = doc.createElement("tr");
    kok.id = "kok";
    EWM.parentNode.insertBefore(kok, EWM);

    var tdkok = doc.createElement("td");
    tdkok.id = "tdkok";
    kok.appendChild(tdkok);

    var tdkok1 = doc.getElementById("tdkok");

    var tdKOK = doc.createElement("img");
    tdKOK.src = "Фото/KOK.png";
    tdkok1.appendChild(tdKOK);

    var KOK = doc.createElement("td");
    KOK.innerHTML = "КОКТЕЙЛЬ - 25 $";
    kok.appendChild(KOK);

    var BUTKOK = doc.createElement("input");
    BUTKOK.type = "button"
    BUTKOK.value = "+35 жажды";
    BUTKOK.id = "buttonkok";
    kok.appendChild(BUTKOK);

    var butkok = doc.getElementById("buttonkok");
    butkok.onclick = kok0;
    // молочный коктейль

    // кофе
    var cof = doc.createElement("tr");
    cof.id = "cof";
    EWM.parentNode.insertBefore(cof, EWM);

    var tdcof = doc.createElement("td");
    tdcof.id = "tdcof";
    cof.appendChild(tdcof);

    var tdcof1 = doc.getElementById("tdcof");

    var tdCOF = doc.createElement("img");
    tdCOF.src = "Фото/COF.png";
    tdcof1.appendChild(tdCOF);

    var COF = doc.createElement("td");
    COF.innerHTML = "КОФЕ - 40 $";
    cof.appendChild(COF);

    var BUTCOF = doc.createElement("input");
    BUTCOF.type = "button"
    BUTCOF.value = "+60 жажды";
    BUTCOF.id = "buttoncof";
    cof.appendChild(BUTCOF);

    var butcof = doc.getElementById("buttoncof");
    butcof.onclick = cof0;
    // кофе

    // кнопка назад
    var back = doc.createElement("input");
    back.type = "button";
    back.value = "В меню";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenuweit;
    // кнопка назад
}
// интерфейс мазагина напитков

// интерфейс работ
function work0() {
    var WORK = doc.getElementById("workgl");
    doc.body.removeChild(WORK);

    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);

    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);

    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);

    var EWM = doc.getElementById("td1");

    var bm = doc.getElementById("marcet");
    doc.body.removeChild(bm);

    var bw = doc.getElementById("work");
    doc.body.removeChild(bw);

    // уборщик
    var clea = doc.createElement("tr");
    clea.id = "clea";
    EWM.parentNode.insertBefore(clea, EWM);

    var tdclean = doc.createElement("td");
    tdclean.id = "tdclean";
    clea.appendChild(tdclean);

    var tdclean1 = doc.getElementById("tdclean");

    var cleaner = doc.createElement("img");
    cleaner.src = "Фото/CLEANER.png";
    tdclean1.appendChild(cleaner);

    var WET1 = doc.createElement("td");
    WET1.innerHTML = "УБОРЩИК + 40 $";
    clea.appendChild(WET1);

    var BUTCLEA1 = doc.createElement("input");
    BUTCLEA1.type = "button";
    BUTCLEA1.value = "Инфо";
    BUTCLEA1.id = "CLEA1";
    clea.appendChild(BUTCLEA1);

    var CLEA1 = doc.getElementById("CLEA1");
    CLEA1.onclick = cleainfo;

    var BUTCLEA = doc.createElement("input");
    BUTCLEA.type = "button";
    BUTCLEA.value = "Работать";
    BUTCLEA.id = "CLEA";
    clea.appendChild(BUTCLEA);

    var CLEA = doc.getElementById("CLEA");
    CLEA.onclick = clea0;
    // уборщик

    // промоутер
    var prom = doc.createElement("tr");
    prom.id = "prom";
    EWM.parentNode.insertBefore(prom, EWM);

    var tdprom = doc.createElement("td");
    tdprom.id = "tdprom";
    prom.appendChild(tdprom);

    var tdprom1 = doc.getElementById("tdprom");

    var promouter = doc.createElement("img");
    promouter.src = "Фото/PROMOUTER.png";
    tdprom1.appendChild(promouter);

    var WET1 = doc.createElement("td");
    WET1.innerHTML = "ПРОМОУТЕР + 50 $";
    prom.appendChild(WET1);

    var BUTPROM1 = doc.createElement("input");
    BUTPROM1.type = "button";
    BUTPROM1.value = "Инфо";
    BUTPROM1.id = "PROM1";
    prom.appendChild(BUTPROM1);

    var PROM1 = doc.getElementById("PROM1");
    PROM1.onclick = prominfo0;

    var BUTPROM = doc.createElement("input");
    BUTPROM.type = "button";
    BUTPROM.value = "Работать";
    BUTPROM.id = "PROM";
    prom.appendChild(BUTPROM);

    var PROM = doc.getElementById("PROM");
    PROM.onclick = prom0;
    // промоутер

    // грузчик
    var gr = doc.createElement("tr");
    gr.id = "gr";
    EWM.parentNode.insertBefore(gr, EWM);

    var tdgr = doc.createElement("td");
    tdgr.id = "tdgr";
    gr.appendChild(tdgr);

    var tdgr1 = doc.getElementById("tdgr");

    var gruz = doc.createElement("img");
    gruz.src = "Фото/BOX.png";
    tdgr1.appendChild(gruz);

    var WET1 = doc.createElement("td");
    WET1.innerHTML = "ГРУЗЧИК + 100 $";
    gr.appendChild(WET1);

    var BUTGR1 = doc.createElement("input");
    BUTGR1.type = "button";
    BUTGR1.value = "Инфо";
    BUTGR1.id = "GR1";
    gr.appendChild(BUTGR1);

    var GR1 = doc.getElementById("GR1");
    GR1.onclick = grinfo;

    var BUTGR = doc.createElement("input");
    BUTGR.type = "button";
    BUTGR.value = "Работать";
    BUTGR.id = "GR";
    gr.appendChild(BUTGR);

    var GR = doc.getElementById("GR");
    GR.onclick = gr0;
    // грузчик

    // официант
    var of = doc.createElement("tr");
    of.id = "of";
    EWM.parentNode.insertBefore(of, EWM);

    var tdofic = doc.createElement("td");
    tdofic.id = "tdofic";
    of.appendChild(tdofic);

    var tdofic1 = doc.getElementById("tdofic");

    var ofic = doc.createElement("img");
    ofic.src = "Фото/OFICIANT.png";
    tdofic1.appendChild(ofic);

    var WET1 = doc.createElement("td");
    WET1.innerHTML = "ОФИЦИАНТ + 130 $";
    of.appendChild(WET1);

    var BUTOF1 = doc.createElement("input");
    BUTOF1.type = "button";
    BUTOF1.value = "Инфо";
    BUTOF1.id = "OF";
    of.appendChild(BUTOF1);

    var OF1 = doc.getElementById("OF");
    OF1.onclick = ofinfo;

    var BUTOF = doc.createElement("input");
    BUTOF.type = "button";
    BUTOF.value = "Работать";
    BUTOF.id = "OF1";
    of.appendChild(BUTOF);

    var OF = doc.getElementById("OF1");
    OF.onclick = of0;
    // официант

    // кнопка назад
    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenuwork;
    // кнопка назад
}
// интерфейс работ

// интерфейс главных работ
function work01() {
    alert("as");
}
// интерфейс главных работ

// интерфейсы 

// функции возврата

// функция назад в меню из магазина
function backmenumagaz() {
    var eat = doc.getElementById("eat");
    eat.parentNode.removeChild(eat);

    var wet = doc.getElementById("wet");
    wet.parentNode.removeChild(wet);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    // кнопка магазина
    var butmarcet = doc.createElement("input");
    butmarcet.type = "button";
    butmarcet.value = "Магазин 24/7";
    butmarcet.id = "marcet";
    doc.body.appendChild(butmarcet);

    var marcet = doc.getElementById("marcet");
    marcet.onclick = marcet0;
    // кнопка магазина

    // кнопка работ
    var butwork = doc.createElement("input");
    butwork.type = "button";
    butwork.value = "Подработка";
    butwork.id = "work";
    doc.body.appendChild(butwork);

    var work = doc.getElementById("work");
    work.onclick = work0;

    var butwork1 = doc.createElement("input");
    butwork1.type = "button";
    butwork1.value = "Работа";
    butwork1.id = "workgl";
    doc.body.appendChild(butwork1);

    var work1 = doc.getElementById("workgl");
    work1.onclick = work01;
    // кнопка работ
}
// функция назад в меню из магазина

// функция назад в меню из еды
function backmenueat() {
    var hot = doc.getElementById("hot");
    hot.parentNode.removeChild(hot);

    var bur = doc.getElementById("bur");
    bur.parentNode.removeChild(bur);

    var piz = doc.getElementById("piz");
    piz.parentNode.removeChild(piz);

    var pol = doc.getElementById("pol");
    pol.parentNode.removeChild(pol);

    var soup = doc.getElementById("soup");
    soup.parentNode.removeChild(soup);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    // кнопка магазина
    var butmarcet = doc.createElement("input");
    butmarcet.type = "button";
    butmarcet.value = "Магазин 24/7";
    butmarcet.id = "marcet";
    doc.body.appendChild(butmarcet);

    var marcet = doc.getElementById("marcet");
    marcet.onclick = marcet0;
    // кнопка магазина

    // кнопка работ
    var butwork = doc.createElement("input");
    butwork.type = "button";
    butwork.value = "Подработка";
    butwork.id = "work";
    doc.body.appendChild(butwork);

    var work = doc.getElementById("work");
    work.onclick = work0;

    var butwork1 = doc.createElement("input");
    butwork1.type = "button";
    butwork1.value = "Работа";
    butwork1.id = "workgl";
    doc.body.appendChild(butwork1);

    var work1 = doc.getElementById("workgl");
    work1.onclick = work01;
    // кнопка работ
}
// функция назад в меню из еды

// функция назад в меню из напитков
function backmenuweit() {
    var weit = doc.getElementById("weit");
    weit.parentNode.removeChild(weit);

    var piv = doc.getElementById("piv");
    piv.parentNode.removeChild(piv);

    var lim = doc.getElementById("lim");
    lim.parentNode.removeChild(lim);

    var kok = doc.getElementById("kok");
    kok.parentNode.removeChild(kok);

    var cof = doc.getElementById("cof");
    cof.parentNode.removeChild(cof);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    // кнопка магазина
    var butmarcet = doc.createElement("input");
    butmarcet.type = "button";
    butmarcet.value = "Магазин 24/7";
    butmarcet.id = "marcet";
    doc.body.appendChild(butmarcet);

    var marcet = doc.getElementById("marcet");
    marcet.onclick = marcet0;
    // кнопка магазина

    // кнопка работ
    var butwork = doc.createElement("input");
    butwork.type = "button";
    butwork.value = "Подработка";
    butwork.id = "work";
    doc.body.appendChild(butwork);

    var work = doc.getElementById("work");
    work.onclick = work0;

    var butwork1 = doc.createElement("input");
    butwork1.type = "button";
    butwork1.value = "Работа";
    butwork1.id = "workgl";
    doc.body.appendChild(butwork1);

    var work1 = doc.getElementById("workgl");
    work1.onclick = work01;
    // кнопка работ
}
// функция назад в меню из напитков

// функция назад в меню с работы
function backmenuwork() {
    var clea = doc.getElementById("clea");
    clea.parentNode.removeChild(clea);

    var prom = doc.getElementById("prom");
    prom.parentNode.removeChild(prom);

    var gr = doc.getElementById("gr");
    gr.parentNode.removeChild(gr);

    var of = doc.getElementById("of");
    of.parentNode.removeChild(of);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    // кнопка магазина
    var butmarcet = doc.createElement("input");
    butmarcet.type = "button";
    butmarcet.value = "Магазин 24/7";
    butmarcet.id = "marcet";
    doc.body.appendChild(butmarcet);

    var marcet = doc.getElementById("marcet");
    marcet.onclick = marcet0;
    // кнопка магазина

    // кнопка работ
    var butwork = doc.createElement("input");
    butwork.type = "button";
    butwork.value = "Подработка";
    butwork.id = "work";
    doc.body.appendChild(butwork);

    var work = doc.getElementById("work");
    work.onclick = work0;

    var butwork1 = doc.createElement("input");
    butwork1.type = "button";
    butwork1.value = "Работа";
    butwork1.id = "workgl";
    doc.body.appendChild(butwork1);

    var work1 = doc.getElementById("workgl");
    work1.onclick = work01;
    // кнопка работ
}
// функция назад в меню с работы

// функции возврата

// еда

// восполнение сытости ход-дог
function HOTDOG() {

    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число
    
    if (MON >= 10 && EAT < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        EAT += 10;
        MON -= 10;
        if (EAT < 100) {
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        } else if (EAT >= 100) {
            EAT = 100;
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 10 && EAT == 100) {
        alert("Вы сыты");
    } else if (MON < 10 && EAT < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости ход-дог

// восполнение сытости бургер
function BUR0() {
    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    if (MON >= 20 && EAT < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        EAT += 30;
        MON -= 20;
        if (EAT < 100) {
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        } else if (EAT >= 100) {
            EAT = 100;
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 20 && EAT == 100) {
        alert("Вы сыты");
    } else if (MON < 20 && EAT < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости бургер

// восполнение сытости бургер
function POL0() {
    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    if (MON >= 28 && EAT < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        EAT += 33;
        MON -= 28;
        if (EAT < 100) {
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        } else if (EAT >= 100) {
            EAT = 100;
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 28 && EAT == 100) {
        alert("Вы сыты");
    } else if (MON < 28 && EAT < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости бургер

// восполнение сытости бургер
function PIZ0() {
    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    if (MON >= 20 && EAT < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        EAT += 45;
        MON -= 35;
        if (EAT < 100) {
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        } else if (EAT >= 100) {
            EAT = 100;
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 35 && EAT == 100) {
        alert("Вы сыты");
    } else if (MON < 35 && EAT < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости бургер

// восполнение сытости бургер
function SOUP0() {
    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    if (MON >= 20 && EAT < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        EAT += 70;
        MON -= 50;
        if (EAT < 100) {
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        } else if (EAT >= 100) {
            EAT = 100;
            var eat = doc.createElement("td");
            eat.innerHTML = EAT;
            eat.id = "E"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            EAT_id1.parentNode.replaceChild(eat, EAT_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/eat.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 50 && EAT == 100) {
        alert("Вы сыты");
    } else if (MON < 50 && EAT < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости бургер

// еда

// напитки

// выпить воды
function weit0() {
    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    if (MON >= 5 && WET < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        WET += 10;
        MON -= 5;
        if (WET < 100) {
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        } else if (WET >= 100) {
            WET = 100;
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 5 && WET == 100) {
        alert("Вы не хотите пить");
    } else if (MON < 5 && WET < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить воды

// выпить пиво
function piv0() {
    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    if (MON >= 10 && WET < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        WET += 10;
        MON -= 10;
        if (WET < 100) {
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        } else if (WET >= 100) {
            WET = 100;
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 10 && WET == 100) {
        alert("Вы не хотите пить");
    } else if (MON < 10 && WET < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить пиво

// выпить лимонад
function lim0() {
    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    if (MON >= 20 && WET < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        WET += 25;
        MON -= 20;
        if (WET < 100) {
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        } else if (WET >= 100) {
            WET = 100;
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 20 && WET == 100) {
        alert("Вы не хотите пить");
    } else if (MON < 20 && WET < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить лимонад

// выпить коктейл
function kok0() {
    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    if (MON >= 35 && WET < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        WET += 35;
        MON -= 25;
        if (WET < 100) {
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        } else if (WET >= 100) {
            WET = 100;
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 35 && WET == 100) {
        alert("Вы не хотите пить");
    } else if (MON < 35 && WET < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить коктейл

// выпить кофе
function cof0() {
    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    if (MON >= 60 && WET < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        WET += 60;
        MON -= 40;
        if (WET < 100) {
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        } else if (WET >= 100) {
            WET = 100;
            var wet = doc.createElement("td");
            wet.innerHTML = WET;
            wet.id = "W"

            var mon = doc.createElement("td");
            mon.innerHTML = MON;
            mon.id = "M"

            WET_id1.parentNode.replaceChild(wet, WET_id1);
            MON_id1.parentNode.replaceChild(mon, MON_id1);

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        }
    } else if (MON >= 60 && WET == 100) {
        alert("Вы не хотите пить");
    } else if (MON < 60 && WET < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить кофе

// напитки

// работы

// работа уборщика
function clea0() {
    // определяем какой у нас уровень
    var lvl = doc.getElementById("LVL").innerHTML;
    LVL = Number.parseInt(lvl);
    //  определяем какой у нас уровень

    // определяем наши очки опыта
    var lvl1 = doc.getElementById("L").innerHTML;
    LVL1 = Number.parseInt(lvl1);
    //  определяем наши очки опыта

    // определяем сколько надо для повышения уровня
    var op = doc.getElementById("OL").innerHTML;
    OP = Number.parseInt(op);
    // определяем сколько надо для повышения уровня

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число

    if (EAT >= 15 && WET >= 20) {        
        // определяем опыт как число
        var lvl = doc.getElementById("L").innerHTML;
        LVL1 = Number.parseInt(lvl);
        // определяем опыт как число
        var lvl1 = doc.getElementById("L");

        LVL1 += 1;

        var L = doc.createElement("i");
        L.innerHTML = LVL1;
        L.id = "L";

        lvl1.parentNode.replaceChild(L, lvl1);

        MON += 40;
        EAT -= 15;
        WET -= 20;

        var MON_id1 = doc.getElementById("M");
        var EAT_id1 = doc.getElementById("E");
        var WET_id1 = doc.getElementById("W");

        var mon = doc.createElement("td");
        mon.innerHTML = MON;
        mon.id = "M"

        var wet = doc.createElement("td");
        wet.innerHTML = WET;
        wet.id = "W"

        var eat = doc.createElement("td");
        eat.innerHTML = EAT;
        eat.id = "E"
      
        MON_id1.parentNode.replaceChild(mon, MON_id1);
        EAT_id1.parentNode.replaceChild(eat, EAT_id1);
        WET_id1.parentNode.replaceChild(wet, WET_id1);

        if (LVL1 >= OP) {
            // обнуляем счетчик нашего уровня
            LVL1 = 0;

            var leavel = doc.getElementById("L");

            var LEAVEL = doc.createElement("i");
            LEAVEL.innerHTML = LVL1;
            LEAVEL.id = "L";
            leavel.parentNode.replaceChild(LEAVEL, leavel);
            // обнуляем счетчик нашего уровня

            // прибавляем 50 к нужному значению опыта
            OP += 50;

            var OPT = doc.getElementById("OL");

            var opt = doc.createElement("i");
            opt.innerHTML = OP;
            opt.id = "OL";
            OPT.parentNode.replaceChild(opt, OPT);
            // прибавляем 50 к нужному значению опыта

            // прибавляем к уровню 1
            var L = doc.getElementById("LVL");

            LVL += 1;

            var l = doc.createElement("b");
            l.innerHTML = LVL;
            l.id = "LVL";
            L.parentNode.replaceChild(l, L);

            // прибавляем к уровню 1
            var audio = new Audio();
            audio.src = "Аудио/levelup.mp3";
            audio.autoplay = true;
        } else { }

    } else if (EAT < 15 && WET > 20) {
        alert("Вам нужно перекусить");
    } else if (WET < 20 && EAT > 15) {
        alert("Вам нужно попить");
    } else if (WET < 20 && EAT < 15) {
        alert("Вам нужно попить и поесть");
    }
}
// работа уборщика

// работа промоутера
function prom0() {
    // определяем какой у нас уровень
    var lvl = doc.getElementById("LVL").innerHTML;
    LVL = Number.parseInt(lvl);
    //  определяем какой у нас уровень

    // определяем наши очки опыта
    var lvl1 = doc.getElementById("L").innerHTML;
    LVL1 = Number.parseInt(lvl1);
    //  определяем наши очки опыта

    // определяем сколько надо для повышения уровня
    var op = doc.getElementById("OL").innerHTML;
    OP = Number.parseInt(op);
    // определяем сколько надо для повышения уровня

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число

    if (LVL >= 2) { 
        if (EAT >= 17 && WET >= 22) {           
            // определяем опыт как число
            var lvl = doc.getElementById("L").innerHTML;
            LVL1 = Number.parseInt(lvl);
            // определяем опыт как число
            var lvl1 = doc.getElementById("L");

            LVL1 += 2;

            var L = doc.createElement("i");
            L.innerHTML = LVL1;
            L.id = "L";

            lvl1.parentNode.replaceChild(L, lvl1);

        MON += 50;
        EAT -= 17;
        WET -= 22;

        var MON_id1 = doc.getElementById("M");
        var EAT_id1 = doc.getElementById("E");
        var WET_id1 = doc.getElementById("W");

        var mon = doc.createElement("td");
        mon.innerHTML = MON;
        mon.id = "M"

        var wet = doc.createElement("td");
        wet.innerHTML = WET;
        wet.id = "W"

        var eat = doc.createElement("td");
        eat.innerHTML = EAT;
        eat.id = "E"

        MON_id1.parentNode.replaceChild(mon, MON_id1);
        EAT_id1.parentNode.replaceChild(eat, EAT_id1);
        WET_id1.parentNode.replaceChild(wet, WET_id1);

        if (LVL1 >= OP) {
            // обнуляем счетчик нашего уровня
            LVL1 = 0;

            var leavel = doc.getElementById("L");

            var LEAVEL = doc.createElement("i");
            LEAVEL.innerHTML = LVL1;
            LEAVEL.id = "L";
            leavel.parentNode.replaceChild(LEAVEL, leavel);
            // обнуляем счетчик нашего уровня

            // прибавляем 50 к нужному значению опыта
            OP += 50;

            var OPT = doc.getElementById("OL");

            var opt = doc.createElement("i");
            opt.innerHTML = OP;
            opt.id = "OL";
            OPT.parentNode.replaceChild(opt, OPT);
            // прибавляем 50 к нужному значению опыта

            // прибавляем к уровню 1
            var L = doc.getElementById("LVL");

            LVL += 1;

            var l = doc.createElement("b");
            l.innerHTML = LVL;
            l.id = "LVL";
            L.parentNode.replaceChild(l, L);
            // прибавляем к уровню 1

            var audio = new Audio();
            audio.src = "Аудио/levelup.mp3";
            audio.autoplay = true;
        } else { }

        } else if (EAT < 17 && WET > 22) {
            alert("Вам нужно перекусить");
        } else if (WET < 22 && EAT > 17) {
            alert("Вам нужно попить");
        } else if (WET < 22 && EAT < 17) {
            alert("Вам нужно попить и поесть");
        }
    } else {
        alert("Для работы требуется 2 уровень");       
    }
}
// работа промоутера

// работа грузчика
function gr0() {
    // определяем какой у нас уровень
    var lvl = doc.getElementById("LVL").innerHTML;
    LVL = Number.parseInt(lvl);
    //  определяем какой у нас уровень

    // определяем наши очки опыта
    var lvl1 = doc.getElementById("L").innerHTML;
    LVL1 = Number.parseInt(lvl1);
    //  определяем наши очки опыта

    // определяем сколько надо для повышения уровня
    var op = doc.getElementById("OL").innerHTML;
    OP = Number.parseInt(op);
    // определяем сколько надо для повышения уровня

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число
    if (LVL >= 3) {      
        if (EAT >= 20 && WET >= 30) {
            // определяем опыт как число
            var lvl = doc.getElementById("L").innerHTML;
            LVL1 = Number.parseInt(lvl);
            // определяем опыт как число
            var lvl1 = doc.getElementById("L");

            LVL1 += 3;

            var L = doc.createElement("i");
            L.innerHTML = LVL1;
            L.id = "L";

            lvl1.parentNode.replaceChild(L, lvl1);

        MON += 100;
        EAT -= 20;
        WET -= 30;

        var MON_id1 = doc.getElementById("M");
        var EAT_id1 = doc.getElementById("E");
        var WET_id1 = doc.getElementById("W");

        var mon = doc.createElement("td");
        mon.innerHTML = MON;
        mon.id = "M"

        var wet = doc.createElement("td");
        wet.innerHTML = WET;
        wet.id = "W"

        var eat = doc.createElement("td");
        eat.innerHTML = EAT;
        eat.id = "E"

        MON_id1.parentNode.replaceChild(mon, MON_id1);
        EAT_id1.parentNode.replaceChild(eat, EAT_id1);
        WET_id1.parentNode.replaceChild(wet, WET_id1);
        if (LVL1 >= OP) {
            // обнуляем счетчик нашего уровня
            LVL1 = 0;

            var leavel = doc.getElementById("L");

            var LEAVEL = doc.createElement("i");
            LEAVEL.innerHTML = LVL1;
            LEAVEL.id = "L";
            leavel.parentNode.replaceChild(LEAVEL, leavel);
            // обнуляем счетчик нашего уровня

            // прибавляем 50 к нужному значению опыта
            OP += 50;

            var OPT = doc.getElementById("OL");

            var opt = doc.createElement("i");
            opt.innerHTML = OP;
            opt.id = "OL";
            OPT.parentNode.replaceChild(opt, OPT);
            // прибавляем 50 к нужному значению опыта

            // прибавляем к уровню 1
            var L = doc.getElementById("LVL");

            LVL += 1;

            var l = doc.createElement("b");
            l.innerHTML = LVL;
            l.id = "LVL";
            L.parentNode.replaceChild(l, L);
            // прибавляем к уровню 1

            var audio = new Audio();
            audio.src = "Аудио/levelup.mp3";
            audio.autoplay = true;
        } else { }

        } else if (EAT < 20 && WET > 30) {
            alert("Вам нужно перекусить");
        } else if (WET < 30 && EAT > 20) {
            alert("Вам нужно попить");
        } else if (WET < 30 && EAT < 20) {
            alert("Вам нужно попить и поесть");
        }
    } else {
        alert("Для работы требуется 3 уровень");
    }
    
}
// работа пгрузчика

// работа официанта
function of0() {
    // определяем какой у нас уровень
    var lvl = doc.getElementById("LVL").innerHTML;
    LVL = Number.parseInt(lvl);
    //  определяем какой у нас уровень

    // определяем наши очки опыта
    var lvl1 = doc.getElementById("L").innerHTML;
    LVL1 = Number.parseInt(lvl1);
    //  определяем наши очки опыта

    // определяем сколько надо для повышения уровня
    var op = doc.getElementById("OL").innerHTML;
    OP = Number.parseInt(op);
    // определяем сколько надо для повышения уровня

    // определяем значение денег как число
    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);
    // определяем значение денег как число

    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число
    if (LVL >= 4) {     
        if (EAT >= 22 && WET >= 32) {        
            // определяем опыт как число
            var lvl = doc.getElementById("L").innerHTML;
            LVL1 = Number.parseInt(lvl);
            // определяем опыт как число
            var lvl1 = doc.getElementById("L");

            LVL1 += 4;

            var L = doc.createElement("i");
            L.innerHTML = LVL1;
            L.id = "L";

            lvl1.parentNode.replaceChild(L, lvl1);

        MON += 130;
        EAT -= 22;
        WET -= 32;

        var MON_id1 = doc.getElementById("M");
        var EAT_id1 = doc.getElementById("E");
        var WET_id1 = doc.getElementById("W");

        var mon = doc.createElement("td");
        mon.innerHTML = MON;
        mon.id = "M"

        var wet = doc.createElement("td");
        wet.innerHTML = WET;
        wet.id = "W"

        var eat = doc.createElement("td");
        eat.innerHTML = EAT;
        eat.id = "E"

        MON_id1.parentNode.replaceChild(mon, MON_id1);
        EAT_id1.parentNode.replaceChild(eat, EAT_id1);
        WET_id1.parentNode.replaceChild(wet, WET_id1);

        if (LVL1 >= OP) {
            // обнуляем счетчик нашего уровня
            LVL1 = 0;

            var leavel = doc.getElementById("L");

            var LEAVEL = doc.createElement("i");
            LEAVEL.innerHTML = LVL1;
            LEAVEL.id = "L";
            leavel.parentNode.replaceChild(LEAVEL, leavel);
            // обнуляем счетчик нашего уровня

            // прибавляем 50 к нужному значению опыта
            OP += 50;

            var OPT = doc.getElementById("OL");

            var opt = doc.createElement("i");
            opt.innerHTML = OP;
            opt.id = "OL";
            OPT.parentNode.replaceChild(opt, OPT);
            // прибавляем 50 к нужному значению опыта

            // прибавляем к уровню 1
            var L = doc.getElementById("LVL");

            LVL += 1;

            var l = doc.createElement("b");
            l.innerHTML = LVL;
            l.id = "LVL";
            L.parentNode.replaceChild(l, L);
            // прибавляем к уровню 1

            var audio = new Audio();
            audio.src = "Аудио/levelup.mp3";
            audio.autoplay = true;
        } else { }

        } else if (EAT < 22 && WET > 32) {
            alert("Вам нужно перекусить");
        } else if (WET < 32 && EAT > 22) {
            alert("Вам нужно попить");
        } else if (WET < 32 && EAT < 22) {
            alert("Вам нужно попить и поесть");
        }
    } else {
        alert("Для работы требуется 4 уровень");
    }
    
}
// работа официанта

// работы

// информация по работам
function cleainfo() {
    alert("За данный тип подработки вы получите 1 XP, а так же потратите 15 сытости и 20 жажды, для работы не требуется уровень");
}

function prominfo0() {
    alert("За данный тип подработки вы получите 2 XP, а так же потратите 17 сытости и 22 жажды, для работы требуется 2 уровень");
}

function grinfo() {
    alert("За данный тип подработки вы получите 3 XP, а так же потратите 20 сытости и 30 жажды, для работы требуется 3 уровень");
}

function ofinfo() {
    alert("За данный тип подработки вы получите 4 XP, а так же потратите 22 сытости и 32 жажды, для работы требуется 4 уровень");
}
// информация по работам