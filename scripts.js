$("#click-button").click(function(){
    const pokemonInput = $("#names").val()
$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonInput}/`,
    success: function(data){
        console.log(data)
        $("#pokemonName").html(data.name)
        const pic = data.sprites.front_default
        $("#pic").attr("src", pic)
       
    },
    error: function(request, error)
    {
       alert("not a valid pokemon")
    }
});
})
