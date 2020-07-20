// input event
function get_list(){
    // enter
    if(window.event.keyCode == 13){
        var input = document.getElementById("todoinput").value;
        var addlist = document.createElement("li"); 
        addlist.innerHTML = input;
        document.getElementById("list").appendChild(addlist);
        document.getElementById("todoinput").value=" ";
    }
}