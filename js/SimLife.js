window.onload = function () {
    alert("Новые изменения: \n 1. Изменен дизайн. \n 2. Добавлен начальный экран. \n 3. Кнопка загрузки перенесена из игры в начальное меню. \n 4. Добавлено обучение. \n 5. Теперь отображается версия игры. \n 6. Добавлен фон. \n 7. Улучшен и изменен код игры. \n По всем идеям и предложениям писать yarygin.02@mail.ru");
    alert("Здравствуй, ты запустил/ла мой первый проект, в котором я решил сделать кнопочную игру в жанре 'симулятора жизни/бомжа'. Рекомендуется играть в Microsoft Edge для корректного воспроизведения музыки. А сейчас введи пожалуйста свой игровой ник.");  
    var name = prompt("Введи свое игровое имя");
    namenum = name;
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
    */ // система бизнеса
}

var doc = document; // кеширование document

var numlvl = 1; // надо 1
var numl = 0; // надо 0 
var numop = 100;
var numc = 100; // надо 100
var nume = 100; // надо 100
var numw = 100; // надо 100
var numm = 100; // надо 100
var nrnum = 0;  // надо 0
var onnum = 0;
var nnum = 100;
var mest = "Не имеется";
var car = "Не имеется";
var namenum = "Без имени";

// интерфейсы 
function games() {  
    var menu = doc.getElementById("menu");
    doc.body.removeChild(menu);

    // уровень
    var shkalLVL = doc.getElementById("shkalLVL");
    var shkalLVLcreate = doc.createElement("td");
    shkalLVLcreate.id = "UP";
    var shkalLVLcreateb1 = doc.createElement("b");
    shkalLVLcreateb1.innerHTML = "Уровень ";
    var shkalLVLcreate1 = doc.createElement("b");
    shkalLVLcreate1.innerHTML = numlvl;
    shkalLVLcreate1.id = "LVL";
    var shkalLVLcreatedv = doc.createElement("b");
    shkalLVLcreatedv.innerHTML = ":";
    shkalLVL.appendChild(shkalLVLcreate);
    shkalLVLcreate.appendChild(shkalLVLcreateb1);
    shkalLVLcreate.appendChild(shkalLVLcreate1);
    shkalLVLcreate.appendChild(shkalLVLcreatedv);
    var shkalLVL2 = doc.getElementById("shkalLVL");
    var shkalLVLcreate2 = doc.createElement("td");
    shkalLVLcreate2.id = "lvl";
    var shkalLVLcreateb2 = doc.createElement("i");
    shkalLVLcreateb2.id = "L";
    shkalLVLcreateb2.innerHTML = numl;
    var shkalLVLcreatepa = doc.createElement("i");
    shkalLVLcreatepa.innerHTML = "/";
    var shkalLVLcreate12 = doc.createElement("i");
    shkalLVLcreate12.innerHTML = numop;
    shkalLVLcreate12.id = "OL";
    var shkalLVLcreatexp = doc.createElement("i");
    shkalLVLcreatexp.innerHTML = " XP";
    shkalLVL2.appendChild(shkalLVLcreate2);
    shkalLVLcreate2.appendChild(shkalLVLcreateb2);
    shkalLVLcreate2.appendChild(shkalLVLcreatepa);
    shkalLVLcreate2.appendChild(shkalLVLcreate12);
    shkalLVLcreate2.appendChild(shkalLVLcreatexp);
    // уровень

    // показатели
    var table = doc.createElement("table");
    table.classList = "tableEWM";
    doc.body.appendChild(table);
    var tr1 = doc.createElement("tr");
    tr1.id = "tr1";
    var tr2 = doc.createElement("tr");
    tr2.id = "tr2";
    var tr3 = doc.createElement("tr");
    tr3.id = "tr3";
    var tr4 = doc.createElement("tr");
    tr4.id = "tr4";
    table.appendChild(tr1);
    var tdkc1 = doc.createElement("td");
    tr1.appendChild(tdkc1);
    var tdkc1img = doc.createElement("img");
    tdkc1img.align = "right";
    tdkc1img.src = "Photo/CONc.png";
    tdkc1.appendChild(tdkc1img);
    var tdkc2 = doc.createElement("td");
    tdkc2.innerHTML = "Концентрация:";
    tr1.appendChild(tdkc2);
    var tdkc3 = doc.createElement("td");
    tdkc3.innerHTML = numc;
    tdkc3.id = "C";
    tr1.appendChild(tdkc3);
    table.appendChild(tr2);
    var tded1 = doc.createElement("td");
    tr2.appendChild(tded1);
    var tded1img = doc.createElement("img");
    tded1img.align = "right";
    tded1img.src = "Photo/EAT.png";
    tded1.appendChild(tded1img);
    var tded2 = doc.createElement("td");
    tded2.innerHTML = "Сытость:";
    tr2.appendChild(tded2);
    var tded3 = doc.createElement("td");
    tded3.innerHTML = nume;
    tded3.id = "E";
    tr2.appendChild(tded3);
    table.appendChild(tr3);
    var tdw1 = doc.createElement("td");
    tr3.appendChild(tdw1);
    var tdw1img = doc.createElement("img");
    tdw1img.src = "Photo/WET.png";
    tdw1.appendChild(tdw1img);
    var tdw2 = doc.createElement("td");
    tdw2.innerHTML = "Жажда:";
    tr3.appendChild(tdw2);
    var tdw3 = doc.createElement("td");
    tdw3.innerHTML = numw;
    tdw3.id = "W";
    tr3.appendChild(tdw3);
    table.appendChild(tr4);
    var tdm1 = doc.createElement("td");
    tr4.appendChild(tdm1);
    var tdm1img = doc.createElement("img");
    tdm1img.align = "right";
    tdm1img.src = "Photo/MON.png";
    tdm1.appendChild(tdm1img);
    var tdm2 = doc.createElement("td");
    tdm2.innerHTML = "Деньги:";
    tr4.appendChild(tdm2);
    var tdm3 = doc.createElement("td");
    tdm3.innerHTML = numm;
    tdm3.id = "M";
    tr4.appendChild(tdm3);
    var tdm4 = doc.createElement("td");
    tdm4.innerHTML = "$";
    tr4.appendChild(tdm4);
    // показатели

    // кнопки
    var marcet = doc.createElement("input");
    marcet.type = "button"
    marcet.value = "Магазины";
    marcet.id = "marcet";
    doc.body.appendChild(marcet);
    var marcetonclick = doc.getElementById("marcet");
    marcetonclick.onclick = marcet0;   
    var deyt = doc.createElement("input");
    deyt.type = "button"
    deyt.value = "Вид деятельности";
    deyt.id = "deyt";
    doc.body.appendChild(deyt);
    var deytonclick = doc.getElementById("deyt");
    deytonclick.onclick = deyt0;
    var stat = doc.createElement("input");
    stat.type = "button"
    stat.value = "Статистика";
    stat.id = "stat";
    doc.body.appendChild(stat);
    var statonclick = doc.getElementById("stat");
    statonclick.onclick = stat0;
    var sesting = doc.createElement("input");
    sesting.type = "button"
    sesting.value = "Настройки";
    sesting.id = "sesting";
    doc.body.appendChild(sesting);
    var sestingonclick = doc.getElementById("sesting");
    sestingonclick.onclick = sesting0;
    // кнопки
    var dop = document.getElementById("lvl");
    var your = document.createElement("td");
    your.innerHTML = namenum;
    your.id = "name";
    dop.parentNode.appendChild(your);
}
// интерфейс вида деятельности
function deyt0() {
    var stat = doc.getElementById("stat");
    doc.body.removeChild(stat);

    var marcet = doc.getElementById("marcet");
    doc.body.removeChild(marcet);

    var deyt = doc.getElementById("deyt");
    doc.body.removeChild(deyt);

    var sesting = doc.getElementById("sesting");
    doc.body.removeChild(sesting);

    var EWM = doc.getElementById("td1");

    // подработка
    var work = doc.createElement("tr");
    work.id = "work";
    EWM.parentNode.insertBefore(work, EWM);

    var tdeat = doc.createElement("td");
    tdeat.id = "tdeat";
    work.appendChild(tdeat);

    var tdeat1 = doc.getElementById("tdeat");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/PWORK.png";
    tdeat1.appendChild(tdEAT);

    var EAT1 = doc.createElement("td");
    EAT1.innerHTML = "Подработка";
    work.appendChild(EAT1);

    var BUTEAT = doc.createElement("input");
    BUTEAT.type = "button"
    BUTEAT.value = "Посмотреты список";
    BUTEAT.id = "marcetEAT";
    work.appendChild(BUTEAT);

    var marcetEAT = doc.getElementById("marcetEAT");
    marcetEAT.onclick = work0;
    // подработка

    // работа
    var workgl = doc.createElement("tr");
    workgl.id = "workgl";
    EWM.parentNode.insertBefore(workgl, EWM);

    var tdworkgl = doc.createElement("td");
    tdworkgl.id = "tdworkgl";
    workgl.appendChild(tdworkgl);

    var tdworkgl1 = doc.getElementById("tdworkgl");

    var tdworkgl = doc.createElement("img");
    tdworkgl.src = "Фото/WORK.png";
    tdworkgl1.appendChild(tdworkgl);

    var workgl1 = doc.createElement("td");
    workgl1.innerHTML = "Работа";
    workgl.appendChild(workgl1);

    var BUTworkgl = doc.createElement("input");
    BUTworkgl.type = "button"
    BUTworkgl.value = "Посмотреты список";
    BUTworkgl.id = "BUTworkgl";
    workgl.appendChild(BUTworkgl);

    var marcetworkgl = doc.getElementById("BUTworkgl");
    marcetworkgl.onclick = work01;
    // работа

    // отдых
    var workgl1 = doc.createElement("tr");
    workgl1.id = "rest";
    EWM.parentNode.insertBefore(workgl1, EWM);

    var tdworkgl1 = doc.createElement("td");
    tdworkgl1.id = "tdworkgl1";
    workgl1.appendChild(tdworkgl1);

    var tdworkgl11 = doc.getElementById("tdworkgl1");

    var tdworkgl1 = doc.createElement("img");
    tdworkgl1.src = "Фото/REST.png";
    tdworkgl11.appendChild(tdworkgl1);

    var workgl11 = doc.createElement("td");
    workgl11.innerHTML = "Отдых";
    workgl1.appendChild(workgl11);

    var BUTworkgl1 = doc.createElement("input");
    BUTworkgl1.type = "button"
    BUTworkgl1.value = "Посмотреты список";
    BUTworkgl1.id = "BUTworkgl1";
    workgl1.appendChild(BUTworkgl1);

    var marcetworkgl1 = doc.getElementById("BUTworkgl1");
    marcetworkgl1.onclick = rest0;
    // отдых

    var back = doc.createElement("input");
    back.type = "button"
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);
    var backbut = doc.getElementById("back");
    backbut.onclick = backdeyt;
}
// интерфейс вида деятельности

