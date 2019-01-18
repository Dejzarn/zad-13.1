'use strict';

var data = [{
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
    },
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
    },
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
    },
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
    },
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
    },
];

var boxes = document.getElementsByTagName('div');
var headerCategories = [];
var boxCategories = [];

for (var i = 0; i < data.length; i++) {
    document.write('<div><header>' + data[i].title + '</header>' + data[i].content + '</div>');
    boxes[i].classList.add('box');
    boxes[i].id = data[i].id;

};

//znajdź header i wstaw mu klasę 
const addHeaderClass = function (className) {
    for (var i = 0; i < boxes.length; i++) {
        var idCaught = document.getElementById('box' + (i + 1));
        var headerInBox = idCaught.getElementsByTagName('header');
        // console.log(headerInBox[i]);
        headerInBox[i].classList.add(className);
    }
}
for (var j = 0; j < data.length; j++) {
    var box = boxes[j];
    // console.log(box);
    for (var i = 0; i < data[j].categories.length; i++) {
        if (data[j].categories[i] !== 'special-header') {
            console.log(data[j].categories[i]);
            box.classList.add(data[j].categories[i]);
        } else {
            addHeaderClass(data[j].categories[i]);
            // addHeaderClass('special-header');
        }

    }
}

//działająca pętla treningowa
/*
for (var i = 0; i < boxes.length; i++) {
    var idCaught = document.getElementById('box' + (i + 1)); //konkatenacja pozwoli mi znaleźć boksy po kolei
    console.log(idCaught);
}
*/