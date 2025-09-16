 // Explore Menu Items
  const exploreAll = [
    { 
      img: "images/promotion.png",
     tital: "Promotion" 
    },

    { 
      img: "images/everyday-value.png",
     tital: "Everyday Value"
     },

    { 
      img: "images/ala-carte-&-combos.png",
     tital: "Ala Carte & Combos" 
    },

    { 
      img: "images/signature-boxes.png",
     tital: "Signature Boxes" 
    },

    { 
      img: "images/sharing.png",
       tital: "Sharing" 
    },
    { 
      img: "images/snaks-&-baverages.png",
       tital: "Snaks & Beverages" 
    },

    { 
      img: "images/midnight-(start-at-12-am).png",
       tital: "Midnight (12 am)"
    },
  ];

  // Render explore cards
  exploreAll.forEach((print) => {
    let card = `
      <div class="exploreMenu ms-3">
        <div>
          <img src="${print.img}" class="d-block mx-auto" alt="Menu">
          <h5 class="exploreMenuHeading text-white text-center mt-2">${print.tital}</h5>
          <p class="lineee linee"></p>
        </div>
      </div>
    `;
    document.getElementById("exploreSlider").innerHTML += card;
  });

  // Explore slider functionality
  const exploreContainer = document.getElementById("exploreSlider");
  const exploreNext = document.getElementById("exploreNext");
  const explorePrev = document.getElementById("explorePrev");

  const exploreScroll = 250;

  // Right
  exploreNext.addEventListener("click", () => {
    exploreContainer.scrollBy({ left: exploreScroll, behavior: "smooth" });
  });

  // Left
  explorePrev.addEventListener("click", () => {
    exploreContainer.scrollBy({ left: -exploreScroll, behavior: "smooth" });
  });

  // Auto scroll
  setInterval(() => {
    exploreContainer.scrollBy({ left: exploreScroll, behavior: "smooth" });

    if (exploreContainer.scrollLeft + exploreContainer.clientWidth >= exploreContainer.scrollWidth) {
      exploreContainer.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 5000);

  
 //BEST SELLER

 const bestSeller = [
  {
    title : 'Krunch Burger',
    rs : 'Rs',
    price : '310',
    img : "images/Krunch-Burger.png"
  },

  {
    title : 'Krunch Combo',
    rs : 'Rs',
    price : '590',
    img : "images/Krunch-Combo.png"
  },

  {
    title : 'Chicken & Chips',
    rs : 'Rs',
    price : '620',
    img : "images/Chicken-&-Chips.png"
  },

  {
    title : 'Hot Wings Bucket',
    rs : 'Rs',
    price : '670',
    img : "images/Hot-Wings-Bucket.png"
  },

  {
    title : 'Mighty Zinger',
    rs : 'Rs',
    price : '770',
    img : "images/Mighty-Zinger.png"
  },
]

bestSeller.map((print)=>{
  let bestSeller = `
   <div class="BestSellerMenu ">
    <!-- TOP 3 LINES -->
    <div class="text-center d-flex justify-content-center"">
    <span><p class="redbox me-2"></p></span>
    <span><p class="redbox me-2"></p></span>
    <span><p class="redbox"></p></span>
    </div>
    <!-- MENUS NAME -->
    <div class="d-flex justify-content-start ms-3">
    <h4 class="text-white fw-semibold">${print.title}</h4>
    </div>
    <!-- PRICE -->
    <div class="d-flex justify-content-end me-3">
    <h4 class="text-white Price fw-semibold px-3"><span class="Rs">${print.rs}</span>${print.price}</h4>
    </div>
    <!-- IMAGE -->
    <img src=${print.img} alt="Img Not Found">
  </div>
  `
  document.getElementById('bestSeller').innerHTML += bestSeller
})

//TOP DEALS API
const topDeals = [

  {
    img :"images/Crispy-Duo-Box.png",
    title :'Crispy Duo Box',
    paragraph :'Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 drinks',
    rs :'Rs',
    price :'1350',
  },

   {
    img :"images/Xtreme-Duo-Box.png",
    title :'Xtreme Duo Box',
    paragraph :'The irresistible combo of 2 Signature Zingers + 2 pcs Hot + 1 Large fries + 2 drinks',
    rs :'Rs',
    price :'1560',
  },

   {
    img :"images/Value-Bucket.png",
    title :'Value Bucket',
    paragraph :'Enjoy 9 pcs of our Signature Crispy Fried Chicken, hand-breaded',
    rs :'Rs',
    price :'2050',
  },

   {
    img :"images/Family-Festival-3.png",
    title :'Family Festival',
    paragraph :'An ultimate meal for the fam. It includes 4 Zinger burgers',
    rs :'Rs',
    price :'2590',
  }
];

topDeals.map((print)=>{
  let topDeal = `

   <div class="TopDealsMenu position-relative">
    <!-- FAVOURITE -->
   <i class="favourite ri-heart-line position-absolute top-0 end-0 me-2"></i>
   <!-- TOP 3 LINES -->
    <div class="d-flex justify-content-center">  
    <span><p class="redbox me-2"></p></span>
    <span><p class="redbox me-2"></p></span>
    <span><p class="redbox"></p></span>
    </div>
    <!-- IMAGE -->
    <img src=${print.img} alt="Krunch Burger">
    <!-- MENUS NAME -->
    <div class="d-flex justify-content-start  ms-2">
    <h4 class="text-white fw-bold fs-5">${print.title}</h4>
    </div>
    <p class="text-white fw-semibold ms-2">${print.paragraph}</p>
    <!-- PRICE -->
     <div class="d-flex justify-content-start ms-2">
    <h4 class=" text-white fw-bold fs-5"><span class="Rs me-1">${print.rs}</span>${print.price}</h4>
    </div>
    <!-- BUTTON -->
    <button class="addbucket fw-semibold">+ ADD TO BUCKET</button>
  </div>
  `
  document.getElementById('topDeal').innerHTML += topDeal
})

//FAVOURITE HEART
  
let favs = document.querySelectorAll('.favourite');

favs.forEach(fav => {
  fav.addEventListener('click', () => {
    fav.classList.toggle('ri-heart-line');  // empty heart
    fav.classList.toggle('ri-heart-fill');  // filled heart
    fav.classList.toggle('text-danger');       // red color
  });
});