// интерфейс настроек
function sesting0() {
    var stat = doc.getElementById("stat");
    doc.body.removeChild(stat);

    var EWM = doc.getElementById("td1");

    var marcet = doc.getElementById("marcet");
    doc.body.removeChild(marcet);

    var deyt = doc.getElementById("deyt");
    doc.body.removeChild(deyt);

    var sesting = doc.getElementById("sesting");
    doc.body.removeChild(sesting);

    // сохранить
    var save = doc.createElement("tr");
    save.id = "save";
    EWM.parentNode.insertBefore(save, EWM);

    var tdsave = doc.createElement("td");
    tdsave.id = "tdsave";
    save.appendChild(tdsave);

    var tdsave1 = doc.getElementById("tdsave");

    var tdSAVE = doc.createElement("img");
    tdSAVE.src = "Фото/SAVE.png";
    tdsave1.appendChild(tdSAVE);;

    var BUTSAVE = doc.createElement("input");
    BUTSAVE.type = "button"
    BUTSAVE.value = "Сохранить";
    BUTSAVE.id = "BUTSAVE";
    save.appendChild(BUTSAVE);

    var marcetsave = doc.getElementById("BUTSAVE");
    marcetsave.onclick = save0;
    // сохранить

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
    var stat = doc.getElementById("stat");
    doc.body.removeChild(stat);

    var deyt = doc.getElementById("deyt");
    doc.body.removeChild(deyt);

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

    // продукты
    var eat = doc.createElement("tr");
    eat.id = "eat";
    EWM.parentNode.insertBefore(eat, EWM);

    var tdeat = doc.createElement("td");
    tdeat.id = "tdeat";
    eat.appendChild(tdeat);

    var tdeat1 = doc.getElementById("tdeat");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/PROD.png";
    tdeat1.appendChild(tdEAT);

    var EAT1 = doc.createElement("td");
    EAT1.innerHTML = "Продукты";
    eat.appendChild(EAT1);

    var BUTEAT = doc.createElement("input");
    BUTEAT.type = "button"
    BUTEAT.value = "Посмотреть";
    BUTEAT.id = "marcetEAT";
    eat.appendChild(BUTEAT);

    var marcetEAT = doc.getElementById("marcetEAT");
    marcetEAT.onclick = marcet01;
    // продукты

    // Недвижимость
    var home = doc.createElement("tr");
    home.id = "home";
    EWM.parentNode.insertBefore(home, EWM);

    var tdhome = doc.createElement("td");
    tdhome.id = "tdhome";
    home.appendChild(tdhome);

    var tdhome1 = doc.getElementById("tdhome");

    var tdHOME = doc.createElement("img");
    tdHOME.src = "Фото/HOME.png";
    tdhome1.appendChild(tdHOME);

    var HOME1 = doc.createElement("td");
    HOME1.innerHTML = "Недвижимость";
    home.appendChild(HOME1);

    var BUTHOME = doc.createElement("input");
    BUTHOME.type = "button"
    BUTHOME.value = "Посмотреть";
    BUTHOME.id = "marcetHOME";
    home.appendChild(BUTHOME);

    var marcetEHOME = doc.getElementById("marcetHOME");
    marcetHOME.onclick = marhome01;
    // Недвижимость

    // Транспорт
    var car = doc.createElement("tr");
    car.id = "car";
    EWM.parentNode.insertBefore(car, EWM);

    var tdcar = doc.createElement("td");
    tdcar.id = "tdcar";
    car.appendChild(tdcar);

    var tdcar1 = doc.getElementById("tdcar");

    var tdCAR = doc.createElement("img");
    tdCAR.src = "Фото/CAR.png";
    tdcar1.appendChild(tdCAR);

    var CAR1 = doc.createElement("td");
    CAR1.innerHTML = "Транспорт";
    car.appendChild(CAR1);

    var BUTCAR = doc.createElement("input");
    BUTCAR.type = "button"
    BUTCAR.value = "Посмотреть";
    BUTCAR.id = "marcetCAR";
    car.appendChild(BUTCAR);

    var marcetCAR = doc.getElementById("marcetCAR");
    marcetCAR.onclick = marcar01;
    // Транспорт

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

// интерфейс магазина продуктов
function marcet01() {
    var home = doc.getElementById("home");
    home.parentNode.removeChild(home);

    var car = doc.getElementById("car");
    car.parentNode.removeChild(car);

    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);

    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);

    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);

    var EWM = doc.getElementById("td1");

    var bm = doc.getElementById("eat");
    bm.parentNode.removeChild(bm);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

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
    butback.onclick = backmenumagaz0;
    // кнопка назад
}
// интерфейс магазина продуктов

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
    back.value = "Назад";
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
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenuweit;
    // кнопка назад
}
// интерфейс мазагина напитков

