let d = document, $Next = d.querySelector(".Next"), $Preview = d.querySelector(".Preview"),
$img = d.querySelector(".img-cont"), $name = d.querySelector(".api-name"),
$status = d.querySelector(".api-status"), $specie = d.querySelector(".api-specie");

let page = 1;
$Next.addEventListener("click", e =>{
    page ++;
    apiRick(page)
})

$Preview.addEventListener("click", e =>{
    if(page > 1){
        page --;
        apiRick(page)
    }
})

async function apiRick(page){
    let url = `https://rickandmortyapi.com/api/character/${page}`;
    try{
        let res = await fetch(url);
        json = await res.json();
        let apiRickMorty = json;
        console.log(apiRickMorty)
        $img.src = apiRickMorty.image;
        $name.innerHTML = apiRickMorty.name;
        $status.innerHTML = apiRickMorty.status;
        $specie.innerHTML = apiRickMorty.species;

    }catch(error) {
        let mensaje = error.statusText ||"ocurrio un error"

    } 

}

apiRick(page);