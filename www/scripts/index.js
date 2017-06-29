// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var premises;
var permalinkid;
var communicationid;
var flaglogin = 0;
var flagdata = 0;
var email;
var cartdata = "";
function cart()
{
    
    //cartdata = "";
// myNav.pushPage('cartpage.html', { animation: 'fade' });
//    var count = 1;
//    for (var i = 0; i < tempcart.length; i++)
//    {
//    if (tempcart[i][2]!=null) {
//            var itname = tempcart[i][0];
//            var tprice = tempcart[i][1];
//            var tqty = tempcart[i][2];
//            cartdata += ' <div class="wrapper"><div class="box">"X"</div> <div class="box" style="text-align:left;">' + itname + ' </div><div class="box">' + tqty + ' </div><div class="box">' + tprice + '</div></div><br>';
//        }
//        if (tempcart[i][1] == null) {  
//            break;
//        }
//    }
}
function cartloadf() {
    document.getElementById("orderinfo").innerHTML = cartdata;
}
var orderconts =0;
var tempcart = new Array(500);
var pcart = new Array(500);
var relatedcate=new Array(500);
var openArray = 0;
function ado() {
    var v=document.getElementById("product_qty_1").value;
    v++;
    document.getElementById("product_qty_1").value = v;
    add(globalname, globalprice);
}
function min() {
    var v = document.getElementById("product_qty_1").value;
    v--;
    document.getElementById("product_qty_1").value = v;
    if (v == 0)
    { var x = document.getElementById('adbtn');
        x.style.display = 'block';
        var y = document.getElementById('product_1');
        y.style.display = 'none';
        for (var i = 0; i < tempcart.length; i++) {
            if (tempcart[i][0] == globalname) {
                tempcart.splice(i, 1);
                document.getElementById("kg2").children[1].innerHTML = 0;
                document.getElementById("kg").children[1].innerHTML = 0;
                document.getElementById("kg1").children[1].innerHTML = 0;
                break;
            }
        }
    }
    else{
        rem(globalname, globalprice);
    }
}
var globalname = "";
var globalprice = "";
function rem(globalname, globalprice) {
    var count = 1;
    for (var i = 0; i < tempcart.length; i++) {
        if (tempcart[i][0] == globalname) {
            var a = 1;
            var exitingqty = tempcart[i][2];
            tempcart[i][2] = exitingqty - a;
            break;
        }
    }
}
function cartsave()
{
    var person = prompt("Please enter Table Number");
    if (person != null) {
        alert(person);
        for (var i = 0; i < tempcart.length; i++) {
            if (pcart[i][1] == "") {
                pcart[i][0] = tempcart[i][0];
                pcart[i][1] = tempcart[i][1];
                pcart[i][2] = tempcart[i][2];
                pcart[i][3] = person;
                if (tempcart[i + 1][2] == "")
                {    for (i = 0; i < 500; i++) {
                    tempcart[i] = new Array(500);
                    cart();
                    cartloadf();
                }
                    break;
                }
            }
            else {
                continue;
            }
        }
    }
}
function add(name, price)
{    globalname = name;
    globalprice = price;
    var count = 1;
    for (var i = 0; i < tempcart.length; i++) {
        if (tempcart[i][0] == name)
        { var a = 1;
            var exitingqty = tempcart[i][2];
            tempcart[i][2] = +exitingqty + +a;
            break;
        }
        if (tempcart[i][1] == null)
        {
            document.getElementById("product_qty_1").value = 1;
               tempcart[i][0] = name;
                tempcart[i][1] = price;
                tempcart[i][2] = count;
                orderconts = +i + +1;
                break;
        }   
    }
   // alert(orderconts);
    var x = document.getElementById('adbtn');
    x.style.display = 'none';
    var y = document.getElementById('product_1');
    y.style.display = 'flex';

    document.getElementById("kg2").children[1].innerHTML = orderconts;
    document.getElementById("kg").children[1].innerHTML = orderconts;
    document.getElementById("kg1").children[1].innerHTML = orderconts;
}
function menubutton() {
    myNav.pushPage('maincategory.html', { animation: 'fade' })
    
    //document.getElementById("kg").children[1].innerHTML = orderconts;  
}
var itemsllll ="";
function itemlistload()
{
    document.getElementById("itemslistt").innerHTML = itemsllll;
    document.getElementById("kg1").children[1].innerHTML = orderconts;
    document.getElementById("kg1").children[1].innerHTML = orderconts;
    //document.body.innerHTML = document.body.innerHTML.replace(/#CE23B0/g, colors);
}
var globalitemid = "";
var itemname = "";

