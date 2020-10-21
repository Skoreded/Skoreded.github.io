window.onload = function () {
    alert("Новые изменения: \n 1. Добавлена кнопка настройки, в которой вы теперь можете \n сохранять свой прогресс, а так же загружать его. \n 2. Теперь при выходе из разделов магазина, вы попадете в \n магазин, а не в начало игры. \n 3. Был доработан и оптимизирован код. \n 4. Кнопка 'Работа' стала активной и теперь доступен 1 вид работы \n (beta 1.0). \n 5. Добавлена концетрация, которая траться на Работах. \n 6. Добавлена кнопка отдыха, в ней восстанавливается \n концентрация");
    alert("Здравствуй, ты запустил/ла мой первый проект, в котором я решил сделать кнопочную игру в жанре 'симулятора жизни/бомжа'. Рекомендуется играть в Microsoft Edge для корректного воспроизведения музыки. А сейчас введи пожалуйста свой игровой ник.");
    var name = prompt("Введи свое игровое имя");
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
    your.id = "name";
    dop.parentNode.appendChild(your);

    /* система бизнеса
    element = 0
    function liveCounter() {
        if (element >= 0 && element < 3) {
            element += 1;
        } else if (element = 3) {
            element = 0;
            var a = document.getElementById("M").innerHTML;
            var v = document.getElementById("M");
            var b = Number.parseInt(a);
            c = b + 1;
            v.innerHTML = c;
        }
        setTimeout(liveCounter, 1000);
    }
    liveCounter();
    */
}

var doc = document; // кеширование document

// интерфейсы 

// интерфейс настроек
function sesting0() {
    var marcet = doc.getElementById("marcet");
    doc.body.removeChild(marcet);

    var work = doc.getElementById("work");
    doc.body.removeChild(work);

    var workgl = doc.getElementById("workgl");
    doc.body.removeChild(workgl);

    var sesting = doc.getElementById("sesting");
    doc.body.removeChild(sesting);

    var rest = doc.getElementById("rest");
    doc.body.removeChild(rest);

    var save = doc.createElement("input");
    save.type = "button"
    save.value = "Сохранить";
    save.id = "Save";
    doc.body.appendChild(save);

    var savebut = doc.getElementById("Save");
    savebut.onclick = save0;

    var load = doc.createElement("input");
    load.type = "button"
    load.value = "Загрузить";
    load.id = "Load";
    doc.body.appendChild(load);

    var loadbut = doc.getElementById("Load");
    loadbut.onclick = load0;

    var back = doc.createElement("input");
    back.type = "button"
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var backbut = doc.getElementById("back");
    backbut.onclick = back0;
}
// интерфейс настроек

// интерфейс магазина
function marcet0() {
    var WORK = doc.getElementById("workgl");
    doc.body.removeChild(WORK);

    var sesting = doc.getElementById("sesting");
    doc.body.removeChild(sesting);

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

    var rest = doc.getElementById("rest");
    doc.body.removeChild(rest);

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

    var sesting = doc.getElementById("sesting");
    doc.body.removeChild(sesting);

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

    var rest = doc.getElementById("rest");
    doc.body.removeChild(rest);

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
    var EWM = doc.getElementById("td1");

    var marcet = doc.getElementById("marcet");
    doc.body.removeChild(marcet);

    var work = doc.getElementById("work");
    doc.body.removeChild(work);

    var workgl = doc.getElementById("workgl");
    doc.body.removeChild(workgl);

    var sesting = doc.getElementById("sesting");
    doc.body.removeChild(sesting);

    var rest = doc.getElementById("rest");
    doc.body.removeChild(rest);

    // стройка
    var STR = doc.createElement("tr");
    STR.id = "STR";
    EWM.parentNode.insertBefore(STR, EWM);

    var tdSTR = doc.createElement("td");
    tdSTR.id = "tdSTR";
    STR.appendChild(tdSTR);

    var tdSTR1 = doc.getElementById("tdSTR");

    var str = doc.createElement("img");
    str.src = "Фото/STR.png";
    tdSTR1.appendChild(str);

    var WET1 = doc.createElement("td");
    WET1.innerHTML = "СТРОЙКА";
    STR.appendChild(WET1);

    var BUTSRT = doc.createElement("input");
    BUTSRT.type = "button";
    BUTSRT.value = "Посмотреть информацию";
    BUTSRT.id = "BUTSRT";
    STR.appendChild(BUTSRT);

    var butsrt = doc.getElementById("BUTSRT");
    butsrt.onclick = str0;

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);
    // стройка

    var butback = doc.getElementById("back");
    butback.onclick = backmenuworkgl;
}
// интерфейс главных работ

