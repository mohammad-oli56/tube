function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => display(data.categories))
}

function display(display) {
    const categoryContainer = document.getElementById("category-container");

    for (let dis of display) {
        const creatdiv = document.createElement("div");
        creatdiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${dis.category}</button>
    `
        categoryContainer.append(creatdiv)
    }


}

function loadvides() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((respons) => respons.json())
        .then((data) => disvideos(data.videos
        ))
}

const disvideos = (videos) => {

    const videoSection = document.getElementById("video-section");

    videos.forEach(video => {

        console.log(video)

        const videodiv = document.createElement("div")

        videodiv.innerHTML = `
        
         <div class="card bg-base-100 ">
                <figure class="relative">
                    <img class=" w-full lg:h-48 md:h-48 object-cover" src="${video.thumbnail} " />

                    <span class="right-2 bottom-2  bg-black rounded-md px-1 absolute text-white">3hrs 56 min ago</span>
                </figure>

                   
                    <div class="card-body px-1  flex flex-row gap-3">

                      <div class="mt">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                              <img src="${video.authors[0].profile_picture}" />
                            </div>
                          </div>
                          
                      </div>

                      <div>
                        <h1 class="font-bold pt-0">${video.title}</h1>
                        <p class="flex gap-2">${video.authors[0].
                profile_name
            } <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=SRJUuaAShjVD&format=png" alt=""></p>
                        <p>${video.others.views} views</p>
                      </div>
                      
                    </div>
                  

            </div>
        
        `

        videoSection.append(videodiv)

    });
}

loadCategories()
loadvides()