
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


function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D]  hover:text-white">${cat.category}</button>
    `;
    categoryContainer.append(categoryDiv);
  }
}

loadCategories ();
loadVideos();