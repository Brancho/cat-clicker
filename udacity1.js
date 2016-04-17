var cats = [
  {
    name: "Cat1",
    pic: "../cat1.jpg"
  },
  {
    name: "Cat2",
    pic: "../cat2.jpg"
  },
  {
    name: "Cat3",
    pic: "../cat3.jpg"
  },
  {
    name: "Cat4",
    pic: "../cat4.jpg"
  },
  {
    name: "Cat5",
    pic: "../cat5.jpg"
  },
  {
    name: "Cat6",
    pic: "../cat6.jpg"
  },
  {
    name: "Cat7",
    pic: "../cat7.jpg"
  },
  {
    name: "Cat8",
    pic: "../cat8.jpg"
  },
  {
    name: "Cat9",
    pic: "../cat9.jpg"
  },
  {
    name: "Cat10",
    pic: "../cat10.jpg"
  }
];

var count = function(){
  var theCounter = event.target.closest('.catTab');
  var num = (Number(theCounter.childNodes[2].innerHTML)) + 1;
  theCounter.childNodes[2].innerHTML = num;
};




var showCat = function(){
var allImgs = document.querySelectorAll('.catTab');
for(var i = 0; i < allImgs.length; i++) {
    allImgs[i].style.display = 'none';
    if(allImgs[i].id == event.target.innerHTML) {
      allImgs[i].style.display = 'block';
    }
  }
};



for(var i = 0; i < cats.length; i++){

var el = document.createElement("LI");
el.addEventListener('click', showCat);
el.innerHTML = cats[i].name;

var catTab = document.createElement("DIV");
catTab.setAttribute("class", "catTab");
catTab.setAttribute("id", "Cat" + (i+1));

var catPic = document.createElement("IMG");
catPic.src = cats[i].pic;
catPic.addEventListener('click', count);

var catName = document.createElement("SPAN");
catName.setAttribute("class", "name");
catName.innerHTML = cats[i].name

var catCounter = document.createElement("SPAN");
catCounter.setAttribute("class", "count");
catCounter.innerHTML = 0;

var list = document.getElementsByTagName('ul')[0];
var displayCats = document.getElementsByClassName('displayCats')[0];

list.appendChild(el);
displayCats.appendChild(catTab);
catTab.appendChild(catPic);
catTab.appendChild(catName);
catTab.appendChild(catCounter);
}
