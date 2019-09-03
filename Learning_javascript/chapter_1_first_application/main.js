// console.log('main.js loaded');

$(document).ready(function() {
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    var tool = new Tool();
    
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';

    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello World';
    
    tool.onMouseDown = function(event) {
        // var c = Shape.Circle(event.point.x, event.point.y, 20);
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'magenta';
    }

    paper.view.draw();

    console.log('main.js loaded');
});