// интерфейс стройки
function str0() {
    var BACK = doc.getElementById("back");
    doc.body.removeChild(BACK);

    var STR = doc.getElementById("STR");
    STR.parentNode.removeChild(STR);

    var EWM = doc.getElementById("td1");

    // водитель стройки
    var DRIV = doc.createElement("tr");
    DRIV.id = "DRIV";
    EWM.parentNode.insertBefore(DRIV, EWM);

    var tdDRIV = doc.createElement("td");
    tdDRIV.id = "tdDRIV";
    DRIV.appendChild(tdDRIV);

    var tddriv1 = doc.getElementById("tdDRIV");

    var drivtr = doc.createElement("img");
    drivtr.src = "Фото/DRIV.png";
    tddriv1.appendChild(drivtr);

    var WET1 = doc.createElement("td");
    WET1.innerHTML = "ВОДИТЕЛЬ + 150 $";
    DRIV.appendChild(WET1);

    var BUTDRIV1 = doc.createElement("input");
    BUTDRIV1.type = "button";
    BUTDRIV1.value = "Инфо";
    BUTDRIV1.id = "BUTDRIVEINFO";
    DRIV.appendChild(BUTDRIV1);

    var BUTDRIV11 = doc.getElementById("BUTDRIVEINFO");
    BUTDRIV11.onclick = driveinfo0;

    var BUTDRIV = doc.createElement("input");
    BUTDRIV.type = "button";
    BUTDRIV.value = "Работать";
    BUTDRIV.id = "BUTDRIV";
    DRIV.appendChild(BUTDRIV);

    var DRIV1 = doc.getElementById("BUTDRIV");
    DRIV1.onclick = drivedtr0;
    // водитель стройки

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backSRT0;
}
// интерфейс стройки

// интерфейс отдыха
function rest0() {
    var marcet = doc.getElementById("marcet");
    doc.body.removeChild(marcet);

    var work = doc.getElementById("work");
    doc.body.removeChild(work);

    var workgl = doc.getElementById("workgl");
    doc.body.removeChild(workgl);

    var sesting = doc.getElementById("sesting");
    doc.body.removeChild(sesting);

    var rest = doc.getElementById("rest");
    doc.body.removeChild(rest);

    var EWM = doc.getElementById("td1");

    var park = doc.createElement("tr");
    park.id = "park";
    EWM.parentNode.insertBefore(park, EWM);

    var tdpark = doc.createElement("td");
    tdpark.id = "tdpark";
    park.appendChild(tdpark);

    var tdpark1 = doc.getElementById("tdpark");

    var tdPACK = doc.createElement("img");
    tdPACK.src = "Фото/PARK.png";
    tdpark1.appendChild(tdPACK);

    var PACK1 = doc.createElement("td");
    PACK1.innerHTML = "Парк - 10 $";
    park.appendChild(PACK1);

    var BUTPACK = doc.createElement("input");
    BUTPACK.type = "button"
    BUTPACK.value = "Погулять в парке";
    BUTPACK.id = "PACK";
    park.appendChild(BUTPACK);
    var PACK = doc.getElementById("PACK");
    PACK.onclick = PACK0;

    var PACK12 = doc.createElement("td");
    PACK12.innerHTML = "+ 10 Концентрации";
    park.appendChild(PACK12);

    // кнопка назад
    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenurest0;
    // кнопка назад
}
// интерфейс отдыха

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

    // кнопка отдыха
    var rest = doc.createElement("input");
    rest.type = "button"
    rest.value = "Отдых";
    rest.id = "rest";
    doc.body.appendChild(rest);
    var restbut = doc.getElementById("rest");
    restbut.onclick = rest0;
    // кнопка отдыха

    // кнопка настроек
    var sesting = doc.createElement("input");
    sesting.type = "button"
    sesting.value = "Настройки";
    sesting.id = "sesting";
    doc.body.appendChild(sesting);
    var sestingbut = doc.getElementById("sesting");
    sestingbut.onclick = sesting0;
    // кнопка настроек
}
// функция назад в меню из магазина