var simg2="";
function categoryclick(val)
{  itemsllll = "";
    // alert(val);
myNav.pushPage('itemspage.html', { animation: 'fade' })
    var cat = myCategories[val][1];
    for (var i=0;i<myItems.length;i++)
    {

    if(myItems[i][8]==cat)
    {
        var img=myItemsimages[i][0];
         simg2 = img;
        if (img == null) {
            simg2 = 'images/thumb.jpg';
        }
       // alert(simg);
        itemname = myItems[i][1];
        globalitemid = myItems[i][0];
       itemsllll += '<div    onclick="singleitemdet(' + globalitemid + ')"        id="' + globalitemid + '"  class="box" style="height:27%;width:33%;margin-top:-6%;margin-left:0.33%"><p id="catname" style="font-family:tayyabregular;background-color:#CE23B0;padding-top:0%;padding-left:12%;height:15%;width:84%;opacity:0.8;margin-bottom:6%;font-size:28px;">' + itemname + '</p><img id="catimg" src="' + simg2 + '"   width="100" height="250"      style="width:96%;    max-height: 76%;margin-top:-21%;"/></div>';
    }
    }
   


    //  document.getElementById("kg1").children[1].innerHTML = orderconts; 
  
}
function back() {

    myNav.popPage();
}
var sellprice = "";
var preptime = "";
var itemtag = "";
var itemname = "";
var relatedcate = "";
var simg1 = "";
var imgt = "";
var itemiddb = "";
var discription = "";
var gesturea = new Array(100);
function singleitemdet(val)
{    relatedcate = "";
       var h=0;
       myNav.pushPage('singledetail.html', { animation: 'fade' });
    var itemidd = val;
    for (var i = 0; i < myItems.length; i++) {
        if (myItems[i][0] == itemidd) {
            itemnamet = myItems[i][1];
            globalitemid = myItems[i][0];
            discription = myItems[i][2];
            sellpricet = myItems[i][3];
            //sellpricet =sellpricet1.toFixed(2);
            preptimet = myItems[i][4];
            itemtagt = myItems[i][5];
            var catname = myItems[i][8];
            var img = myItemsimages[i][1];
            imgt = img;
            if (img == null) {
                imgt = 'images/main.jpg';
            }
        }
    }
    for (i = 0; i < 100; i++) {
        gesturea[i] = new Array(100);
    }
            for (var j = 0; j < myItems.length; j++) {
                if (myItems[j][8] == catname) {
                    itemiddb = myItems[j][0];
                    gesturea[h][0] = itemiddb;
                    h++;
                    var itemname = myItems[j][1];
                    var img = myItemsimages[j][0];
                   simg1 = img;
                    if (img == null) {
                        simg1 = 'images/thumb.jpg';
                    }
                    relatedcate += '<ons-carousel-item  onclick="relatedf(' + itemiddb + ')"   style=" cursor: pointer;background-color:white;height:93%;top:27px;"> <div id=id="' + itemiddb + 'r" style="display:none;margin-bottom:-9%;z-index: 1000;position:absolute;background-color:#CE23B0;width: 100%;opacity:0.8;color: white;font-family: tayyabbold;">' + itemname + '</div><img src="' + simg1 + '" style="height:100%;border-right:thick double white;max-width:99%;"/>  <div  style="opacity: 0.7;position:absolute;z-index: 2;margin-top:-25%;background-color: #CE23B0;color:white;font-family:tayyabmedium;padding-top:6%;font-size:23px;height:17%;padding-left:13%;width:87% !important;">' + itemname + ' </div></ons-carousel-item>';
                        }
            }
           }
