//  DOM
const playground = document.querySelector(".playground > ul");


//  Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;


//  Variables
let score = 0;
let durations = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
    tree : [
        [[0,0],[0,1],[1,0],[1,1]],
        [],
        [],
        [],
    ]


}
const movingItem = {
    type:"tree",
    direction:0,
    top: 0,
    left: 0,
}


init()

//functions

function init(){
        tempMovingItem = {...movingItem};
        for (let i=0; i < 20; i++){
          prependNewLine()
    }
    RenderBlocks()
}


function prependNewLine(){
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for(let j=0; j<10; j++){
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul);
    playground.prepend(li);
}

function RenderBlocks() {
    const { type, direction, top, left } = tempMovingItem;
    console.log(BLOCKS[type][direction])
    BLOCKS[type][direction].forEach(block => {
        const x = block[0];
        const y = block[1];
        console.log({playground})
        const target = playground.childNodes[y].childNodes[0].childNodes[x];
        target.classList.add(type);
    })
}