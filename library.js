document.body.style.height = '100vh';

document.getElementById('setting').style.position = 'absolute';
document.getElementById('setting').style.top = '500px';
document.getElementById('setting').style.left = '500px';

document.getElementById('btn-setting').style.position = 'relative';
document.getElementById('btn-setting').style.top = '750px';
document.getElementById('btn-setting').style.left = '500px';

document.getElementById('text').style.textAlign = 'center';
document.getElementById('photo').style.width = '20vw';
document.getElementById('photo').style.height = '40vh';
document.getElementById('photo').style.display = 'block';
document.getElementById('photo').style.marginLeft = 'auto';
document.getElementById('photo').style.marginRight = 'auto';

document.getElementById('setting1').style.position = 'absolute';
document.getElementById('setting1').style.top = '1500px';
document.getElementById('setting1').style.left = '500px';

document.getElementById('btn-setting1').style.position = 'absolute';
document.getElementById('btn-setting1').style.top = '2000px';
document.getElementById('btn-setting1').style.left = '500px';

document.getElementById('text1').style.textAlign = 'center';
document.getElementById('text1').style.position = 'absolute';
document.getElementById('text1').style.top = '1400px';
document.getElementById('text1').style.left = '200px';

$('.book').textillate({ in: { effect: 'rotateIn' } });
$('#text').textillate();
$('.name').textillate();

$('.book1').textillate({ in: { effect: 'rotateIn' } });
$('#text1').textillate();
$('.name1').textillate();

var dis = document.getElementById('display');
dis.style.width = '80vw';
dis.style.position = 'absolute';
dis.style.top = 1300 + "px";
dis.style.left = 100 + "px";
dis.style.background = '#a5d6a7';

var dis1 = document.getElementById('display1');
dis1.style.width = '80vw';
dis1.style.position = 'absolute';
dis1.style.top = 2500 + "px";
dis1.style.left = 100 + "px";
dis1.style.background = '#a5d6a7';

var add = $('#buttonAdd');
add.on(
    {
        'mouseover' : function(){
            add.css("width", "10vw");
            add.css("height", "5vw");
            add.css("font-size", "20px");
            add.css("color", "blue");
        },
        'mouseup' : function(){           
            add.css("color", "red");
        },
        'mousedown' : function(){           
            add.css("color", "orange");
        },
        'click' : function(){   
            if ($('#firstName').val()=="" || $('#lastName').val()=="" || $('#email').val()=="" || $('#phone').val()=="" || $('#address').val()=="") {
                dis.style.textAlign = 'center';
                dis.innerHTML = "<p>Please Fill All the Fields</p>";
            } else {
                dis.style.textAlign = 'center';
                dis.innerHTML = '';
                dis.innerHTML += "<p>"+ $('#firstName').val() + "</p>";
                dis.innerHTML += "<p>"+ $('#lastName').val() + "</p>";
                dis.innerHTML += "<p>"+ $('#email').val() + "</p>";
                dis.innerHTML += "<p>"+ $('#phone').val() + "</p>";
                dis.innerHTML += "<p>"+ $('#address').val() + "</p>";  
            }         
                    
        }
    }
);

var cancel = $('#buttonCancel');
cancel.on(
    {
        'mouseover' : function(){
            cancel.css("width", "10vw");
            cancel.css("height", "5vw");
            cancel.css("font-size", "20px");
            cancel.css("color", "blue");
        },
        'mouseup' : function(){           
            cancel.css("color", "red");
        },
        'mousedown' : function(){           
            cancel.css("color", "orange");
        },
        'click' : function(){  
            $('#firstName').val('');
            $('#lastName').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#address').val('');
            dis.innerHTML = '';
        }
    }
);
var add1 = $('#buttonAdd1');
add1.on(
    {
        'mouseover' : function(){
            add1.css("width", "10vw");
            add1.css("height", "5vw");
            add1.css("font-size", "20px");
            add1.css("color", "blue");
        },
        'mouseup' : function(){           
            add1.css("color", "red");
        },
        'mousedown' : function(){           
            add1.css("color", "orange");
        },
        'click' : function(){   
            if ($('#firstName1').val()=="" || $('#lastName1').val()=="" || $('#email1').val()=="" || $('#phone1').val()=="" || $('#address1').val()=="") {
                dis1.style.textAlign = 'center';
                dis1.innerHTML = "<p>Please Fill All the Fields</p>";
            } else {
                dis1.style.textAlign = 'center';
                dis1.innerHTML = '';
                dis1.innerHTML += "<p>"+ $('#firstName1').val() + "</p>";
                dis1.innerHTML += "<p>"+ $('#lastName1').val() + "</p>";
                dis1.innerHTML += "<p>"+ $('#email1').val() + "</p>";
                dis1.innerHTML += "<p>"+ $('#phone1').val() + "</p>";
                dis1.innerHTML += "<p>"+ $('#address1').val() + "</p>";  
            }         
                    
        }
    }
);

var cancel1 = $('#buttonCancel1');
cancel1.on(
    {
        'mouseover' : function(){
            cancel1.css("width", "10vw");
            cancel1.css("height", "5vw");
            cancel1.css("font-size", "20px");
            cancel1.css("color", "blue");
        },
        'mouseup' : function(){           
            cancel1.css("color", "red");
        },
        'mousedown' : function(){           
            cancel1.css("color", "orange");
        },
        'click' : function(){  
            $('#firstName1').val('');
            $('#lastName1').val('');
            $('#email1').val('');
            $('#phone1').val('');
            $('#address1').val('');
            dis1.innerHTML = '';
        }
    }
);