// интерфейс подработки
function work0() {
    var work = doc.getElementById("work");
    work.parentNode.removeChild(work);

    var workgl = doc.getElementById("workgl");
    workgl.parentNode.removeChild(workgl);

    var rest = doc.getElementById("rest");
    rest.parentNode.removeChild(rest);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    var EAT_id = doc.getElementById("E").innerHTML;
    EAT = Number.parseInt(EAT_id);

    var WET_id = doc.getElementById("W").innerHTML;
    WET = Number.parseInt(WET_id);

    var MON_id = doc.getElementById("M").innerHTML;
    MON = Number.parseInt(MON_id);

    var EWM = doc.getElementById("td1");

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
// интерфейс подработки

// интерфейс главных работ
function work01() {
    var EWM = doc.getElementById("td1");

    var work = doc.getElementById("work");
    work.parentNode.removeChild(work);

    var workgl = doc.getElementById("workgl");
    workgl.parentNode.removeChild(workgl);

    var rest = doc.getElementById("rest");
    rest.parentNode.removeChild(rest);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

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
    WET1.innerHTML = "ВОДИТЕЛЬ + 250 $";
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

    // строитель
    var STRO = doc.createElement("tr");
    STRO.id = "STRO";
    EWM.parentNode.insertBefore(STRO, EWM);

    var tdSTRO = doc.createElement("td");
    tdSTRO.id = "tdSTRO";
    STRO.appendChild(tdSTRO);

    var tdstro1 = doc.getElementById("tdSTRO");

    var strotr = doc.createElement("img");
    strotr.src = "Фото/STRO.png";
    tdstro1.appendChild(strotr);

    var STRO1 = doc.createElement("td");
    STRO1.innerHTML = "СТРОИТЕЛЬ + 300 $";
    STRO.appendChild(STRO1);

    var BUTSTRO1 = doc.createElement("input");
    BUTSTRO1.type = "button";
    BUTSTRO1.value = "Инфо";
    BUTSTRO1.id = "BUTSTROINFO";
    STRO.appendChild(BUTSTRO1);

    var BUTSTRO11 = doc.getElementById("BUTSTROINFO");
    BUTSTRO11.onclick = stroinfo0;

    var BUTDSTRO = doc.createElement("input");
    BUTDSTRO.type = "button";
    BUTDSTRO.value = "Работать";
    BUTDSTRO.id = "BUTSTRO";
    STRO.appendChild(BUTDSTRO);

    var STRO1 = doc.getElementById("BUTSTRO");
    STRO1.onclick = strodtr0;
    // строитель

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
    var work = doc.getElementById("work");
    work.parentNode.removeChild(work);

    var workgl = doc.getElementById("workgl");
    workgl.parentNode.removeChild(workgl);

    var rest = doc.getElementById("rest");
    rest.parentNode.removeChild(rest);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    var EWM = doc.getElementById("td1");
    //
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
    PACK1.innerHTML = "ПАРК - 10 $";
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
    //

    //
    var kino = doc.createElement("tr");
    kino.id = "kino";

    EWM.parentNode.insertBefore(kino, EWM);

    var tdkino = doc.createElement("td");
    tdkino.id = "tdkino";
    kino.appendChild(tdkino);

    var tdkino1 = doc.getElementById("tdkino");

    var tdKINO = doc.createElement("img");
    tdKINO.src = "Фото/KINO.png";
    tdkino1.appendChild(tdKINO);

    var KINO1 = doc.createElement("td");
    KINO1.innerHTML = "КИНОТЕАТР - 20 $";
    kino.appendChild(KINO1);

    var BUTKINO = doc.createElement("input");
    BUTKINO.type = "button"
    BUTKINO.value = "Сходить в кино";
    BUTKINO.id = "KINO";
    kino.appendChild(BUTKINO);
    var KINO = doc.getElementById("KINO");
    KINO.onclick = KINO0;

    var KINO12 = doc.createElement("td");
    KINO12.innerHTML = "+ 20 Концентрации";
    kino.appendChild(KINO12);
    //

    //
    var game = doc.createElement("tr");
    game.id = "game";
    EWM.parentNode.insertBefore(game, EWM);

    var tdgame = doc.createElement("td");
    tdgame.id = "tdgame";
    game.appendChild(tdgame);

    var tdgame1 = doc.getElementById("tdgame");

    var tdGAME = doc.createElement("img");
    tdGAME.src = "Фото/GAME.png";
    tdgame1.appendChild(tdGAME);

    var GAME1 = doc.createElement("td");
    GAME1.innerHTML = "ИГРОВОЙ КЛУБ - 40 $";
    game.appendChild(GAME1);

    var BUTGAME = doc.createElement("input");
    BUTGAME.type = "button"
    BUTGAME.value = "Поиграть";
    BUTGAME.id = "GAME";
    game.appendChild(BUTGAME);
    var GAME = doc.getElementById("GAME");
    GAME.onclick = GAME0;

    var GAME12 = doc.createElement("td");
    GAME12.innerHTML = "+ 40 Концентрации";
    game.appendChild(GAME12);
    //

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

// интерфейс статистики
function stat0() {
    var stat = doc.getElementById("stat");
    doc.body.removeChild(stat);

    var EWM = doc.getElementById("td1");

    var marcet = doc.getElementById("marcet");
    doc.body.removeChild(marcet);

    var deyt = doc.getElementById("deyt");
    doc.body.removeChild(deyt);

    var sesting = doc.getElementById("sesting");
    doc.body.removeChild(sesting);

    //
    var trstat = doc.createElement("tr");
    trstat.id = "trstat";
    EWM.parentNode.insertBefore(trstat, EWM);

    var trstatid = doc.getElementById("trstat");

    var tdkinophoto = doc.createElement("img");
    tdkinophoto.src = "Фото/WORK.png";
    trstatid.appendChild(tdkinophoto);

    var tdstat = doc.createElement("td");
    tdstat.innerHTML = "Навык работы:";
    trstatid.appendChild(tdstat);

    var tdstat = doc.createElement("td");
    tdstat.id = "tdstat";
    trstatid.appendChild(tdstat);

    var tdstatid = doc.getElementById("tdstat");

    var nr = doc.createElement("i");
    nr.innerHTML = nrnum + " ";
    nr.id = "nr";
    tdstatid.appendChild(nr);

    var on = doc.createElement("i");
    on.innerHTML = onnum;
    on.id = "on";
    tdstatid.appendChild(on);

    var ns = doc.createElement("i");
    ns.innerHTML = "/";
    ns.id = "ns";
    tdstatid.appendChild(ns);

    var n = doc.createElement("i");
    n.innerHTML = nnum;
    n.id = "n";
    tdstatid.appendChild(n);
    //

    //
    var trstatranspor = doc.createElement("tr");
    trstatranspor.id = "trstatranspor";
    EWM.parentNode.insertBefore(trstatranspor, EWM);

    var trstatidranspor = doc.getElementById("trstatranspor");

    var tdransporphoto = doc.createElement("img");
    tdransporphoto.src = "Фото/CAR.png";
    trstatidranspor.appendChild(tdransporphoto);

    var tdstatranspor = doc.createElement("td");
    tdstatranspor.innerHTML = "Транспорт:";
    trstatidranspor.appendChild(tdstatranspor);

    var tdstatransport = doc.createElement("td");
    tdstatransport.innerHTML = car;
    trstatidranspor.appendChild(tdstatransport);
    //

    //
    var trstatmest = doc.createElement("tr");
    trstatmest.id = "trstatmest";
    EWM.parentNode.insertBefore(trstatmest, EWM);

    var trstatidmest = doc.getElementById("trstatmest");


    var tdmestphoto = doc.createElement("img");
    tdmestphoto.src = "Фото/HOME.png";
    trstatidmest.appendChild(tdmestphoto);

    var tdstatmest = doc.createElement("td");
    tdstatmest.innerHTML = "Место жительства:";
    trstatidmest.appendChild(tdstatmest);

    var tdstatmest = doc.createElement("td");
    tdstatmest.innerHTML = mest;
    trstatidmest.appendChild(tdstatmest);
    //

    //
    var trstatbiz = doc.createElement("tr");
    trstatbiz.id = "trstatbiz";
    EWM.parentNode.insertBefore(trstatbiz, EWM);

    var trstatidbiz = doc.getElementById("trstatbiz");


    var tdbizphoto = doc.createElement("img");
    tdbizphoto.src = "Фото/BIZ.png";
    trstatidbiz.appendChild(tdbizphoto);

    var tdstatbiz = doc.createElement("td");
    tdstatbiz.innerHTML = "Бизнес:";
    trstatidbiz.appendChild(tdstatbiz);

    var tdstatbiz = doc.createElement("td");
    tdstatbiz.innerHTML = "Не имеется";
    trstatidbiz.appendChild(tdstatbiz);
    //

    var back = doc.createElement("input");
    back.type = "button"
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);
    var backbut = doc.getElementById("back");
    backbut.onclick = backstat;
}
// интерфейс статистики

// интерфейс недвижимости
function marhome01() {
    var eat = doc.getElementById("eat");
    eat.parentNode.removeChild(eat);

    var EWM = doc.getElementById("td1");

    var home = doc.getElementById("home");
    home.parentNode.removeChild(home);

    var car = doc.getElementById("car");
    car.parentNode.removeChild(car);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    // палатка
    var pal = doc.createElement("tr");
    pal.id = "pal";
    EWM.parentNode.insertBefore(pal, EWM);

    var tdpal = doc.createElement("td");
    tdpal.id = "tdpal";
    pal.appendChild(tdpal);

    var tdpal1 = doc.getElementById("tdpal");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/PAL.png";
    tdpal1.appendChild(tdEAT);

    var PAL1 = doc.createElement("td");
    PAL1.innerHTML = "ПАЛАТКА - 500 $";
    pal.appendChild(PAL1);

    var BUTPAL = doc.createElement("input");
    BUTPAL.type = "button"
    BUTPAL.value = "Купить";
    BUTPAL.id = "marcetPAL";
    pal.appendChild(BUTPAL);

    var marcetPAL = doc.getElementById("marcetPAL");
    marcetPAL.onclick = marpal01;
    // палатка

    // сарай
    var sar = doc.createElement("tr");
    sar.id = "sar";
    EWM.parentNode.insertBefore(sar, EWM);

    var tdsar = doc.createElement("td");
    tdsar.id = "tdsar";
    sar.appendChild(tdsar);

    var tdsar1 = doc.getElementById("tdsar");

    var tdSAR = doc.createElement("img");
    tdSAR.src = "Фото/SAR.png";
    tdsar1.appendChild(tdSAR);

    var SAR1 = doc.createElement("td");
    SAR1.innerHTML = "САРАЙ - 2500 $";
    sar.appendChild(SAR1);

    var BUTSAR = doc.createElement("input");
    BUTSAR.type = "button"
    BUTSAR.value = "Купить";
    BUTSAR.id = "marcetSAR";
    sar.appendChild(BUTSAR);

    var marcetSAR = doc.getElementById("marcetSAR");
    marcetSAR.onclick = marsar01;
    // сарай

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenuhome;
}
// интерфейс недвижимости

// интерфейс транспорта
function marcar01() {
    var EWM = doc.getElementById("td1");

    var eat = doc.getElementById("eat");
    eat.parentNode.removeChild(eat);

    var home = doc.getElementById("home");
    home.parentNode.removeChild(home);

    var car = doc.getElementById("car");
    car.parentNode.removeChild(car);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    // скейт
    var skate = doc.createElement("tr");
    skate.id = "skate";
    EWM.parentNode.insertBefore(skate, EWM);

    var tdskate = doc.createElement("td");
    tdskate.id = "tdskate";
    skate.appendChild(tdskate);

    var tdskate1 = doc.getElementById("tdskate");

    var tdSKATE = doc.createElement("img");
    tdSKATE.src = "Фото/SKATE.png";
    tdskate1.appendChild(tdSKATE);

    var SKATE1 = doc.createElement("td");
    SKATE1.innerHTML = "СКЕЙТ - 150 $";
    skate.appendChild(SKATE1);

    var BUTSKATE = doc.createElement("input");
    BUTSKATE.type = "button"
    BUTSKATE.value = "Купить";
    BUTSKATE.id = "marcetSKATE";
    skate.appendChild(BUTSKATE);

    var marcetSKATE = doc.getElementById("marcetSKATE");
    marcetSKATE.onclick = marskate01;
    // скейт

    // велосипед
    var velo = doc.createElement("tr");
    velo.id = "velo";
    EWM.parentNode.insertBefore(velo, EWM);

    var tdvelo = doc.createElement("td");
    tdvelo.id = "tdvelo";
    velo.appendChild(tdvelo);

    var tdvelo1 = doc.getElementById("tdvelo");

    var tdVELO = doc.createElement("img");
    tdVELO.src = "Фото/VELO.png";
    tdvelo1.appendChild(tdVELO);

    var VELO1 = doc.createElement("td");
    VELO1.innerHTML = "ВЕЛОСИПЕД - 800 $";
    velo.appendChild(VELO1);

    var BUTVELO = doc.createElement("input");
    BUTVELO.type = "button"
    BUTVELO.value = "Купить";
    BUTVELO.id = "marcetVELO";
    velo.appendChild(BUTVELO);

    var marcetVELO = doc.getElementById("marcetVELO");
    marcetVELO.onclick = marvelo01;
    // велосипед

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenucar;
}
// интерфейс транспорта

// интерфейсы 

// функции возврата

// функция назад в меню из магазина
function backmenumagaz() {    
    var eat = doc.getElementById("eat");
    eat.parentNode.removeChild(eat);

    var home = doc.getElementById("home");
    home.parentNode.removeChild(home);

    var car = doc.getElementById("car");
    car.parentNode.removeChild(car);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    var magaz = doc.createElement("input");
    magaz.type = "button"
    magaz.value = "Магазины";
    magaz.id = "marcet";
    doc.body.appendChild(magaz);
    var magazbut = doc.getElementById("marcet");
    magazbut.onclick = marcet0;

    var deyt = doc.createElement("input");
    deyt.type = "button"
    deyt.value = "Вид деятельности";
    deyt.id = "deyt";
    doc.body.appendChild(deyt);
    var deytbut = doc.getElementById("deyt");
    deytbut.onclick = deyt0;

    var stat = doc.createElement("input");
    stat.type = "button"
    stat.value = "Статистика";
    stat.id = "stat";
    doc.body.appendChild(stat);
    var statbut = doc.getElementById("stat");
    statbut.onclick = stat0;

    var sesting = doc.createElement("input");
    sesting.type = "button"
    sesting.value = "Настройки";
    sesting.id = "sesting";
    doc.body.appendChild(sesting);
    var sestingbut = doc.getElementById("sesting");
    sestingbut.onclick = sesting0;
}
// функция назад в меню из магазина

// функция назад из магазина продуктов
function backmenumagaz0() {
    var eat = doc.getElementById("eat");
    eat.parentNode.removeChild(eat);

    var wet = doc.getElementById("wet");
    wet.parentNode.removeChild(wet);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    var EWM = doc.getElementById("td1");

    // продукты
    var eat = doc.createElement("tr");
    eat.id = "eat";
    EWM.parentNode.insertBefore(eat, EWM);

    var tdeat = doc.createElement("td");
    tdeat.id = "tdeat";
    eat.appendChild(tdeat);

    var tdeat1 = doc.getElementById("tdeat");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/PROD.png";
    tdeat1.appendChild(tdEAT);

    var EAT1 = doc.createElement("td");
    EAT1.innerHTML = "Продукты";
    eat.appendChild(EAT1);

    var BUTEAT = doc.createElement("input");
    BUTEAT.type = "button"
    BUTEAT.value = "Посмотреть";
    BUTEAT.id = "marcetEAT";
    eat.appendChild(BUTEAT);

    var marcetEAT = doc.getElementById("marcetEAT");
    marcetEAT.onclick = marcet01;
    // продукты

    // Недвижимость
    var home = doc.createElement("tr");
    home.id = "home";
    EWM.parentNode.insertBefore(home, EWM);

    var tdhome = doc.createElement("td");
    tdhome.id = "tdhome";
    home.appendChild(tdhome);

    var tdhome1 = doc.getElementById("tdhome");

    var tdHOME = doc.createElement("img");
    tdHOME.src = "Фото/HOME.png";
    tdhome1.appendChild(tdHOME);

    var HOME1 = doc.createElement("td");
    HOME1.innerHTML = "Недвижимость";
    home.appendChild(HOME1);

    var BUTHOME = doc.createElement("input");
    BUTHOME.type = "button"
    BUTHOME.value = "Посмотреть";
    BUTHOME.id = "marcetHOME";
    home.appendChild(BUTHOME);

    var marcetEHOME = doc.getElementById("marcetHOME");
    marcetHOME.onclick = marhome01;
    // Недвижимость

    // Транспорт
    var car = doc.createElement("tr");
    car.id = "car";
    EWM.parentNode.insertBefore(car, EWM);

    var tdcar = doc.createElement("td");
    tdcar.id = "tdcar";
    car.appendChild(tdcar);

    var tdcar1 = doc.getElementById("tdcar");

    var tdCAR = doc.createElement("img");
    tdCAR.src = "Фото/CAR.png";
    tdcar1.appendChild(tdCAR);

    var CAR1 = doc.createElement("td");
    CAR1.innerHTML = "Транспорт";
    car.appendChild(CAR1);

    var BUTCAR = doc.createElement("input");
    BUTCAR.type = "button"
    BUTCAR.value = "Посмотреть";
    BUTCAR.id = "marcetCAR";
    car.appendChild(BUTCAR);

    var marcetCAR = doc.getElementById("marcetCAR");
    marcetCAR.onclick = marcar01;
    // Транспорт

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenumagaz;
}
// функция назад из магазина продуктов

// функция назад в магазин из еды
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
    backbut.onclick = backmenumagaz0;
}
// функция назад в магазин из еды

