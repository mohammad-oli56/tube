function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>display(data.categories))
}

function display(display){
   const categoryContainer = document.getElementById("category-container");

   for (let dis of display){
    const creatdiv = document.createElement("div");
    creatdiv.innerHTML=`
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${dis.category}</button>
    `
    categoryContainer.append(creatdiv)
   }

  
}

function loadvides (){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((respons)=>respons.json())
    .then((data)=>disvideos(data.videos
    ))
}

const disvideos = (videos) =>{

    const videoSection = document.getElementById("video-section");

    videos.forEach(video => {
        
        console.log(video)

        const videodiv = document.createElement("div") 

        videodiv.innerHTML = `
        
        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p></p>
    <div class="card-actions justify-end">
     
    </div>
  </div>
</div>
        
        `

        videoSection.append(videodiv)

    });
}

loadCategories()
loadvides ()