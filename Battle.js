// store player ships locations
let storeShips = [];
// store where the player had selected
let storeHits  = [];

// store where computer ships are at
let computerShips = [];
// track where the computer has call a shot
let computerHits = [];


 // represent the amount of sqare it will take up
let totalShipPlacement = 17;
let totalComputerShip = 0;



const create2D = () =>{
    let map = new Array(10)

    for (let i = 0; i < map.length; i++) {
        map[i] = new Array(10)
        
    }

    return map
}

// makes the maps and show it to the users
const createMap  = () =>{
    let container  = document.querySelector(".container");
    let grid = document.createElement('div');
 
    for(let y= 0; y < 10 ;y++){
      
        for(let x = 0; x< 10;x++){
            grid.appendChild(createNewX(x,y))
        }
        grid.appendChild(createNewLine())
    }
   container.append(grid)

}

// create a user interface for users to fire at the sqaure 

const createComputer = () =>{
    let computer  = document.querySelector(".computer");
    let grid = document.createElement('div');
 
    for(let y= 0; y < 10 ;y++){
      
        for(let x = 0; x< 10;x++){
            grid.appendChild(createNewX(x,y))
        }
        grid.appendChild(createNewLine())
    }
   computer.append(grid)

}

// the toools to make user interface
// starts a new line 
const createNewLine = () =>{
    let newLine = document.createElement('br');
    return newLine;
}
// creates a box with cords with dataset
const createNewX = (x,y)=>{
    let newX = document.createElement('span')
  
    newX.classList.add('x')
    newX.setAttribute('data-x',x)
    newX.classList.add('y')
    newX.setAttribute('data-y',y)

    return newX
}

// must make map here 
// !!! DON'T MOVES THIS WILL BREAK GAME !!!!
createMap()
createComputer()
// -----------------\


//  fireing willl store the hits that the player choose
// this will also determian if the space choose is a hit or miss
const firing = (e) =>{
    const box = e.target;
    console.log(box.dataset.x);
    console.log(box.dataset.y);
    storeHits.push({
        x: box.dataset.x,
        y: box.dataset.y
    })
    // console.log(storeHits);
    if(determineHit(box.dataset.x,box.dataset.y)){
        e.target.classList.add('hit')
    }
    else{
        e.target.classList.add('miss')
    }
    
    // 
    computerCallShot();
}