// функция назад в магазин напитков
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
    backbut.onclick = backmenumagaz0;
}
// функция назад в магазин напитков

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

    var EWM = doc.getElementById("td1");

    // подработка
    var work = doc.createElement("tr");
    work.id = "work";
    EWM.parentNode.insertBefore(work, EWM);

    var tdeat = doc.createElement("td");
    tdeat.id = "tdeat";
    work.appendChild(tdeat);

    var tdeat1 = doc.getElementById("tdeat");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/PWORK.png";
    tdeat1.appendChild(tdEAT);

    var EAT1 = doc.createElement("td");
    EAT1.innerHTML = "Подработка";
    work.appendChild(EAT1);

    var BUTEAT = doc.createElement("input");
    BUTEAT.type = "button"
    BUTEAT.value = "Посмотреты список";
    BUTEAT.id = "marcetEAT";
    work.appendChild(BUTEAT);

    var marcetEAT = doc.getElementById("marcetEAT");
    marcetEAT.onclick = work0;
    // подработка

    // работа
    var workgl = doc.createElement("tr");
    workgl.id = "workgl";
    EWM.parentNode.insertBefore(workgl, EWM);

    var tdworkgl = doc.createElement("td");
    tdworkgl.id = "tdworkgl";
    workgl.appendChild(tdworkgl);

    var tdworkgl1 = doc.getElementById("tdworkgl");

    var tdworkgl = doc.createElement("img");
    tdworkgl.src = "Фото/WORK.png";
    tdworkgl1.appendChild(tdworkgl);

    var workgl1 = doc.createElement("td");
    workgl1.innerHTML = "Работа";
    workgl.appendChild(workgl1);

    var BUTworkgl = doc.createElement("input");
    BUTworkgl.type = "button"
    BUTworkgl.value = "Посмотреты список";
    BUTworkgl.id = "BUTworkgl";
    workgl.appendChild(BUTworkgl);

    var marcetworkgl = doc.getElementById("BUTworkgl");
    marcetworkgl.onclick = work01;
    // работа

    // отдых
    var workgl1 = doc.createElement("tr");
    workgl1.id = "rest";
    EWM.parentNode.insertBefore(workgl1, EWM);

    var tdworkgl1 = doc.createElement("td");
    tdworkgl1.id = "tdworkgl1";
    workgl1.appendChild(tdworkgl1);

    var tdworkgl11 = doc.getElementById("tdworkgl1");

    var tdworkgl1 = doc.createElement("img");
    tdworkgl1.src = "Фото/REST.png";
    tdworkgl11.appendChild(tdworkgl1);

    var workgl11 = doc.createElement("td");
    workgl11.innerHTML = "Отдых";
    workgl1.appendChild(workgl11);

    var BUTworkgl1 = doc.createElement("input");
    BUTworkgl1.type = "button"
    BUTworkgl1.value = "Посмотреты список";
    BUTworkgl1.id = "BUTworkgl1";
    workgl1.appendChild(BUTworkgl1);

    var marcetworkgl1 = doc.getElementById("BUTworkgl1");
    marcetworkgl1.onclick = rest0;
    // отдых

    var back = doc.createElement("input");
    back.type = "button"
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);
    var backbut = doc.getElementById("back");
    backbut.onclick = backdeyt;
}
// функция назад в меню с работы

