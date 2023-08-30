const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Predator",
        price: 119,
        color: [
            {
                code: "white",
                img: "/img/Predator White.png",
            },
            {
                code: "orange",
                img: "/img/Predator Orange.png",
            },
            {
                code: "black",
                img: "/img/Predator Black.png",
            },
            {
                code: "pure white",
                img: "/img/Predator Pure White.png",
            },
        ],
    },
    {
        id: 2,
        title: "X Speedflow",
        price: 125,
        color: [
            {
                code: "white blue",
                img: "/img/X Speedflow White Blue.jpg",
            },
            {
                code: "red",
                img: "/img/X Speedflow Red.png",
            },
            {
                code: "gray",
                img: "/img/X Speedflow Gray.png",
            },
            {
                code: "blue",
                img: "/img/X Speedflow Blue.png",
            },
        ],
    },
    {
        id: 3,
        title: "Copa Sense",
        price: 130,
        color: [
            {
                code: "blue",
                img: "/img/Copa Sense Blue.jpg",
            },
            {
                code: "grey",
                img: "/img/Copa Sense Grey.png",
            },
            {
                code: "yellow",
                img: "/img/Copa Sense New.png",
            },
            {
                code: "silver",
                img: "/img/Copa Sense Star.png",
            },
        ],
    },
    {
        id: 4,
        title: "Ace",
        price: 140,
        color: [
            {
                code: "white",
                img: "/img/Ace White.jpg",
            },
            {
                code: "green",
                img: "/img/Ace Green.png",
            },
            {
                code: "CYAN",
                img: "/img/Ace Blue.png",
            },
            {
                code: "blue",
                img: "/img/Ace black blue.png",
            },
        ],
    },
    {
        id: 5,
        title: "Deportivo",
        price: 145,
        colors: [
            {
                code: "white",
                img: "/img/Deportivo White.jpg",
            },
            {
                code: "black",
                img: "/img/Deportivo Black.png",
            },
            {
                code: "blue",
                img: "/img/Deportivo Blue.png",
            },
            {
                code: "pink",
                img: "/img/Deportivo Pink.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.color[0].img; 

        //assign new colors
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.color[index].code;
        });
    });
});


        currentProductColors.forEach((color,index) =>{
            color.addEventListener("click", ()=>{
                currentProductImg.src = choosenProduct.color[index].img
    });
});
        //mag pili ka size
        currentProductSizes.forEach((size,index) => {
            size.addEventListener("click",  () =>{
                currentProductSizes.forEach((size) => {
                    size.style.backgroundColor= "white"
                    size.style.color= "black"
                });
                size.style.backgroundColor= "black"
                size.style.color= "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})