// функция в магазин из еды
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

    var EWM = doc.getElementById("td1");

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

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var backbut = doc.getElementById("back");
    backbut.onclick = backmenumagaz;
}
// функция в магазин из еды

// функция в магазин напитков
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

    var EWM = doc.getElementById("td1");

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

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var backbut = doc.getElementById("back");
    backbut.onclick = backmenumagaz;
}
// функция в магазин напитков

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

    // кнопка отдыха
    var rest = doc.createElement("input");
    rest.type = "button"
    rest.value = "Отдых";
    rest.id = "rest";
    doc.body.appendChild(rest);
    var restbut = doc.getElementById("rest");
    restbut.onclick = rest0;
    // кнопка отдыха

    // кнопка настроек
    var sesting = doc.createElement("input");
    sesting.type = "button"
    sesting.value = "Настройки";
    sesting.id = "sesting";
    doc.body.appendChild(sesting);
    var sestingbut = doc.getElementById("sesting");
    sestingbut.onclick = sesting0;
    // кнопка настроек
}
// функция назад в меню с работы

// функция выхода в меню с главных работ
function backmenuworkgl() {
    var STR = doc.getElementById("STR");
    STR.parentNode.removeChild(STR);

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

    // кнопка отдыха
    var rest = doc.createElement("input");
    rest.type = "button"
    rest.value = "Отдых";
    rest.id = "rest";
    doc.body.appendChild(rest);
    var restbut = doc.getElementById("rest");
    restbut.onclick = rest0;
    // кнопка отдыха

    // кнопка настроек
    var sesting = doc.createElement("input");
    sesting.type = "button"
    sesting.value = "Настройки";
    sesting.id = "sesting";
    doc.body.appendChild(sesting);
    var sestingbut = doc.getElementById("sesting");
    sestingbut.onclick = sesting0;
    // кнопка настроек
}
// функция выхода в меню с главных работ

// выход в меню работ из стройки
function backSRT0() {
    var driv = doc.getElementById("DRIV");
    driv.parentNode.removeChild(driv);

    var BACK = doc.getElementById("back");
    doc.body.removeChild(BACK);    

    var EWM = doc.getElementById("td1");

    var STR = doc.createElement("tr");
    STR.id = "STR";
    EWM.parentNode.insertBefore(STR, EWM);

    var tdSTR = doc.createElement("td");
    tdSTR.id = "tdSTR";
    STR.appendChild(tdSTR);

    var tdSTR1 = doc.getElementById("tdSTR");

    var str = doc.createElement("img");
    str.src = "Фото/STR.png";
    tdSTR1.appendChild(str);

    var WET1 = doc.createElement("td");
    WET1.innerHTML = "СТРОЙКА";
    STR.appendChild(WET1);

    var BUTSRT = doc.createElement("input");
    BUTSRT.type = "button";
    BUTSRT.value = "Посмотреть информацию";
    BUTSRT.id = "BUTSRT";
    STR.appendChild(BUTSRT);

    var butsrt = doc.getElementById("BUTSRT");
    butsrt.onclick = str0;

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenuworkgl;

}
// выход в меню работ из стройки

