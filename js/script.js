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

for (var i = 0; i < data.length; i++) {
    var divs = document.createElement('div');
    var headers = document.createElement('header');
    divs.id = data[i].id;
    divs.appendChild(headers);
    headers.innerHTML = data[i].title;
    divs.innerHTML += data[i].content;
    // divs.className = data[i].categories.join(" "); // prosty sposob-rozdzielenie klas
    for (var j = 0; j < data[i].categories.length; j++) {
        divs.classList.add(data[i].categories[j]);
    }

    document.body.appendChild(divs);
}