const makeShip = (start,direc) =>{
    const placement = document.querySelector('.placement');


     if(totalShipPlacement === 17){
    
          if(direc === 'left' ){

            totalShipPlacement = 12;
            for(let i = 0; i < 5; i++){

                storeShips.push({
                    x: parseInt(start.x)  - i,
                    y: parseInt(start.y)
                })
      
                showShips(parseInt(start.x) - i , parseInt(start.y))
            }
          }
          else if(direc === 'right'){
            totalShipPlacement = 12;
            for(let i = 0; i < 5; i++){

                storeShips.push({
                    x: parseInt(start.x) + i,
                    y: parseInt(start.y) 
                })
      
                showShips(parseInt(start.x) + i  , parseInt(start.y) )
            }
          }
          else if(direc ==='up'){
            totalShipPlacement = 12;
            for(let i = 0; i < 5; i++){

                storeShips.push({
                    x: parseInt(start.x) ,
                    y: parseInt(start.y) - i
                })
      
                showShips(parseInt(start.x)  , parseInt(start.y) - i)
            }
         
        }

          
          else if(direc ==='down'){
            totalShipPlacement = 12;
              for(let i = 0; i < 5; i++){

                  storeShips.push({
                      x: parseInt(start.x) ,
                      y: parseInt(start.y) + i
                  })
        
                  showShips(parseInt(start.x)  , parseInt(start.y) +i)
              }
           
          }
          while(placement.lastElementChild){
              placement.removeChild(placement.lastElementChild);
          }
          
     
     } 
     else if(totalShipPlacement === 12){

      
         if(direc === 'left'){
            totalShipPlacement = 8;
            for(let i = 0; i < 4; i++){

                storeShips.push({
                    x: parseInt(start.x)  - i,
                    y: parseInt(start.y)
                })
      
                showShips(parseInt(start.x) - i  , parseInt(start.y) )
            }

         }
         else if(direc === 'right'){
            totalShipPlacement = 8;
            for(let i = 0; i < 4; i++){

                storeShips.push({
                    x: parseInt(start.x) + i,
                    y: parseInt(start.y) 
                })
      
                showShips(parseInt(start.x) + i , parseInt(start.y) )
            }

         }
         else if(direc ==='up'){
            totalShipPlacement = 8;
            for(let i = 0; i < 4; i++){

                storeShips.push({
                    x: parseInt(start.x) ,
                    y: parseInt(start.y) - i
                })
      
                showShips(parseInt(start.x)  , parseInt(start.y) - i)
            }

         }
         else if(direc ==='down'){
      
             for(let i = 0; i < 4; i++){

                 storeShips.push({
                     x: parseInt(start.x) ,
                     y: parseInt(start.y)+i
                 })
       
                 showShips(parseInt(start.x)  , parseInt(start.y) +i)
             }
             totalShipPlacement  = 8;
         }
         while(placement.lastElementChild){
            placement.removeChild(placement.lastElementChild);
        }
        return true
   
    }  
     else if(totalShipPlacement === 8){

      
         if(direc === 'left'){
            for(let i = 0; i < 3; i++){

                storeShips.push({
                    x: parseInt(start.x) - i,
                    y: parseInt(start.y)
                })
      
                showShips(parseInt(start.x) - i , parseInt(start.y) )
            }
            totalShipPlacement  = 5;

         }
         else if(direc === 'right'){
            for(let i = 0; i < 3; i++){

                storeShips.push({
                    x: parseInt(start.x)  + i,
                    y: parseInt(start.y)
                })
      
                showShips(parseInt(start.x) + i , parseInt(start.y) )
            }
            totalShipPlacement  = 5;

         }
         else if(direc ==='up'){
            for(let i = 0; i < 3; i++){

                storeShips.push({
                    x: parseInt(start.x) ,
                    y: parseInt(start.y)-i
                })
      
                showShips(parseInt(start.x)  , parseInt(start.y) - i)
            }
            totalShipPlacement  = 5;
             

         }
         else if(direc ==='down'){
      
             for(let i = 0; i < 3; i++){

                 storeShips.push({
                     x: parseInt(start.x) ,
                     y: parseInt(start.y)+i
                 })
       
                 showShips(parseInt(start.x)  , parseInt(start.y) +i)
             }
             totalShipPlacement  = 5;
         }
         while(placement.lastElementChild){
            placement.removeChild(placement.lastElementChild);
        }
        return true
   
    }  
    else if(totalShipPlacement === 5){

      
         if(direc === 'left'){
            for(let i = 0; i < 3; i++){

                storeShips.push({
                    x: parseInt(start.x) - i,
                    y: parseInt(start.y)
                })
      
                showShips(parseInt(start.x) - i , parseInt(start.y) )
            }
            totalShipPlacement  = 2;

         }
         else if(direc === 'right'){
            for(let i = 0; i < 3; i++){

                storeShips.push({
                    x: parseInt(start.x)  + i,
                    y: parseInt(start.y)
                })
      
                showShips(parseInt(start.x) + i , parseInt(start.y) )
            }
            totalShipPlacement  = 2;

         }
         else if(direc ==='up'){

            for(let i = 0; i < 3; i++){

                storeShips.push({
                    x: parseInt(start.x) ,
                    y: parseInt(start.y)-i
                })
      
                showShips(parseInt(start.x)  , parseInt(start.y) - i)
            }
            totalShipPlacement  = 2;
         }
         else if(direc ==='down'){
      
             for(let i = 0; i < 3; i++){

                 storeShips.push({
                     x: parseInt(start.x) ,
                     y: parseInt(start.y)+i
                 })
       
                 showShips(parseInt(start.x)  , parseInt(start.y) +i)
             }
             totalShipPlacement  = 2;
         }
         while(placement.lastElementChild){
            placement.removeChild(placement.lastElementChild);
        }
        return true
   
    }
    else if(totalShipPlacement === 2){

      
         if(direc === 'left'){

            for(let i = 0; i < 2; i++){

                storeShips.push({
                    x: parseInt(start.x) -i  ,
                    y: parseInt(start.y)
                })
      
                showShips(parseInt(start.x) -i  , parseInt(start.y) )
            }
            totalShipPlacement  = 0;

         }
         else if(direc === 'right'){
            for(let i = 0; i < 2; i++){

                storeShips.push({
                    x: parseInt(start.x) +i  ,
                    y: parseInt(start.y)
                })
      
                showShips(parseInt(start.x) +i  , parseInt(start.y) )
            }
            totalShipPlacement  = 0;

         }
         else if(direc ==='up'){
            for(let i = 0; i < 2; i++){

                storeShips.push({
                    x: parseInt(start.x)  ,
                    y: parseInt(start.y) - i
                })
      
                showShips(parseInt(start.x)   , parseInt(start.y) - i )
            }
            totalShipPlacement  = 0;
         }
         else if(direc ==='down'){
      
             for(let i = 0; i < 2; i++){

                 storeShips.push({
                     x: parseInt(start.x) ,
                     y: parseInt(start.y)+i
                 })
       
                 showShips(parseInt(start.x)  , parseInt(start.y) +i)
             }
             totalShipPlacement  = 0;
         }
         while(placement.lastElementChild){
            placement.removeChild(placement.lastElementChild);
        }
        return true
   
    }
    else{
        placement.setAttribute('disabled')
    }
   
}

