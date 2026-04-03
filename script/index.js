
function loadCategories () {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then((data)=>displayCategories(data.categories));

}

function loadVideos(video) {
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos`
  )
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
     
}

const loadCategoryVideos = (id) => {
  const url=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>displayVideos(data.category));
}


function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D]  hover:text-white">${cat.category}</button>
    `;
    categoryContainer.append(categoryDiv);
  }
};

const displayVideos = (videos) => { 
  const videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.innerHTML=`
      <div class="card bg-base-100 shadow-sm">
  <figure class="relative">
    <img class="w-full h-[200px] object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
      <span class="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">3hours 36min 2sec</span>
  </figure>
  <div class="py-5 flex gap-3 px-0">
    <div class="profile">
      <div class="avatar">
  <div class="w-10 rounded-xl">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
    </div>
    <div class="intro">
      <h2 class=" text-lg font-semibold">Nature Window</h2>
      <p class=" text-sm  text-gray-500 flex gap-1 ">${video.authors[0].profile_name} 
        <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=FNbnqlDTjR45&format=gif&color=f7f7f7" alt="">
      </p>
      <p class=" text-sm  text-gray-500">${video.others.views} Views</p>
    </div>
  </div>
</div>
    `;
    videoContainer.append(videoDiv);
  });
};

loadCategories ();
// loadVideos();