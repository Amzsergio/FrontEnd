var URL = "http://localhost:5000/amigos";

let printFriends = function(){
    $('#lista').empty();
    $.get(`${URL}`, function(friends){
        friends.forEach(friend => {
/*             let li = document.createElement('li');
            li.id = friend.id;
            li.innerHTML =friend.name
            let list = document.getElementById('lista')
            list.appendChild(li) */

            $("#lista").append(`<li id="${friend.id}">${friend.name} <button id="${friend.id}" onclick="deleteFriend(${friend.id})" >X</button></li>`)
        });
    })
};

$('#boton').click(printFriends);

let searchFriend = function(){
    let input = $("#input").val();
    if(input){
        $.get(`${URL}/${input}`, function(friend){
            console.log(friend)
            $('#amigo').text(` El nombre de mi amigo es ${friend.name} y tiene ${friend.age} anios, puedes contactarlo al email ${friend.email}`);
        });

        $('#input').val("")
    }else{
        $('#amigo').text("Es necesario un id")
    }
};

$("#search").click(searchFriend);

let deleteFriend = function(deleteButton){
    let input;

    if( typeof deleteButton === "number"){
        input = deleteButton;
    }else {    
        input = $("#inputDelete").val();
    }

    let deletedFriend;

    if(input){
        $.get(`${URL}/${input}`, function(friend){
            deletedFriend = friend.name;
        });

        $.ajax({
            url:`${URL}/${input}`,
            type: "DELETE",
            success: function(){
                $("#success").text(`Tu amigo ${deletedFriend} ha sido eliminado`);
                $("#inputDelete").val("")
                printFriends()
            }
        })
    }else{
        $("#success").text("Por favor, ingresa un id para eliminar")
    }
}

$("#delete").click(deleteFriend);