// see if the cords selected is where a computer ship is and send back something
//  to determine if it a hit or miss

const determineHit = (hitX,hitY) =>{
    
    for(let i = 0; i < computerShips.length ; i++){
        console.log(i);
        if(computerShips[i].x == hitX && computerShips[i].y == hitY){
            return true;
        }
        else if(i === computerShips.length){
            return false;
        }
    }
}

const showShips = (cordsX, cordsY) =>{
    const player = document.querySelectorAll('.container span')

  
        for(let j = 0; j< player.length ; j++){
            if((parseInt(player[j].dataset.x )=== parseInt(cordsX)) && (parseInt(player[j].dataset.y) === parseInt(cordsY))){
                player[j].classList.add('ship')
              return true
            }
        }
       
    
}


    // check if there is a ship there before hand
    // goes through stored ships return false if they can't find a store ship with 
    // else it will return true if they can find the store ship
    // should go in all direction of the start base on total ship placement
    // future iteration
    const checkShip = (e) =>{

        if(totalShipPlacement === 17){
            // there is nothing in the storeShips varible to check agisnt it
            return false;

        }
        else if (totalShipPlacement === 12 ){
//  go in all direction + 5 to see if there 
// use x and y dataset which is the 
            //  do for loops for each direction 
            for(let i = 0; i < storeShips.length;i++){
                
            } 
        }
        else if (totalShipPlacement === 8 ){
            
        }
        else if (totalShipPlacement === 5 ){
            
        }
        else if (totalShipPlacement === 2){
            
        }
        
    }



//  make sure where the user icks at square it makes sure it a right sqaure
const placeShip = (e) =>{
    const start = e.target.dataset;

    const place = document.querySelector('.placement')
    // place in seperate function
    const up = document.createElement('button')
    const down = document.createElement('button')
    const left = document.createElement('button')
    const right = document.createElement('button')

    const textUp = document.createTextNode('up')
    const textDown = document.createTextNode('down')
    const textLeft = document.createTextNode('left')
    const textRight = document.createTextNode('right')
    up.setAttribute('data-direc' , 'up')
    down.setAttribute('data-direc' , 'down')
    left.setAttribute('data-direc' , 'left')
    right.setAttribute('data-direc' , 'right')
    

    up.appendChild(textUp)
    down.appendChild(textDown)
    left.appendChild(textLeft)
    right.appendChild(textRight)
   

// ----------------

 
    //    place 5 square represent carrier 
        if(totalShipPlacement ===  17){
           if(parseInt(e.target.dataset.y) - 5 >= 0  ){
        
                place.appendChild(up)
               }
             
               
           

            if(parseInt(e.target.dataset.y) + 5 <= 10 ){
              
                place.appendChild(down)
                
            }
 
         
       
            if(parseInt(e.target.dataset.x) - 5 >= 0 ){
                
                place.appendChild(left)
                
            }
 
         
  
            if(parseInt(e.target.dataset.x ) + 5 <= 10 ){
               
                place.appendChild(right)
               
            }
            const direction = document.querySelectorAll('.placement button')
           
            direction.forEach(direc => direc.addEventListener('click',function(){
              
                makeShip(start,direc.dataset.direc)
            }, false))
 
       
        }
        // place 4 square represent battleship
        else if(totalShipPlacement === 12 ){
            if(e.target.dataset.y - 4 >= 0 ){
               
                place.appendChild(up)
                
            }
 
             if(parseInt(e.target.dataset.y) + 4 <= 10 ){
               
                 place.appendChild(down)
                 
             }
  
          
        
             if(e.target.dataset.x - 4 >= 0 ){
                 
                 place.appendChild(left)
                 
             }
  
          
   
             if(e.target.dataset.x + 4 <= 10 ){
                
                 place.appendChild(right)
                
             }
             const direction = document.querySelectorAll('.placement button')
            
             direction.forEach(direc => direc.addEventListener('click',function(){
               
                 makeShip(start,direc.dataset.direc)
             }, false))
  
           
        }
         // place 3 square represent battleship
        else if(totalShipPlacement === 8 ){
            if(e.target.dataset.y - 3 >= 0 ){
               
                place.appendChild(up)
                
            }
 
             if(parseInt(e.target.dataset.y) + 3 <= 10 ){
               
                 place.appendChild(down)
                 
             }
  
          
        
             if(e.target.dataset.x -3 >= 0 ){
                 
                 place.appendChild(left)
                 
             }
  
          
   
             if(e.target.dataset.x + 3 <= 10 ){
                
                 place.appendChild(right)
                
             }
             const direction = document.querySelectorAll('.placement button')
            
             direction.forEach(direc => direc.addEventListener('click',function(){
               
                 makeShip(start,direc.dataset.direc)
             }, false))
  
           
        }
        // place 3 more
        else if(totalShipPlacement ===5){
            if(e.target.dataset.y - 3 >= 0 ){
               
                place.appendChild(up)
                
            }
 
             if(parseInt(e.target.dataset.y) + 3 <= 10 ){
               
                 place.appendChild(down)
                 
             }
  
          
        
             if(e.target.dataset.x - 3 >= 0 ){
                 
                 place.appendChild(left)
                 
             }
  
          
   
             if(e.target.dataset.x + 3 <= 10 ){
                
                 place.appendChild(right)
                
             }
             const direction = document.querySelectorAll('.placement button')
            
             direction.forEach(direc => direc.addEventListener('click',function(){
               
                 makeShip(start,direc.dataset.direc)
             }, false))
  
          
        }
        // place 2
        else if(totalShipPlacement ===  2 ){
            if(e.target.dataset.y - 2 >= 0 ){
               
                place.appendChild(up)
                
            }
 
             if(parseInt(e.target.dataset.y) + 2 <= 10 ){
               
                 place.appendChild(down)
                 
             }
  
          
        
             if(e.target.dataset.x - 2 >= 0 ){
                 
                 place.appendChild(left)
                 
             }
  
          
   
             if(e.target.dataset.x + 2 <= 10 ){
                
                 place.appendChild(right)
                
             }
             const direction = document.querySelectorAll('.placement button')
            
             direction.forEach(direc => direc.addEventListener('click',function(){
               
                 makeShip(start,direc.dataset.direc)
             }, false))
  
            
        }
        console.log(totalShipPlacement)
    
}
const getRandomLocation =(max) =>{
    return Math.floor(Math.random()*Math.floor(max))
}

