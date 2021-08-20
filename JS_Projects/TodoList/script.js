var listItems = document.getElementsByTagName('LI');

var i;

for(i-0; i<listItems.length; i++){
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    listItems[i].appendChild(span);
}

// click on a close button to hide the current list
var close = document.getElementsByClassName('close');
var i;

for(i=0; i< close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display="none";

    }
}

var list = document.querySelector('ul');
list.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
},false);

function newElement (){
    var li = document.createElement('li');
    var inputValue = document.getElementById('item').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert('this field cannot be empty');
    }else{
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('item').value = '';

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('/u00D7');
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}