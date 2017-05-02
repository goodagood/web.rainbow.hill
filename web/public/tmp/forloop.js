

var links = [];
for(var i=0; i<5; i++) {
    links.push({onclick: function() { console.log('link: ', i); }});
}
 
links[0].onclick(); // link: 5
links[1].onclick(); // link: 5