const makeComputerShips = () =>{
    let currrentMax = 5;
    if(totalComputerShip === 0){
        currrentMax = 5;
        totalComputerShip = 5
    }
    else if(totalComputerShip === 5){
        currrentMax = 4;
        totalComputerShip = 9;
    }
    else if(totalComputerShip === 9 ){
        currrentMax = 3;
        totalComputerShip = 12;
    }
    else if(totalComputerShip === 12){
        totalComputerShip = 15;
    }
    else if(totalComputerShip === 15){
        currrentMax = 2;
        totalComputerShip = 17;
    }
    else if(totalComputerShip === 17){
       return true;
    }
    // this will make computer ships and will be stored in  the store computer ships cords
    let xCord = getRandomLocation(10);
    let yCord = getRandomLocation(10);
    console.log(xCord)
    console.log(yCord)
    // check if there is a ship in that direction
    for(let i = 0; i < computerShips.length;i++){
        if( (cordsX + currrentMax === computerShips[i].x)  && (cordsY) === computerShips[i].y){

        }
       else if(i === computerShips.length - 1 ){
        computerShips.push({
            x: xCord,
            y: yCord
        })
       }
    }

}
//  this will call a computer shots and make sure the the shots called aren't shots already called

const computerCallShot = () =>{ 
    let xCord = getRandomLocation(10);
    let yCord = getRandomLocation(10);
    let computerShot =({
        x:xCord,
        y:yCord
    })
    return computerShot
}

//  adds all the eventlister to the quare 


if(totalShipPlacement  === 0){
    while(totalComputerShip != 17){
        makeComputerShips()
    }
   
}

const make = document.querySelectorAll('.container span');

make.forEach(box => box.addEventListener('click' , placeShip))


const fire = document.querySelectorAll('.computer span');
fire.forEach(box => box.addEventListener('click', firing));


// the grids playerShips[y][x] and computerships[y][x]

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         playerShips[i][j] = j
        
//     }
    
// }


// determineHit(7,6);


//TODO: 
// 1. Determine wheather something is a hit or miss DONE
// 2. find way to see that the ships is in a straigt line 90 degree DONE FOR NOW
// 2a. maybe store where the start the ship
// 2b. both cord shouldn't change only one of the cords should change x or y not both
// 2c . make a button to place  the ship according to the rules
// 2d.clear it after the ships is placed
// 3. Get computer generate ships with the right rules so only one cords should increese 
// both should not increse both
// 4. Get computer to hit a random location and not hit the same location
// 5. determine the ship sizes: 5,4,3,3,2, DONE

// TODO: 
// future edition
// make sure the player shipp locatins don't overlap  each other