var k = 0;
function ongesturel()
{    var a = gesturea[k][0];
    if (gesturea[k][0]!=null)
    {
        k++;
        relatedf(a);
    }
}
function ongesturer()
{
    var a = gesturea[k][0];
    if (gesturea[k][0] != null) {
        k--;
        relatedf(a);
    }
}
function relatedf(val)
{ var itemidd = val;
    for (var i = 0; i < myItems.length; i++) {
        if (myItems[i][0] == itemidd) {
            itemnamet = myItems[i][1];
            //alert(itemname);
            globalitemid = myItems[i][0];
            //alert(globalitemid);
            var x = document.getElementById('adbtn');
            x.style.display = 'none';
            var y = document.getElementById('product_1');
            y.style.display = 'none';
            sellpricet = myItems[i][3];
            discription = myItems[i][2];
            preptimet = myItems[i][4];
            itemtagt = myItems[i][5];
            var catname = myItems[i][8];
            var img = myItemsimages[i][0];
            imgt =img;
            if (img == null) {
                imgt = 'images/main.jpg';
            }
        }
    }
    document.getElementById("price").innerHTML = sellpricet + " AED";
   
    //document.getElementById("preptime").innerHTML = preptimet;
    //document.getElementById("tagss").innerHTML = itemtagt;
    document.getElementById("discription").innerHTML = discription;
    
    document.getElementById("slideitemname").innerHTML = itemnamet;
    document.getElementById("carousel").innerHTML = '<ons-carousel-item style="position:absolute;width:100%;height:100%;top:0px;visibility:visible;left:0%;transition:none;transform:translate3d(0px,0px,0px);"><img src="' + imgt + '"  style="width:100%;height:100%;"  /></ons-carousel-item> <ons-carousel-cover style="margin-top:9%;"></ons-carousel-cover>';
}
function onloadsinglledet() {
    document.getElementById("kg2").children[1].innerHTML = orderconts;
    var myElement = document.querySelector(".page__background");
    myElement.style.backgroundColor = "white";

    document.getElementById("price").innerHTML = sellpricet + " AED";
    //document.getElementById("preptime").innerHTML = preptimet;
    //document.getElementById("tagss").innerHTML = itemtagt;
    document.getElementById("discription").innerHTML = discription;
   
    document.getElementById("slideitemname").innerHTML = itemnamet;
    document.getElementById("carousel").innerHTML = ' <ons-carousel-item><img src="' + imgt + '"  style="width:100%;height:100%;"  /></ons-carousel-item> <ons-carousel-cover style="margin-top:9%;"></ons-carousel-cover>';
    document.getElementById("carousel1").innerHTML = relatedcate;
    //document.body.innerHTML = document.body.innerHTML.replace(/#CE23B0/g, colors);
}
var flagforfirst = 0;
function onloadofmaincate() {

 
    document.getElementById("main-categories").innerHTML = out;
    document.getElementById("kg").children[1].innerHTML = orderconts;
   
    if (isnet == 1) {
        localStorage.setItem('myItemsimages', JSON.stringify(myItemsimages));
        localStorage.setItem('alldata', JSON.stringify(alldata));
    }
  
    //document.body.innerHTML = document.body.innerHTML.replace(/#ce23b0/g, colors);
    //document.getElementById("kg").children[1].innerHTML = orderconts;
}
var id;
var pass;
function offline()
{
      id = localStorage.getItem('id1');
     pass = localStorage.getItem('pass1');
    if (id != null) {
        if (pass != null) {
            document.getElementById("email").value = id;
            document.getElementById("password").value = pass;
        }
    }

}
var isnet;
var myItemsimages;
function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    var file = "https://www.kirupa.com/blank.png";
    var randomNum = Math.round(Math.random() * 10000);
    xhr.open('HEAD', file + "?rand=" + randomNum, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e) {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 304) {
                alert("connection exists!");
                isnet = 1;
                login1();
            }
            else {

                alert("connection doesn't exist!");
                isnet = 0;
                var alldata = JSON.parse(localStorage.getItem('alldata'));
                 myItemsimages = JSON.parse(localStorage.getItem('myItemsimages'));
               
                businessname = alldata.data.settings.businessname;
                colors = alldata.data.settings.main_color;
                var addressline1 = alldata.data.settings.addressline1;
                var telephone = alldata.data.settings.telephone;
                var email = alldata.data.settings.email;
                var website = alldata.data.settings.website;
                var backgroundimage = alldata.data.settings.backgroundimagepath;
                if (backgroundimage != null) {
                    //var string = "https://emenu.evakodine.com/assets/images/global/" + backgroundimage;
                    //backimg = imagessave(string, backgroundimage);
                    backimg = 'images/8b3e759994cab48ef6c9cfce185ab002.png';
                }
                var busineeslogoreportspath = alldata.data.settings.businesslogoreportspath;
                if (busineeslogoreportspath != null) {
                    //var string1 = "https://emenu.evakodine.com/assets/images/global/" + busineeslogoreportspath;
                    //logoimg = imagessave(string1, busineeslogoreportspath);
                }
                var fileURL = "///storage/emulated/0/Android/data/io.cordova.myapp7c60cb/files/";
                for (var i = 0; i < alldata.data.categoriesdata.length; i++) {
                    myCategories[i] = new Array(10);
                    myCategories[i][0] = alldata.data.categoriesdata[i].categoryid;
                    myCategories[i][1] = alldata.data.categoriesdata[i].categoryname;
                    if (alldata.data.categoriesdata[i].imagepath == null) {
                        simg = 'images/thumb.jpg';
                    }
                    else {

                        simg = myCategories[i][2] = fileURL + alldata.data.categoriesdata[i].imagepath;
                    }
                    out += '<div onclick="categoryclick(' + i + ')" class="box" style="height:27%;width:33%;margin-top:-6%;margin-left:0.33%"><p id="catname" style="font-family:tayyabregular;background-color:#CE23B0;padding-top:0%;padding-left:12%;height:15%;width:84%;opacity:0.8;margin-bottom:6%;font-size:28px;">' + myCategories[i][1] + '</p><img id="catimg" src="' + simg + '"   width="100" height="250"     style="width:96%;max-height: 76%;margin-top:-21%;"/></div>';
                }

                for (var i = 0; i < alldata.data.itemsdata.length; i++) {
                    myItems[i] = new Array(alldata.data.itemsdata.length);
                   // myItemsimages[i] = new Array(alldata.data.itemsdata.length);
                    myItemsextra[i] = new Array(alldata.data.itemsdata.length);
                    myItems[i][0] = alldata.data.itemsdata[i].itemcode;
                    myItems[i][1] = alldata.data.itemsdata[i].itemname;
                    myItems[i][2] = alldata.data.itemsdata[i].description;
                    myItems[i][3] = alldata.data.itemsdata[i].sellingprice;
                    myItems[i][4] = alldata.data.itemsdata[i].preptime;
                    myItems[i][5] = alldata.data.itemsdata[i].itemtag;
                    myItems[i][6] = alldata.data.itemsdata[i].extra_tags;
                    myItems[i][7] = alldata.data.itemsdata[i].images;
                    myItems[i][8] = alldata.data.itemsdata[i].categoryname;
                    if (myItems[i][7] != null) {
                        for (var j = 0; j < alldata.data.itemsdata[i].images.length; j++) {
                            myItemsimages[i][j] = myItemsimages[i][0];
                            myItemsimages[i][1] = myItemsimages[i][1];
                        }
                    }

                    myItems[i][9] = alldata.data.itemsdata[i].extras;
                    if (myItems[i][9].images != null) {
                        for (var k = 0; k < alldata.data.itemsdata[i].extras.length; k++)
                            myItemsextra[i][k] = alldata.data.itemsdata[i].extras[k];
                    }

                } modal.hide();

                menu.setMainPage('first.html', { closeMenu: true });





            }
        }
    }
   
}