// выход из настроек
function back0() {
    var Save = doc.getElementById("Save");
    doc.body.removeChild(Save);

    var Load = doc.getElementById("Load");
    doc.body.removeChild(Load);

    var back = doc.getElementById("back");
    doc.body.removeChild(back);

    var magaz = doc.createElement("input");
    magaz.type = "button"
    magaz.value = "Магазин 24/7";
    magaz.id = "marcet";
    doc.body.appendChild(magaz);
    var magazbut = doc.getElementById("marcet");
    magazbut.onclick = marcet0;

    var work = doc.createElement("input");
    work.type = "button"
    work.value = "Подработка";
    work.id = "work";
    doc.body.appendChild(work);
    var backbut = doc.getElementById("work");
    backbut.onclick = work0;

    var workgl = doc.createElement("input");
    workgl.type = "button"
    workgl.value = "Работа";
    workgl.id = "workgl";
    doc.body.appendChild(workgl);
    var workglkbut = doc.getElementById("workgl");
    workglkbut.onclick = work01;

    var rest = doc.createElement("input");
    rest.type = "button"
    rest.value = "Отдых";
    rest.id = "rest";
    doc.body.appendChild(rest);
    var restbut = doc.getElementById("rest");
    restbut.onclick = rest0;

    var sesting = doc.createElement("input");
    sesting.type = "button"
    sesting.value = "Настройки";
    sesting.id = "sesting";
    doc.body.appendChild(sesting);
    var sestingbut = doc.getElementById("sesting");
    sestingbut.onclick = sesting0;    
}
// выход из настроек

