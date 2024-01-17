const reviews = [
    {
    id: 1,
    name: "sara jones",
    job: "ux designer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.I'm baby meggings twee health goth .I'm baby meggings twee health goth . Natus, eaque ipsam? Nostrum a voluptatibus ut distinctio illo inventore cumque. Cupiditate.",
},{
    id: 2,
    name: "rachel ",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "I'm baby meggings twee health goth . Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},{
    id: 3,
    name: "peter jones",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: " Bicycle rights tumeric chartreuse before they sold out bicycle rights chambray pop-up.I'm baby meggings twee health goth +1. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},{
    id: 4,
    name: "steve smith",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.", 
}
]

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//starting item
let currentItem = 0;

//load current item
window.addEventListener('DOMContentLoaded' , function(){
    showPerson();
});

//show person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click' , function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(); 
})
prevBtn.addEventListener('click' , function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1 ;
    }
    showPerson(); 
})
randomBtn.addEventListener('click' , function(){
    randomfnc(); 
})

function randomfnc(){
    random =  Math.floor(Math.random() * 4);
    currentItem = random;
    showPerson();
}