function login1(){
    for (i = 0; i < 30; i++) {
        relatedcate[i] = new Array(30);
    }
    var iddd = document.getElementById("email").value;
    var pss = document.getElementById("password").value;
    if (iddd == '') {
        alert("Email is empty");
    }
    else if (pss == '') {
        alert("Password is empty");
    }
    else{
         localStorage.setItem('id1', iddd);
         localStorage.setItem('pass1', pss);
        modal.show();
        var xmlhttp;
        var result;
        email = window.btoa(encodeURI(document.getElementById("email").value));
        var password = window.btoa(encodeURI(document.getElementById("password").value));
        var dataString = "email=" + email + "&password=" + password;
        var url = "https://www.evakodine.com/mobile/emenu/login_user";
      
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText) {
                var a = JSON.parse(xmlhttp.responseText);
                result = a.result;
                premises = a.premises;
                permalinkid = a.permalinkid;
                communicationid = a.communicationkey;
                dataget();  
                }     
            }
          
           
        };
        xmlhttp.open("GET", url + "?" + dataString, true);
        xmlhttp.send();
    }
    //modal.hide();
   
}
function firstet() {
    //StatusBar.hide();
    //FullScreen.show();
   
    document.getElementById("menuback").style.backgroundImage ="url('"+backimg+"')";
    document.getElementById('companytag').innerHTML = businessname;
   
    //document.getElementById("logo").src = logoimg;
}
var myCategories = new Array(10);
var myItems = new Array(30);
var myItemsimages = new Array(100);
var myItemsextra = new Array(10);
var out = "";
var businessname;
var backimg;
var logoimg;
var alldata = "";
var imgforcat = [];
var colors = "";
function dataget() {
    out = "";
    var xmlhttp;
    var premisesload = premises;
    var permalinkidload = permalinkid;
    var communicationkeyload = communicationid;
    var dataString = "communicationkey=" + communicationkeyload + "&permalink=" + permalinkidload + "&premises=" + premisesload;
    var url = "https://www.evakodine.com/mobile/emenu/data_sync";
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (xmlhttp.responseText) {
                alldata = JSON.parse(xmlhttp.responseText);
                businessname = alldata.data.settings.businessname;
                 colors = alldata.data.settings.main_color;
                var addressline1 = alldata.data.settings.addressline1;
                var telephone = alldata.data.settings.telephone;
                var email = alldata.data.settings.email;
                var website = alldata.data.settings.website;
                var backgroundimage = alldata.data.settings.backgroundimagepath;
                if (backgroundimage != null) {
                    var string = "https://emenu.evakodine.com/assets/images/global/"+backgroundimage;
                    backimg = imagessave(string,backgroundimage);
                    backimg = 'images/8b3e759994cab48ef6c9cfce185ab002.png';
                }
                var busineeslogoreportspath = alldata.data.settings.businesslogoreportspath;
                if (busineeslogoreportspath != null) {
                    var string1 ="https://emenu.evakodine.com/assets/images/global/"+busineeslogoreportspath;
                    logoimg = imagessave(string1, busineeslogoreportspath);
                }
                for (var i = 0; i < alldata.data.categoriesdata.length; i++) {
                    myCategories[i] = new Array(10);
                    myCategories[i][0] = alldata.data.categoriesdata[i].categoryid;
                    myCategories[i][1] = alldata.data.categoriesdata[i].categoryname;
                    myCategories[i][2] = alldata.data.categoriesdata[i].imagepath;
                    if (myCategories[i][2] == null) {
                        simg = 'images/thumb.jpg';
                    }
                    else
                    {
                        var si = "https://emenu.evakodine.com/assets/images/categories/thumb-" + myCategories[i][2];
                       simg = imagessave(si, myCategories[i][2]);       
                      }
                    out += '<div onclick="categoryclick(' + i + ')" class="box" style="height:27%;width:33%;margin-top:-6%;margin-left:0.33%"><p id="catname" style="font-family:tayyabregular;background-color:#CE23B0;padding-top:0%;padding-left:12%;height:15%;width:84%;opacity:0.8;margin-bottom:6%;font-size:28px;">' + myCategories[i][1] + '</p><img id="catimg" src="' + simg + '"   width="100" height="250"     style="width:96%;max-height: 76%;margin-top:-21%;"/></div>';
                }
            
                for (var i = 0; i < alldata.data.itemsdata.length; i++) {
                    myItems[i] = new Array(alldata.data.itemsdata.length);
                    myItemsimages[i] = new Array(alldata.data.itemsdata.length);
                    myItemsextra[i] = new Array(alldata.data.itemsdata.length);
                    myItems[i][0] = alldata.data.itemsdata[i].itemcode;
                    myItems[i][1] = alldata.data.itemsdata[i].itemname;
                    myItems[i][2] = alldata.data.itemsdata[i].description;
                    myItems[i][3] = alldata.data.itemsdata[i].sellingprice;
                    myItems[i][4] = alldata.data.itemsdata[i].preptime;
                    myItems[i][5] = alldata.data.itemsdata[i].itemtag;
                    myItems[i][6] = alldata.data.itemsdata[i].extra_tags;
                    myItems[i][7] = alldata.data.itemsdata[i].images;
                    myItems[i][8] = alldata.data.itemsdata[i].categoryname;
                    if (myItems[i][7] != null) {
                        for (var j = 0; j < alldata.data.itemsdata[i].images.length; j++)
                        {
                            var si = "https://www.evakodine.com/uploads/product/thumb-" + alldata.data.itemsdata[i].images[j].imagename;
                            var sa = "https://www.evakodine.com/uploads/product/" + alldata.data.itemsdata[i].images[j].imagename;

                            myItemsimages[i][j] = imagessave(si,"thumb-"+alldata.data.itemsdata[i].images[j].imagename);
                            myItemsimages[i][1] = imagessave(sa, alldata.data.itemsdata[i].images[j].imagename);
                        }


                    }
                    myItems[i][9] = alldata.data.itemsdata[i].extras;
                    if (myItems[i][9].images != null) {
                        for (var k = 0; k < alldata.data.itemsdata[i].extras.length; k++)
                            myItemsextra[i][k] = alldata.data.itemsdata[i].extras[k];
                    }
                   
                } modal.hide();

                menu.setMainPage('first.html', { closeMenu: true });
              

            }
        }
        
    }
    xmlhttp.open("GET", url + "?" + dataString, true);
    xmlhttp.send();
   
   
 };
function imagessave(url,name) {
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(url);
    //var fileURL = "images/" + name + "";
    //var fileURL = encodeURI(cordova.file.dataDirectory + name);
  //var fileURL = "///var/mobile/Containers/Data/Application/EB4C2F9A-9C4D-4CA6-BED0-D83B7D4CBDE1/Documents/"+ name + "";
   var fileURL = "///storage/emulated/0/Android/data/io.cordova.myapp7c60cb/files/"+name + "";
  //alert(fileURL);
   fileTransfer.download(
       uri, fileURL, function (entry) {
       },
       function (error) {
       },
       false, {
           headers: {
               "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
           }
       }
    );
    return fileURL;
}
(function () {
    "use strict";
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
       
        var parentElement = document.getElementById('deviceready');
      
    };
    function onPause() { 
    };

    function onResume() {
    };

}
)();