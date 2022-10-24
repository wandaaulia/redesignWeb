let allImg = [
    '/assets/img3-thumb.png', '/assets/img2-thumb.png',
    '/assets/img1-thumb.jpg', '/assets/img4-thumb.png', '/assets/img5-thumb.png',
    '/assets/img6-thumb.png'
]

for (var i = 0; i < 2; i++) {
  var div = document.createElement("div");
  div.setAttribute("class", "icon-holder");
  setTimeout(function () {}, 1000);

for (var j = 0; j < allImg.length; j++) {
  allImg.map((item) => {
    var img = document.createElement("img");
    img.setAttribute("class", "icon");
    img.setAttribute("src", item);
    div.appendChild(img);
  })
}

  var innerview = document.getElementsByClassName("icon-section")[0];
  innerview.appendChild(div);
}


  let arr = [
    { img : '/assets/contents_img_001.png', 
   title : 'Character Design',
   desc: 'June 15, 2021'
  },
   { img : '/assets/contents_img_002.png', 
   title : 'Character Design',
   desc: 'June 15, 2021'
  },
   { img : '/assets/contents_img_003.png', 
   title : 'Character Design',
   desc: 'June 15, 2021'
  }
  ]
  
  var swiperrCon = document.getElementsByClassName("swiper-wrapper")[0];

  let output = '';

  arr.map((item) => {
     output = `
     <div class="swiper-slide slide">
              <div class="card-recent-work">
                <div class="img-card-work">
                  <img src=${item.img} />
                </div>
                <div class="desc-card-work">
                  <h4>${item.title}</h4>
                  <p>${item.desc}</p>
                </div>
              </div>
            </div>`;
            
            swiperrCon.innerHTML += output;
  })



var swiper = new Swiper(".team-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.7,
        },
           1024: {
            slidesPerView: 2.4,
        },
                1280: {
            slidesPerView: 3,
        },
    },
});