// функция выхода в меню с главных работ
function backmenuworkgl() {
    var STR = doc.getElementById("STR");
    STR.parentNode.removeChild(STR);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    var EWM = doc.getElementById("td1");

    // подработка
    var work = doc.createElement("tr");
    work.id = "work";
    EWM.parentNode.insertBefore(work, EWM);

    var tdeat = doc.createElement("td");
    tdeat.id = "tdeat";
    work.appendChild(tdeat);

    var tdeat1 = doc.getElementById("tdeat");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/PWORK.png";
    tdeat1.appendChild(tdEAT);

    var EAT1 = doc.createElement("td");
    EAT1.innerHTML = "Подработка";
    work.appendChild(EAT1);

    var BUTEAT = doc.createElement("input");
    BUTEAT.type = "button"
    BUTEAT.value = "Посмотреты список";
    BUTEAT.id = "marcetEAT";
    work.appendChild(BUTEAT);

    var marcetEAT = doc.getElementById("marcetEAT");
    marcetEAT.onclick = work0;
    // подработка

    // работа
    var workgl = doc.createElement("tr");
    workgl.id = "workgl";
    EWM.parentNode.insertBefore(workgl, EWM);

    var tdworkgl = doc.createElement("td");
    tdworkgl.id = "tdworkgl";
    workgl.appendChild(tdworkgl);

    var tdworkgl1 = doc.getElementById("tdworkgl");

    var tdworkgl = doc.createElement("img");
    tdworkgl.src = "Фото/WORK.png";
    tdworkgl1.appendChild(tdworkgl);

    var workgl1 = doc.createElement("td");
    workgl1.innerHTML = "Работа";
    workgl.appendChild(workgl1);

    var BUTworkgl = doc.createElement("input");
    BUTworkgl.type = "button"
    BUTworkgl.value = "Посмотреты список";
    BUTworkgl.id = "BUTworkgl";
    workgl.appendChild(BUTworkgl);

    var marcetworkgl = doc.getElementById("BUTworkgl");
    marcetworkgl.onclick = work01;
    // работа

    // отдых
    var workgl1 = doc.createElement("tr");
    workgl1.id = "rest";
    EWM.parentNode.insertBefore(workgl1, EWM);

    var tdworkgl1 = doc.createElement("td");
    tdworkgl1.id = "tdworkgl1";
    workgl1.appendChild(tdworkgl1);

    var tdworkgl11 = doc.getElementById("tdworkgl1");

    var tdworkgl1 = doc.createElement("img");
    tdworkgl1.src = "Фото/REST.png";
    tdworkgl11.appendChild(tdworkgl1);

    var workgl11 = doc.createElement("td");
    workgl11.innerHTML = "Отдых";
    workgl1.appendChild(workgl11);

    var BUTworkgl1 = doc.createElement("input");
    BUTworkgl1.type = "button"
    BUTworkgl1.value = "Посмотреты список";
    BUTworkgl1.id = "BUTworkgl1";
    workgl1.appendChild(BUTworkgl1);

    var marcetworkgl1 = doc.getElementById("BUTworkgl1");
    marcetworkgl1.onclick = rest0;
    // отдых

    var back = doc.createElement("input");
    back.type = "button"
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);
    var backbut = doc.getElementById("back");
    backbut.onclick = backdeyt;
}
// функция выхода в меню с главных работ

// выход в меню работ из стройки
function backSRT0() {
    var STRO = doc.getElementById("STRO");
    STRO.parentNode.removeChild(STRO);

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
    var Save = doc.getElementById("save");
    Save.parentNode.removeChild(Save);

    var back = doc.getElementById("back");
    doc.body.removeChild(back);

    var magaz = doc.createElement("input");
    magaz.type = "button"
    magaz.value = "Магазины";
    magaz.id = "marcet";
    doc.body.appendChild(magaz);
    var magazbut = doc.getElementById("marcet");
    magazbut.onclick = marcet0;

    var deyt = doc.createElement("input");
    deyt.type = "button"
    deyt.value = "Вид деятельности";
    deyt.id = "deyt";
    doc.body.appendChild(deyt);
    var deytbut = doc.getElementById("deyt");
    deytbut.onclick = deyt0;

    var stat = doc.createElement("input");
    stat.type = "button"
    stat.value = "Статистика";
    stat.id = "stat";
    doc.body.appendChild(stat);
    var statbut = doc.getElementById("stat");
    statbut.onclick = stat0;

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

    var kino = doc.getElementById("kino");
    kino.parentNode.removeChild(kino);

    var game = doc.getElementById("game");
    game.parentNode.removeChild(game);

    var park = doc.getElementById("park");
    park.parentNode.removeChild(park);

    var EWM = doc.getElementById("td1");

    // подработка
    var work = doc.createElement("tr");
    work.id = "work";
    EWM.parentNode.insertBefore(work, EWM);

    var tdeat = doc.createElement("td");
    tdeat.id = "tdeat";
    work.appendChild(tdeat);

    var tdeat1 = doc.getElementById("tdeat");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/PWORK.png";
    tdeat1.appendChild(tdEAT);

    var EAT1 = doc.createElement("td");
    EAT1.innerHTML = "Подработка";
    work.appendChild(EAT1);

    var BUTEAT = doc.createElement("input");
    BUTEAT.type = "button"
    BUTEAT.value = "Посмотреты список";
    BUTEAT.id = "marcetEAT";
    work.appendChild(BUTEAT);

    var marcetEAT = doc.getElementById("marcetEAT");
    marcetEAT.onclick = work0;
    // подработка

    // работа
    var workgl = doc.createElement("tr");
    workgl.id = "workgl";
    EWM.parentNode.insertBefore(workgl, EWM);

    var tdworkgl = doc.createElement("td");
    tdworkgl.id = "tdworkgl";
    workgl.appendChild(tdworkgl);

    var tdworkgl1 = doc.getElementById("tdworkgl");

    var tdworkgl = doc.createElement("img");
    tdworkgl.src = "Фото/WORK.png";
    tdworkgl1.appendChild(tdworkgl);

    var workgl1 = doc.createElement("td");
    workgl1.innerHTML = "Работа";
    workgl.appendChild(workgl1);

    var BUTworkgl = doc.createElement("input");
    BUTworkgl.type = "button"
    BUTworkgl.value = "Посмотреты список";
    BUTworkgl.id = "BUTworkgl";
    workgl.appendChild(BUTworkgl);

    var marcetworkgl = doc.getElementById("BUTworkgl");
    marcetworkgl.onclick = work01;
    // работа

    // отдых
    var workgl1 = doc.createElement("tr");
    workgl1.id = "rest";
    EWM.parentNode.insertBefore(workgl1, EWM);

    var tdworkgl1 = doc.createElement("td");
    tdworkgl1.id = "tdworkgl1";
    workgl1.appendChild(tdworkgl1);

    var tdworkgl11 = doc.getElementById("tdworkgl1");

    var tdworkgl1 = doc.createElement("img");
    tdworkgl1.src = "Фото/REST.png";
    tdworkgl11.appendChild(tdworkgl1);

    var workgl11 = doc.createElement("td");
    workgl11.innerHTML = "Отдых";
    workgl1.appendChild(workgl11);

    var BUTworkgl1 = doc.createElement("input");
    BUTworkgl1.type = "button"
    BUTworkgl1.value = "Посмотреты список";
    BUTworkgl1.id = "BUTworkgl1";
    workgl1.appendChild(BUTworkgl1);

    var marcetworkgl1 = doc.getElementById("BUTworkgl1");
    marcetworkgl1.onclick = rest0;
    // отдых

    var back = doc.createElement("input");
    back.type = "button"
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);
    var backbut = doc.getElementById("back");
    backbut.onclick = backdeyt;
}
// выход в меню с отдыха

// выход с вида деятельеости в меню
function backdeyt() {
    var work = doc.getElementById("work");
    work.parentNode.removeChild(work);

    var workgl = doc.getElementById("workgl");
    workgl.parentNode.removeChild(workgl);

    var rest = doc.getElementById("rest");
    rest.parentNode.removeChild(rest);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    var magaz = doc.createElement("input");
    magaz.type = "button"
    magaz.value = "Магазины";
    magaz.id = "marcet";
    doc.body.appendChild(magaz);
    var magazbut = doc.getElementById("marcet");
    magazbut.onclick = marcet0;

    var deyt = doc.createElement("input");
    deyt.type = "button"
    deyt.value = "Вид деятельности";
    deyt.id = "deyt";
    doc.body.appendChild(deyt);
    var deytbut = doc.getElementById("deyt");
    deytbut.onclick = deyt0;

    var stat = doc.createElement("input");
    stat.type = "button"
    stat.value = "Статистика";
    stat.id = "stat";
    doc.body.appendChild(stat);
    var statbut = doc.getElementById("stat");
    statbut.onclick = stat0;

    var sesting = doc.createElement("input");
    sesting.type = "button"
    sesting.value = "Настройки";
    sesting.id = "sesting";
    doc.body.appendChild(sesting);
    var sestingbut = doc.getElementById("sesting");
    sestingbut.onclick = sesting0;
}
// выход с вида деятельеости в меню

// выход в меню из статистики
function backstat() {
    var back = doc.getElementById("back");
    doc.body.removeChild(back);

    var trstat = doc.getElementById("trstat");
    trstat.parentNode.removeChild(trstat);

    var trstatranspor = doc.getElementById("trstatranspor");
    trstatranspor.parentNode.removeChild(trstatranspor);

    var trstatmest = doc.getElementById("trstatmest");
    trstatmest.parentNode.removeChild(trstatmest);

    var trstatbiz = doc.getElementById("trstatbiz");
    trstatbiz.parentNode.removeChild(trstatbiz);

    var magaz = doc.createElement("input");
    magaz.type = "button"
    magaz.value = "Магазины";
    magaz.id = "marcet";
    doc.body.appendChild(magaz);
    var magazbut = doc.getElementById("marcet");
    magazbut.onclick = marcet0;

    var deyt = doc.createElement("input");
    deyt.type = "button"
    deyt.value = "Вид деятельности";
    deyt.id = "deyt";
    doc.body.appendChild(deyt);
    var deytbut = doc.getElementById("deyt");
    deytbut.onclick = deyt0;

    var stat = doc.createElement("input");
    stat.type = "button"
    stat.value = "Статистика";
    stat.id = "stat";
    doc.body.appendChild(stat);
    var statbut = doc.getElementById("stat");
    statbut.onclick = stat0;

    var sesting = doc.createElement("input");
    sesting.type = "button"
    sesting.value = "Настройки";
    sesting.id = "sesting";
    doc.body.appendChild(sesting);
    var sestingbut = doc.getElementById("sesting");
    sestingbut.onclick = sesting0;
}
// выход в меню из статистики

