let apikey = 'api_key=a80f36c17b0918c471d865b9c6e67189';
let apibase = "https://api.themoviedb.org/3";
let imageurl = "http://image.tmdb.org/t/p/original/";
let reqests = {
    fetchtrend: `${apibase}/discover/tv?${apikey}`,
};

fetch(reqests.fetchtrend)
    .then((res) => res.json())
    .then((date) => {
        // console.log(date) 
        let pannal = date.results[Math.floor(Math.random()* date.results.length - 1)];
        console.log(pannal)
        document.getElementById('title').innerHTML = pannal.name;
        document.getElementById('desc').innerHTML = pannal.overview.substr(0, 60);
        document.getElementById('Fsec').style.backgroundImage = `URL(${imageurl + pannal.backdrop_path
            })`
    })



//    fetch(reqests.fetchPopular)
//     .then((respone) => respone.json())
//     .then((date) => {
//         //console.log(date)
//         date.results.forEach((movie) => {
//             let sweiper = document.getElementById('sliderSec');
//             let div = document.createElement('div');
//             div.classList.add('swiper-slide');
//             sweiper.appendChild(div);
//             div.innerHTML = `
//              <img src=${imgUrl + movie.backdrop_path
//                 } alt="" class="movieimg" >
//             <div class="detailsDiv">
//              <img src=${imgUrl + movie.backdrop_path} alt="">
//              <div class="detailss">
//              <div class="iconsdetail">
//              <div>
//              <i class="fa-solid fa-play"></i>
//              <i class="fa-solid fa-plus"></i>
//             <i class="fa-solid fa-thumbs-up"></i>
//              <i class="fa-solid fa-thumbs-down"></i>
//             </div>
//             <i class="fa-solid fa-caret-down"></i>
//             </div>
//             <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
//             <p>${movie.overview.substr(0, 50)}</p>
//             </div>
//              </div>`
//         })    // console.log(sweiper);
//     })


// fetch(requests.fetchNetflixOrignals)
//   .then((res) => res.json())
//   .then((data) => {
//     data.results.forEach((movie) => {
//       const movieSlider = document.getElementById("originalslider");
//       const div = document.createElement("div");
//       div.classList.add("swiper-slide");
//       movieSlider.appendChild(div);
//       div.innerHTML = `
//             <img src=${
//                 imgUrl + movie.backdrop_path
//             } alt="" class="movieimg" >
//             <div class="detailsDiv">
//             <img src=${imgUrl + movie.backdrop_path} alt="">
//             <div class="detailss">
//             <div class="iconsdetail">
//             <div>
//             <i class="fa-solid fa-play"></i>
//             <i class="fa-solid fa-plus"></i>
//             <i class="fa-solid fa-thumbs-up"></i>
//             <i class="fa-solid fa-thumbs-down"></i>
//             </div>
//             <i class="fa-solid fa-caret-down"></i>
//             </div>
//             <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
//             <p>${movie.overview.substr(0, 50)}</p>
//             </div>
//             </div>
//     `;
//     });
//   });