// выход в меню с отдыха
function backmenurest0() {
    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    var park = doc.getElementById("park");
    park.parentNode.removeChild(park);
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

    // кнопка отдыха
    var rest = doc.createElement("input");
    rest.type = "button"
    rest.value = "Отдых";
    rest.id = "rest";
    doc.body.appendChild(rest);
    var restbut = doc.getElementById("rest");
    restbut.onclick = rest0;
    // кнопка отдыха

    // кнопка настроек
    var sesting = doc.createElement("input");
    sesting.type = "button"
    sesting.value = "Настройки";
    sesting.id = "sesting";
    doc.body.appendChild(sesting);
    var sestingbut = doc.getElementById("sesting");
    sestingbut.onclick = sesting0;
    // кнопка настроек
}
// выход в меню с отдыха

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
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();
        } else if (EAT >= 100) {
            EAT = 100;
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();

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
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();
        } else if (EAT >= 100) {
            EAT = 100;
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();
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
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();
        } else if (EAT >= 100) {
            EAT = 100;
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();
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
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();
        } else if (EAT >= 100) {
            EAT = 100;
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();
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
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();
        } else if (EAT >= 100) {
            EAT = 100;
            EAT_id1.innerHTML = EAT;
            MON_id1.innerHTML = MON;

            audioeat();
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
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

            audiowet();
        } else if (WET >= 100) {
            WET = 100;
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

            audiowet()
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
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

            audiowet()
        } else if (WET >= 100) {
            WET = 100;
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

            audiowet()
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
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        } else if (WET >= 100) {
            WET = 100;
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

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
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

            audiowet()
        } else if (WET >= 100) {
            WET = 100;
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

            audiowet()
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
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

            audiowet()
        } else if (WET >= 100) {
            WET = 100;
            WET_id1.innerHTML = WET;
            MON_id1.innerHTML = MON;

            audiowet()
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

        lvl1.innerHTML = LVL1;

        MON += 40;
        EAT -= 15;
        WET -= 20;

        var MON_id1 = doc.getElementById("M");
        var EAT_id1 = doc.getElementById("E");
        var WET_id1 = doc.getElementById("W");

        MON_id1.innerHTML = MON;
        EAT_id1.innerHTML = EAT;
        WET_id1.innerHTML = WET;

        if (LVL1 >= OP) {
            // обнуляем счетчик нашего уровня
            LVL1 = 0;

            var leavel = doc.getElementById("L");

            leavel.innerHTML = LVL1;
            // обнуляем счетчик нашего уровня

            // прибавляем 50 к нужному значению опыта
            OP += 50;

            var OPT = doc.getElementById("OL");

            OPT.innerHTML = OP;
            // прибавляем 50 к нужному значению опыта

            // прибавляем к уровню 1
            var L = doc.getElementById("LVL");

            LVL += 1;

            L.innerHTML = LVL;

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

            lvl1.innerHTML = LVL1;

        MON += 50;
        EAT -= 17;
        WET -= 22;

        var MON_id1 = doc.getElementById("M");
        var EAT_id1 = doc.getElementById("E");
        var WET_id1 = doc.getElementById("W");

        MON_id1.innerHTML = MON;
        EAT_id1.innerHTML = EAT;
        WET_id1.innerHTML = WET;

        if (LVL1 >= OP) {
            // обнуляем счетчик нашего уровня
            LVL1 = 0;

            var leavel = doc.getElementById("L");

            leavel.innerHTML = LVL1;
            // обнуляем счетчик нашего уровня

            // прибавляем 50 к нужному значению опыта
            OP += 50;

            var OPT = doc.getElementById("OL");

            OPT.innerHTML = OP;
            // прибавляем 50 к нужному значению опыта

            // прибавляем к уровню 1
            var L = doc.getElementById("LVL");

            LVL += 1;

            L.innerHTML = LVL;

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

            lvl1.innerHTML = LVL1;

        MON += 100;
        EAT -= 20;
        WET -= 30;

        var MON_id1 = doc.getElementById("M");
        var EAT_id1 = doc.getElementById("E");
        var WET_id1 = doc.getElementById("W");

        MON_id1.innerHTML = MON;
        EAT_id1.innerHTML = EAT;
        WET_id1.innerHTML = WET;
        if (LVL1 >= OP) {
            // обнуляем счетчик нашего уровня
            LVL1 = 0;

            var leavel = doc.getElementById("L");

            leavel.innerHTML = LVL1;
            // обнуляем счетчик нашего уровня

            // прибавляем 50 к нужному значению опыта
            OP += 50;

            var OPT = doc.getElementById("OL");

            OPT.innerHTML = OP;
            // прибавляем 50 к нужному значению опыта

            // прибавляем к уровню 1
            var L = doc.getElementById("LVL");

            LVL += 1;

            L.innerHTML = LVL;

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

            lvl1.innerHTML = LVL1;

        MON += 130;
        EAT -= 22;
        WET -= 32;

        var MON_id1 = doc.getElementById("M");
        var EAT_id1 = doc.getElementById("E");
        var WET_id1 = doc.getElementById("W");

        MON_id1.innerHTML = MON;
        EAT_id1.innerHTML = EAT;
        WET_id1.innerHTML = WET;

        if (LVL1 >= OP) {
            // обнуляем счетчик нашего уровня
            LVL1 = 0;

            var leavel = doc.getElementById("L");

            leavel.innerHTML = LVL1;
            // обнуляем счетчик нашего уровня

            // прибавляем 50 к нужному значению опыта
            OP += 50;

            var OPT = doc.getElementById("OL");

            OPT.innerHTML = OP;
            // прибавляем 50 к нужному значению опыта

            // прибавляем к уровню 1
            var L = doc.getElementById("LVL");

            LVL += 1;

            L.innerHTML = LVL;

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

//работа водителя на стройке
function drivedtr0() {
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

    // определяем значение концентрации как число
    var CONc_id = doc.getElementById("C").innerHTML;
    CONc = Number.parseInt(CONc_id);
    // определяем значение концентрации как число

    // определяем значение жажды как число
    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);
    // определяем значение жажды как число

    // определяем значение сытости как число
    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);
    // определяем значение сытости как число
    if (LVL >= 5) {
        if (EAT >= 40 && WET >= 40 && CONc >= 20) {
            // определяем опыт как число
            var lvl = doc.getElementById("L").innerHTML;
            LVL1 = Number.parseInt(lvl);
            // определяем опыт как число
            var lvl1 = doc.getElementById("L");

            LVL1 += 6;

            lvl1.innerHTML = LVL1;

            MON += 150;
            EAT -= 40;
            WET -= 40;
            CONc -= 20;

            var MON_id1 = doc.getElementById("M");
            var EAT_id1 = doc.getElementById("E");
            var WET_id1 = doc.getElementById("W");
            var CONc_id1 = doc.getElementById("C");

            MON_id1.innerHTML = MON;
            EAT_id1.innerHTML = EAT;
            WET_id1.innerHTML = WET;
            CONc_id1.innerHTML = CONc;

            if (LVL1 >= OP) {
                // обнуляем счетчик нашего уровня
                LVL1 = 0;

                var leavel = doc.getElementById("L");

                leavel.innerHTML = LVL1;
                // обнуляем счетчик нашего уровня

                // прибавляем 50 к нужному значению опыта
                OP += 50;

                var OPT = doc.getElementById("OL");

                OPT.innerHTML = OP;
                // прибавляем 50 к нужному значению опыта

                // прибавляем к уровню 1
                var L = doc.getElementById("LVL");

                LVL += 1;

                L.innerHTML = LVL;

                // прибавляем к уровню 1

                var audio = new Audio();
                audio.src = "Аудио/levelup.mp3";
                audio.autoplay = true;
            } else { }

        } else if (WET > 40 && EAT > 40 && CONc < 40) {
            alert("Вам нужно отдохнуть");
        } else if (EAT < 40 && WET > 40 && CONc > 40) {
            alert("Вам нужно перекусить");
        } else if (WET < 40 && EAT > 40 && CONc > 40) {
            alert("Вам нужно попить");
        } else if (WET < 40 && EAT < 40 && CONc > 40) {
            alert("Вам нужно попить и поесть");
        } else if (WET < 40 && EAT > 40 && CONc < 40) {
            alert("Вам нужно попить и отдохнуть");
        } else if (WET > 40 && EAT < 40 && CONc < 40) {
            alert("Вам нужно отдохнуть и поесть");
        } else if (WET < 40 && EAT < 40 && CONc < 40) {
            alert("Вам нужно попить, поесть и отдохнуть");
        }
    } else {
        alert("Для работы требуется 5 уровень");
    }
}
//работа водителя на стройке

// работы

// отдых
function PACK0() {
    var conc_id = doc.getElementById("C").innerHTML;
    var conc = Number.parseInt(conc_id);

    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);

    if (MON >= 10 && conc < 100) {
        var conc_id1 = doc.getElementById("C");
        var MON_id1 = doc.getElementById("M");

        conc += 50;
        MON -= 10;
        if (conc < 100) {
            conc_id1.innerHTML = conc;
            MON_id1.innerHTML = MON;
        } else if (conc >= 100) {
            conc = 100;
            conc_id1.innerHTML = conc;
            MON_id1.innerHTML = MON;
        }
    } else if (MON >= 10 && conc == 100) {
        alert("Вы бодры");
    } else if (MON < 10 && conc < 100) {
        alert("У вас недостаточно денег");
    }
}
// отдых

// информация по работам
function cleainfo() {
    alert("За данный тип подработки вы получите 1 XP, а так же потратите 15 сытости, 20 жажды и 0 концентрации, для работы не требуется уровень");
}

function prominfo0() {
    alert("За данный тип подработки вы получите 2 XP, а так же потратите 17 сытости, 22 жажды и 0 концентрации, для работы требуется 2 уровень");
}

function grinfo() {
    alert("За данный тип подработки вы получите 3 XP, а так же потратите 20 сытости, 30 жажды и 0 концентрации, для работы требуется 3 уровень");
}

function ofinfo() {
    alert("За данный тип подработки вы получите 4 XP, а так же потратите 22 сытости 32 жажды и 0 концентрации, для работы требуется 4 уровень");
}

function driveinfo0() {
    alert("За данный тип подработки вы получите 6 XP, а так же потратите 40 сытости, 40 жажды и 20 концентрации, для работы требуется 5 уровень");
}
// информация по работам

function audioeat() {
    var audio = new Audio();
    audio.src = "Аудио/eat.mp3";
    audio.volume = 0.3;
    audio.autoplay = true;
}

function audiowet() {
    var audio = new Audio();
    audio.src = "Аудио/drink.mp3";
    audio.volume = 0.3;
    audio.autoplay = true;
}

function save0() {
    var name = doc.getElementById("name").innerHTML;
    var namenum = Number.parseInt(name);
    localStorage.setItem("Savename", name);

    var conc = doc.getElementById("C").innerHTML;
    var concnum = Number.parseInt(conc);
    localStorage.setItem("Saveconc", conc);

    var eat = doc.getElementById("E").innerHTML;
    var eatnum = Number.parseInt(eat);
    localStorage.setItem("Saveeat", eat);

    var wet = doc.getElementById("W").innerHTML;
    var wetnum = Number.parseInt(wet);
    localStorage.setItem("Savewet", wet);

    var mon = doc.getElementById("M").innerHTML;
    var monnum = Number.parseInt(mon);
    localStorage.setItem("Savemon", mon);

    var LVL = doc.getElementById("LVL").innerHTML;
    var LVLnum = Number.parseInt(LVL);
    localStorage.setItem("SaveLVL" ,LVL);

    var L = doc.getElementById("L").innerHTML;
    var Lnum = Number.parseInt(L);
    localStorage.setItem("SaveL", L);

    var OL = doc.getElementById("OL").innerHTML;
    var OLnum = Number.parseInt(OL);
    localStorage.setItem("SaveOL", OL);
}

function load0() {
    var name = doc.getElementById("name").innerHTML;
    var namenum = Number.parseInt(name);
    var namenonum = doc.getElementById("name");
    namenum = localStorage.getItem("Savename");
    namenonum.innerHTML = namenum
    
    var conc = doc.getElementById("C").innerHTML;
    var concnum = Number.parseInt(conc);
    var concnonum = doc.getElementById("C");
    concnum = localStorage.getItem("Saveconc");
    concnonum.innerHTML = concnum;

    var eat = doc.getElementById("E").innerHTML;
    var eatnum = Number.parseInt(eat);
    var eatnonum = doc.getElementById("E");
    eatnum = localStorage.getItem("Saveeat");
    eatnonum.innerHTML = eatnum;

    var wet = doc.getElementById("W").innerHTML;
    var wetnum = Number.parseInt(wet);
    var wetnonum = doc.getElementById("W");
    wetnum = localStorage.getItem("Savewet");
    wetnonum.innerHTML = wetnum;

    var mon = doc.getElementById("M").innerHTML;
    var monnum = Number.parseInt(mon);
    var monnonum = doc.getElementById("M");
    monnum = localStorage.getItem("Savemon");
    monnonum.innerHTML = monnum;

    var LVL = doc.getElementById("LVL").innerHTML;
    var LVLnum = Number.parseInt(LVL);
    var LVLnonum = doc.getElementById("LVL");
    LVLnum = localStorage.getItem("SaveLVL");
    LVLnonum.innerHTML = LVLnum;

    var L = doc.getElementById("L").innerHTML;
    var Lnum = Number.parseInt(L);
    var Lnonum = doc.getElementById("L");
    Lnum = localStorage.getItem("SaveL");
    Lnonum.innerHTML = Lnum;

    var OL = doc.getElementById("OL").innerHTML;
    var OLnum = Number.parseInt(OL);
    var OLnonum = doc.getElementById("OL");
    OLnum = localStorage.getItem("SaveOL");
    OLnonum.innerHTML = OLnum;
}