// выход в магазины из недвижимости
function backmenuhome() {
    var pal = doc.getElementById("pal");
    pal.parentNode.removeChild(pal);

    var sar = doc.getElementById("sar");
    sar.parentNode.removeChild(sar);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    var EWM = doc.getElementById("td1");

    // продукты
    var eat = doc.createElement("tr");
    eat.id = "eat";
    EWM.parentNode.insertBefore(eat, EWM);

    var tdeat = doc.createElement("td");
    tdeat.id = "tdeat";
    eat.appendChild(tdeat);

    var tdeat1 = doc.getElementById("tdeat");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/PROD.png";
    tdeat1.appendChild(tdEAT);

    var EAT1 = doc.createElement("td");
    EAT1.innerHTML = "Продукты";
    eat.appendChild(EAT1);

    var BUTEAT = doc.createElement("input");
    BUTEAT.type = "button"
    BUTEAT.value = "Посмотреть";
    BUTEAT.id = "marcetEAT";
    eat.appendChild(BUTEAT);

    var marcetEAT = doc.getElementById("marcetEAT");
    marcetEAT.onclick = marcet01;
    // продукты

    // Недвижимость
    var home = doc.createElement("tr");
    home.id = "home";
    EWM.parentNode.insertBefore(home, EWM);

    var tdhome = doc.createElement("td");
    tdhome.id = "tdhome";
    home.appendChild(tdhome);

    var tdhome1 = doc.getElementById("tdhome");

    var tdHOME = doc.createElement("img");
    tdHOME.src = "Фото/HOME.png";
    tdhome1.appendChild(tdHOME);

    var HOME1 = doc.createElement("td");
    HOME1.innerHTML = "Недвижимость";
    home.appendChild(HOME1);

    var BUTHOME = doc.createElement("input");
    BUTHOME.type = "button"
    BUTHOME.value = "Посмотреть";
    BUTHOME.id = "marcetHOME";
    home.appendChild(BUTHOME);

    var marcetEHOME = doc.getElementById("marcetHOME");
    marcetHOME.onclick = marhome01;
    // Недвижимость

    // Транспорт
    var car = doc.createElement("tr");
    car.id = "car";
    EWM.parentNode.insertBefore(car, EWM);

    var tdcar = doc.createElement("td");
    tdcar.id = "tdcar";
    car.appendChild(tdcar);

    var tdcar1 = doc.getElementById("tdcar");

    var tdCAR = doc.createElement("img");
    tdCAR.src = "Фото/CAR.png";
    tdcar1.appendChild(tdCAR);

    var CAR1 = doc.createElement("td");
    CAR1.innerHTML = "Транспорт";
    car.appendChild(CAR1);

    var BUTCAR = doc.createElement("input");
    BUTCAR.type = "button"
    BUTCAR.value = "Посмотреть";
    BUTCAR.id = "marcetCAR";
    car.appendChild(BUTCAR);

    var marcetCAR = doc.getElementById("marcetCAR");
    marcetCAR.onclick = marcar01;
    // Транспорт

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenumagaz;
}
// выход в магазины из недвижимости

// выход в магазины из транспорта
function backmenucar() {
    var skate = doc.getElementById("skate");
    skate.parentNode.removeChild(skate);

    var velo = doc.getElementById("velo");
    velo.parentNode.removeChild(velo);

    var back = doc.getElementById("back");
    back.parentNode.removeChild(back);

    var EWM = doc.getElementById("td1");

    // продукты
    var eat = doc.createElement("tr");
    eat.id = "eat";
    EWM.parentNode.insertBefore(eat, EWM);

    var tdeat = doc.createElement("td");
    tdeat.id = "tdeat";
    eat.appendChild(tdeat);

    var tdeat1 = doc.getElementById("tdeat");

    var tdEAT = doc.createElement("img");
    tdEAT.src = "Фото/PROD.png";
    tdeat1.appendChild(tdEAT);

    var EAT1 = doc.createElement("td");
    EAT1.innerHTML = "Продукты";
    eat.appendChild(EAT1);

    var BUTEAT = doc.createElement("input");
    BUTEAT.type = "button"
    BUTEAT.value = "Посмотреть";
    BUTEAT.id = "marcetEAT";
    eat.appendChild(BUTEAT);

    var marcetEAT = doc.getElementById("marcetEAT");
    marcetEAT.onclick = marcet01;
    // продукты

    // Недвижимость
    var home = doc.createElement("tr");
    home.id = "home";
    EWM.parentNode.insertBefore(home, EWM);

    var tdhome = doc.createElement("td");
    tdhome.id = "tdhome";
    home.appendChild(tdhome);

    var tdhome1 = doc.getElementById("tdhome");

    var tdHOME = doc.createElement("img");
    tdHOME.src = "Фото/HOME.png";
    tdhome1.appendChild(tdHOME);

    var HOME1 = doc.createElement("td");
    HOME1.innerHTML = "Недвижимость";
    home.appendChild(HOME1);

    var BUTHOME = doc.createElement("input");
    BUTHOME.type = "button"
    BUTHOME.value = "Посмотреть";
    BUTHOME.id = "marcetHOME";
    home.appendChild(BUTHOME);

    var marcetEHOME = doc.getElementById("marcetHOME");
    marcetHOME.onclick = marhome01;
    // Недвижимость

    // Транспорт
    var car = doc.createElement("tr");
    car.id = "car";
    EWM.parentNode.insertBefore(car, EWM);

    var tdcar = doc.createElement("td");
    tdcar.id = "tdcar";
    car.appendChild(tdcar);

    var tdcar1 = doc.getElementById("tdcar");

    var tdCAR = doc.createElement("img");
    tdCAR.src = "Фото/CAR.png";
    tdcar1.appendChild(tdCAR);

    var CAR1 = doc.createElement("td");
    CAR1.innerHTML = "Транспорт";
    car.appendChild(CAR1);

    var BUTCAR = doc.createElement("input");
    BUTCAR.type = "button"
    BUTCAR.value = "Посмотреть";
    BUTCAR.id = "marcetCAR";
    car.appendChild(BUTCAR);

    var marcetCAR = doc.getElementById("marcetCAR");
    marcetCAR.onclick = marcar01;
    // Транспорт

    var back = doc.createElement("input");
    back.type = "button";
    back.value = "Назад";
    back.id = "back";
    doc.body.appendChild(back);

    var butback = doc.getElementById("back");
    butback.onclick = backmenumagaz;
}
// выход в магазины из транспорта

// функции возврата

// еда

