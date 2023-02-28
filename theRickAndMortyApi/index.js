/*api*/ 
const card = document.querySelector(".card");

const fetchCharacter = async ()=>{
    const res = await fetch("https://rickandmortyapi.com/api/character");    
    if(!res.ok) throw new Error("fetchCharacter");
    try{
        const Data= await res.json();
        return Data.results;
    }catch(err){
        console.error(err);
    }
    
}
const fetchLocation = async ()=>{
    const res = await fetch("https://rickandmortyapi.com/api/location");
    const locationData= await res.json();
    return locationData.results;
}
const fetchEpisode = async ()=>{
    const res = await fetch("https://rickandmortyapi.com/api/episode");
    const episodeData= await res.json();
    return episodeData.results;
}

const fetchData = async ()=>{

const characterData= await fetchCharacter();
const locationData=await fetchLocation();
const episodeData= await fetchEpisode();

characterData.map((product,index)=>{
    console.log(product)
})
}

fetchData();





/* <script>
        $(document).ready(function () {
            $('.card').DataTable({ //table id->example
                "ajax": { 
                    "url": "https://rickandmortyapi.com/api/character", //api url
                    "dataSrc": ""
                },
                
            });
            $.ajax({
                url: "https://rickandmortyapi.com/api/character/1",
                type: 'GET',
                dataType: 'json', // added data type
                success: function (res) { //res: respond
                    console.log(res);
                    $(".cardTitle").append();
                    
                }
            });
        });
    </script> */
    