// восполнение сытости ход-дог
function HOTDOG() {   
    if (numm >= 10 && nume < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        nume += 10;
        numm -= 10;
        if (nume < 100) {
            EAT_id1.innerHTML = nume;
            MON_id1.innerHTML = numm;

            audioeat();
        } else if (nume >= 100) {
            nume = 100;
            EAT_id1.innerHTML = nume;
            MON_id1.innerHTML = numm;

            audioeat();

        }
    } else if (numm >= 10 && nume == 100) {
        alert("Вы сыты");
    } else if (numm < 10 && nume < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости ход-дог

// восполнение сытости бургер
function BUR0() {
    if (numm >= 20 && nume < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        nume += 30;
        numm -= 20;
        if (nume < 100) {
            EAT_id1.innerHTML = nume;
            MON_id1.innerHTML = numm;

            audioeat();
        } else if (nume >= 100) {
            nume = 100;
            EAT_id1.innerHTML = nume;
            MON_id1.innerHTML = numm;

            audioeat();
        }
    } else if (numm >= 20 && nume == 100) {
        alert("Вы сыты");
    } else if (numm < 20 && nume < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости бургер

// восполнение сытости роллы
function POL0() {
    if (numm >= 28 && nume < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        nume += 33;
        numm -= 28;
        if (nume < 100) {
            EAT_id1.innerHTML = nume;
            MON_id1.innerHTML = numm;

            audioeat();
        } else if (nume >= 100) {
            nume = 100;
            EAT_id1.innerHTML = nume;
            MON_id1.innerHTML = numm;

            audioeat();
        }
    } else if (numm >= 28 && nume == 100) {
        alert("Вы сыты");
    } else if (numm < 28 && nume < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости роллы

// восполнение сытости пицца
function PIZ0() {
    if (numm >= 20 && nume < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        nume += 45;
        numm -= 35;
        if (nume < 100) {
            EAT_id1.innerHTML = nume;
            MON_id1.innerHTML = numm;

            audioeat();
        } else if (nume >= 100) {
            nume = 100;
            EAT_id1.innerHTML = nume;
            MON_id1.innerHTML = numm;

            audioeat();
        }
    } else if (numm >= 35 && nume == 100) {
        alert("Вы сыты");
    } else if (numm < 35 && nume < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости пицца

// восполнение сытости суп
function SOUP0() {
    if (numm >= 20 && nume < 100) {
        var EAT_id1 = doc.getElementById("E");
        var MON_id1 = doc.getElementById("M");

        nume += 70;
        numm -= 50;
        if (nume < 100) {
            EAT_id1.innerHTML = nume;
            MON_id1.innerHTML = numm;

            audioeat();
        } else if (nume >= 100) {
            nume = 100;
            EAT_id1.innerHTML = EATnume
            MON_id1.innerHTML = numm;

            audioeat();
        }
    } else if (numm >= 50 && nume == 100) {
        alert("Вы сыты");
    } else if (numm < 50 && nume < 100) {
        alert("У вас недостаточно денег");
    }
}
// восполнение сытости суп

// еда

// напитки

// выпить воды
function weit0() {
    if (numm >= 5 && numw < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        numw += 10;
        numm -= 5;
        if (numw < 100) {
            WET_id1.innerHTML = numw;
            MON_id1.innerHTML = numm;

            audiowet();
        } else if (numw >= 100) {
            numw = 100;
            WET_id1.innerHTML = WETnumw
            MON_id1.innerHTML = numm;

            audiowet()
        }
    } else if (numm >= 5 && numw == 100) {
        alert("Вы не хотите пить");
    } else if (numm < 5 && numw < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить воды

// выпить пиво
function piv0() {
    if (numm >= 10 && numw < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        numw += 10;
        numm -= 10;
        if (numw < 100) {
            WET_id1.innerHTML = numw;
            MON_id1.innerHTML = numm;

            audiowet()
        } else if (numw >= 100) {
            numw = 100;
            WET_id1.innerHTML = numw;
            MON_id1.innerHTML = numm;

            audiowet()
        }
    } else if (numm >= 10 && numw == 100) {
        alert("Вы не хотите пить");
    } else if (numm < 10 && numw < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить пиво

// выпить лимонад
function lim0() {
    if (numm >= 20 && numw < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        numw += 25;
        numm -= 20;
        if (numw < 100) {
            WET_id1.innerHTML = numw;
            MON_id1.innerHTML = numm;

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        } else if (numw >= 100) {
            numw = 100;
            WET_id1.innerHTML = numw;
            MON_id1.innerHTML = numm;

            var audio = new Audio();
            audio.src = "Аудио/drink.mp3";
            audio.autoplay = true;
        }
    } else if (numm >= 20 && numw == 100) {
        alert("Вы не хотите пить");
    } else if (numm < 20 && numw < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить лимонад

// выпить коктейл
function kok0() {
    if (numm >= 35 && numw < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        numw += 35;
        numm -= 25;
        if (numw < 100) {
            WET_id1.innerHTML = numw;
            MON_id1.innerHTML = numm;

            audiowet()
        } else if (numw >= 100) {
            numw = 100;
            WET_id1.innerHTML = numw;
            MON_id1.innerHTML = numm;

            audiowet()
        }
    } else if (numm >= 35 && numw == 100) {
        alert("Вы не хотите пить");
    } else if (numm < 35 && numw < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить коктейл

// выпить кофе
function cof0() {
    if (numm >= 60 && numw < 100) {
        var WET_id1 = doc.getElementById("W");
        var MON_id1 = doc.getElementById("M");

        numw += 60;
        numm -= 40;
        if (numw < 100) {
            WET_id1.innerHTML = numw;
            MON_id1.innerHTML = numm;

            audiowet()
        } else if (numw >= 100) {
            numw = 100;
            WET_id1.innerHTML = numw;
            MON_id1.innerHTML = numm;

            audiowet()
        }
    } else if (numm >= 60 && numw == 100) {
        alert("Вы не хотите пить");
    } else if (numm < 60 && numw < 100) {
        alert("У вас недостаточно денег");
    }
}
// выпить кофе

// напитки

// работы

// работа уборщика
function clea0() {
    if (nume >= 15 && numw >= 20) {       
        numl += 1;

        numm += 40;
        nume -= 15;
        numw -= 20;
        onnum += 1;

        var e = doc.getElementById("E");
        e.innerHTML = nume;
        var w = doc.getElementById("W");
        w.innerHTML = numw;
        var m = doc.getElementById("M");
        m.innerHTML = numm;
        var l = doc.getElementById("L");
        l.innerHTML = numl;

        if (onnum >= nnum) {
            NAVUP();
        } else { }

        if (numl >= numop) {
            LVLUP();
        } else { }

    } else if (nume < 15 && numw > 20) {
        alert("Вам нужно перекусить");
    } else if (numw < 20 && nume > 15) {
        alert("Вам нужно попить");
    } else if (numw < 20 && nume < 15) {
        alert("Вам нужно попить и поесть");
    }
}
// работа уборщика

// работа промоутера
function prom0() {
    if (numlvl >= 2) { 
        if (nume >= 17 && numw >= 22) {
            numl += 2;

            numm += 50;
            nume -= 17;
            numw -= 22;
            onnum += 2;

            var e = doc.getElementById("E");
            e.innerHTML = nume;
            var w = doc.getElementById("W");
            w.innerHTML = numw;
            var m = doc.getElementById("M");
            m.innerHTML = numm;
            var l = doc.getElementById("L");
            l.innerHTML = numl;

            if (onnum >= nnum) {
                NAVUP();
            } else { }
            if (numl >= numop) {
                LVLUP();
            } else { }

            } else if (nume < 17 && numw > 22) {
                alert("Вам нужно перекусить");
            } else if (numw < 22 && nume > 17) {
                alert("Вам нужно попить");
            } else if (numw < 22 && nume < 17) {
                alert("Вам нужно попить и поесть");
            }
        } else {
            alert("Для работы требуется 2 уровень");       
        }
}
// работа промоутера

// работа грузчика
function gr0() {
    if (numlvl >= 3) {
        if (nume >= 20 && WET >= 30) {
            numl += 3;

            numm += 100;
            nume -= 20;
            numw -= 30;
            onnum += 3;

            var e = doc.getElementById("E");
            e.innerHTML = nume;
            var w = doc.getElementById("W");
            w.innerHTML = numw;
            var m = doc.getElementById("M");
            m.innerHTML = numm;
            var l = doc.getElementById("L");
            l.innerHTML = numl;

            if (onnum >= nnum) {
                NAVUP();
            } else { }
            if (numl >= numop) {
                LVLUP();
            } else { }

            } else if (nume < 20 && numw > 30) {
                alert("Вам нужно перекусить");
            } else if (numw < 30 && nume > 20) {
                alert("Вам нужно попить");
            } else if (numw < 30 && nume < 20) {
                alert("Вам нужно попить и поесть");
            }
        } else {
            alert("Для работы требуется 3 уровень");
        }
    
}
// работа пгрузчика

// работа официанта
function of0() {
    if (numlvl >= 4) {
        if (nume >= 22 && numw >= 32) {
            numl += 4;

            numm += 130;
            nume -= 22;
            numw -= 32;
            onnum += 4;

            var e = doc.getElementById("E");
            e.innerHTML = nume;
            var w = doc.getElementById("W");
            w.innerHTML = numw;
            var m = doc.getElementById("M");
            m.innerHTML = numm;
            var l = doc.getElementById("L");
            l.innerHTML = numl;
        
            if (onnum >= nnum) {
                NAVUP();
            } else { }
            if (numl >= numop) {
                LVLUP();
            } else { }

            } else if (nume < 22 && numw > 32) {
                alert("Вам нужно перекусить");
            } else if (numw < 32 && nume > 22) {
                alert("Вам нужно попить");
            } else if (numw < 32 && nume < 22) {
                alert("Вам нужно попить и поесть");
            }
        } else {
            alert("Для работы требуется 4 уровень");
        }
    
}
// работа официанта

//работа водителя на стройке
function drivedtr0() {
    if (numlvl >= 5 && nrnum >= 1) {
        if (nume >= 40 && numw >= 40 && numc >= 20) {
            numl += 6;

            numm += 250;
            nume -= 40;
            numw -= 40;
            numc -= 20;
            onnum += 6;

            var c = doc.getElementById("C");
            c.innerHTML = numc;
            var e = doc.getElementById("E");
            e.innerHTML = nume;
            var w = doc.getElementById("W");
            w.innerHTML = numw;
            var m = doc.getElementById("M");
            m.innerHTML = numm;
            var l = doc.getElementById("L");
            l.innerHTML = numl;

            if (onnum >= nnum) {
                NAVUP();
            } else { }
            if (numl >= numop) {
                LVLUP();
            } else { }

        } else if (numw > 40 && nume > 40 && numc < 20) {
            alert("Вам нужно отдохнуть");
        } else if (nume < 40 && numw > 40 && numc > 20) {
            alert("Вам нужно перекусить");
        } else if (numw < 40 && nume > 40 && numc > 20) {
            alert("Вам нужно попить");
        } else if (numw < 40 && nume < 40 && numc > 20) {
            alert("Вам нужно попить и поесть");
        } else if (numw < 40 && nume > 40 && numc < 20) {
            alert("Вам нужно попить и отдохнуть");
        } else if (numw > 40 && nume < 40 && numc < 20) {
            alert("Вам нужно отдохнуть и поесть");
        } else if (numw < 40 && nume < 40 && numc < 20) {
            alert("Вам нужно попить, поесть и отдохнуть");
        }
    } else if (numlvl < 5 && nrnum >= 1) {
        alert("Для работы требуется 5 уровень");
    } else if (numlvl < 5 && nrnum < 1) {
        alert("Для работы требуется 5 уровень и 1 навык работ");
    } else if (numlvl >= 5 && nrnum < 1) {
        alert("Для работы требуется 1 навык работ");
    }
}
//работа водителя на стройке

// работа строителя
function strodtr0() {
    if (numlvl >= 6 && nrnum >= 2) {
        if (nume >= 45 && numw >= 45 && numc >= 25) {
            numl += 7;

            numm += 300;
            nume -= 45;
            numw -= 45;
            numc -= 25;
            onnum += 7;

            var c = doc.getElementById("C");
            c.innerHTML = numc;
            var e = doc.getElementById("E");
            e.innerHTML = nume;
            var w = doc.getElementById("W");
            w.innerHTML = numw;
            var m = doc.getElementById("M");
            m.innerHTML = numm;
            var l = doc.getElementById("L");
            l.innerHTML = numl;

            if (onnum >= nnum) {
                NAVUP();
            } else { }
            if (numl >= numop) {
                LVLUP();
            } else { }

        } else if (numw > 45 && nume > 45 && numc < 25) {
            alert("Вам нужно отдохнуть");
        } else if (nume < 45 && numw > 45 && numc > 25) {
            alert("Вам нужно перекусить");
        } else if (numw < 45 && nume > 45 && numc > 25) {
            alert("Вам нужно попить");
        } else if (numw < 45 && nume < 45 && numc > 25) {
            alert("Вам нужно попить и поесть");
        } else if (numw < 45 && nume > 45 && numc < 25) {
            alert("Вам нужно попить и отдохнуть");
        } else if (numw > 45 && nume < 45 && numc < 25) {
            alert("Вам нужно отдохнуть и поесть");
        } else if (numw < 45 && nume < 45 && numc < 25) {
            alert("Вам нужно попить, поесть и отдохнуть");
        }
    } else if (numlvl < 6 && nrnum >= 2) {
        alert("Для работы требуется 6 уровень");
    } else if (numlvl < 6 && nrnum < 2) {
        alert("Для работы требуется 6 уровень и 2 навык работ");
    } else if (numlvl >= 6 && nrnum < 2) {
        alert("Для работы требуется 2 навык работ");
    }
}
// работа строителя

// работы

// отдых парк
function PACK0() {
    if (numm >= 10 && numc < 100) {
        var conc_id1 = doc.getElementById("C");
        var MON_id1 = doc.getElementById("M");

        numc += 10;
        numm -= 10;
        if (numc < 100) {
            conc_id1.innerHTML = numc;
            MON_id1.innerHTML = numm;
        } else if (numc >= 100) {
            numc = 100;
            conc_id1.innerHTML = numc;
            MON_id1.innerHTML = numm;
        }
    } else if (numm >= 10 && numc == 100) {
        alert("Вы бодры");
    } else if (numm < 10 && numc < 100) {
        alert("У вас недостаточно денег");
    } else if (numm <= 10 && numc == 100) {
        alert("Вы бодры");
    }
}
// отдых парк

// отдых кино
function KINO0() {
    if (numm >= 20 && numc < 100) {
        var conc_id1 = doc.getElementById("C");
        var MON_id1 = doc.getElementById("M");

        numc += 20;
        numm -= 20;
        if (numc < 100) {
            conc_id1.innerHTML = numc;
            MON_id1.innerHTML = numm;
        } else if (numc >= 100) {
            numc = 100;
            conc_id1.innerHTML = numc;
            MON_id1.innerHTML = numm;
        }
    } else if (numm >= 20 && numc == 100) {
        alert("Вы бодры");
    } else if (numm < 20 && numc < 100) {
        alert("У вас недостаточно денег");
    } else if (numm <= 20 && numc == 100) {
        alert("Вы бодры");
    }
}
// отдых кино

// отдых игровойклуб
function GAME0() {
    if (numm >= 40 && numc < 100) {
        var conc_id1 = doc.getElementById("C");
        var MON_id1 = doc.getElementById("M");

        numc += 40;
        numm -= 40;
        if (numc < 100) {
            conc_id1.innerHTML = numc;
            MON_id1.innerHTML = numm;
        } else if (numc >= 100) {
            numc = 100;
            conc_id1.innerHTML = numc;
            MON_id1.innerHTML = numm;
        }
    } else if (numm >= 40 && numc == 100) {
        alert("Вы бодры");
    } else if (numm < 40 && numc < 100) {
        alert("У вас недостаточно денег");
    } else if (numm <= 40 && numc == 100) {
        alert("Вы бодры");
    }
}
// отдых игровойклуб

// информация по работам
function cleainfo() {
    alert("За данный тип подработки вы получите 1 XP и 1 XP навыка работы, а так же потратите 15 сытости, 20 жажды, 0 концентрации, для работы не требуется уровень");
}

function prominfo0() {
    alert("За данный тип подработки вы получите 2 XP и 2 XP навыка работы, а так же потратите 17 сытости, 22 жажды, 0 концентрации, для работы требуется 2 уровень");
}

function grinfo() {
    alert("За данный тип подработки вы получите 3 XP и 3 XP навыка работы, а так же потратите 20 сытости, 30 жажды, 0 концентрации, для работы требуется 3 уровень");
}

function ofinfo() {
    alert("За данный тип подработки вы получите 4 XP и 4 XP навыка работы, а так же потратите 22 сытости 32 жажды, 0 концентрации, для работы требуется 4 уровень");
}

function driveinfo0() {
    alert("За данный тип подработки вы получите 6 XP и 6 XP навыка работы, а так же потратите 40 сытости, 40 жажды, 20 концентрации, для работы требуется 5 уровень и 1 уровень навыка работ");
}

function stroinfo0() {
    alert("За данный тип подработки вы получите 7 XP и 7 XP навыка работы, а так же потратите 45 сытости, 45 жажды, 25 концентрации, для работы требуется 6 уровень и 2 уровень навыка работ");
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
    localStorage.setItem("Savename", name);

    localStorage.setItem("nume", nume);

    localStorage.setItem("numw", numw);

    localStorage.setItem("numm", numm);

    localStorage.setItem("numc", numc);

    localStorage.setItem("numop", numop);

    localStorage.setItem("numlvl", numlvl);

    localStorage.setItem("numl", numl);

    localStorage.setItem("onnum", onnum);

    localStorage.setItem("nnum", nnum);

    localStorage.setItem("nrnum", nrnum);

    localStorage.setItem("mest", mest);

    localStorage.setItem("car", car);
}

function load0() {
    var namenum1 = localStorage.getItem("Savename");
    namenum = namenum1;

    var e1 = localStorage.getItem("nume");
    var e = Number.parseInt(e1);
    nume = e;

    var w1 = localStorage.getItem("numw");
    var w = Number.parseInt(w1);
    numw = w;

    var c1 = localStorage.getItem("numc");
    var c = Number.parseInt(c1);
    numc = c;

    var m1 = localStorage.getItem("numm");
    var m = Number.parseInt(m1);
    numm = m;

    var l1 = localStorage.getItem("numl");
    var l = Number.parseInt(l1);
    numl = l;

    var lvl1 = localStorage.getItem("numlvl");
    var lvl = Number.parseInt(lvl1);
    numlvl = lvl;

    var op1 = localStorage.getItem("numop");
    var op = Number.parseInt(op1);
    numop = op;

    var on1 = localStorage.getItem("onnum");
    var on = Number.parseInt(on1);
    onnum = on;

    var n1 = localStorage.getItem("nnum");
    var n = Number.parseInt(n1);
    nnum = n;

    var nr1 = localStorage.getItem("nrnum");
    var nr = Number.parseInt(nr1);
    nrnum = nr;

    var mest1 = localStorage.getItem("mest");
    mest = mest1;

    var car1 = localStorage.getItem("car");
    car = car1;
}

function LVLUP() {
    // обнуляем счетчик нашего уровня
    numl = 0;

    var leavel = doc.getElementById("L");

    leavel.innerHTML = numl;
    // обнуляем счетчик нашего уровня

    // прибавляем 50 к нужному значению опыта
    numop += 50;

    var OPT = doc.getElementById("OL");

    OPT.innerHTML = numop;
    // прибавляем 50 к нужному значению опыта

    // прибавляем к уровню 1
    var L = doc.getElementById("LVL");

    numlvl += 1;

    L.innerHTML = numlvl;

    // прибавляем к уровню 1
    var audio = new Audio();
    audio.src = "Аудио/levelup.mp3";
    audio.autoplay = true;
    audio.autoplay = true;
}

function NAVUP() {
    // обнуляем счетчик нашего уровня
    onnum = 0;
    // обнуляем счетчик нашего уровня

    // прибавляем 50 к нужному значению опыта
    nnum += 50;
    // прибавляем 50 к нужному значению опыта

    // прибавляем к уровню 1
    nrnum += 1;
    // прибавляем к уровню 1
}

function marpal01() {
    var mon1 = doc.getElementById("M");
    if (mest == "Палатка") {
        alert("У вас уже имеется палатка");
    } else if (mest == mest) {
        if (numm >= 500) {
            numm -= 500;
            mon1.innerHTML = numm;
            mest = "Палатка";
        } else {
            alert("Недостаточно денег");
        }
    }

}

function marsar01() {
    var mon1 = doc.getElementById("M");
    if (mest == "Сарай") {        
        alert("У вас уже имеется сарай");
    } else if (mest == mest) {
        if (numm >= 2500) {
            numm -= 2500;
            mon1.innerHTML = numm;
            mest = "Сарай";
        } else {
            alert("Недостаточно денег");
        }
    }

}

function marskate01() {
    var mon1 = doc.getElementById("M");
    if (car == "Скейт") {
        alert("У вас уже есть скейт");
    } else if (car == car) {
        if (numm >= 150) {
            numm -= 150;
            mon1.innerHTML = numm;
            car = "Скейт";

        } else {
            alert("Недостаточно денег");
        }
    }
   
}

function marvelo01() {
    var mon1 = doc.getElementById("M");
    
    if (car == "Велосипед") {
        alert("У вас уже есть велосипед");
    } else if (car == car) {
        if (numm >= 800) {
            numm -= 800;
            mon1.innerHTML = numm;
            car = "Велосипед";
        } else {
            alert("Недостаточно денег");
        }
    }
}

function oby() {
    alert("Обучение. \n Это симулятор жизни, вам нужно зарабатывать деньги, а так же \n восполнять свои показатели. У вас имеются 4 показателя: \n 1. Концентрация, тратится когда вы работате на работе. \n Восполнить ее можно в меню отдыха. \n 2. Еда тратится как при работе, так и при подработке, купить еду \n можно в магазине. \n 3. Жажда так же как и еда тратится при любой работе и подработки, а восполнить потребность можно в магазине. \n 4. Деньги, на них вы можете покупить еду, недвижимость, транспорт. \n В начале игры вам доступна только подработка. Ваша задача \n добиться высот, заработать много денег, купить все самое \n лучшее и просто наслаждаться простым геймплеем. \n P.S. Игра еще не полностью доделана, так что в ней не \n силишком много контента. \n Все свои предложение кидайте на почту yarygin.02@mail.ru")
}