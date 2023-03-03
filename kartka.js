import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazkow

loadSprite("kartka","christmasobrazek.png")
loadSprite("sanie", "sanie.png")

loadSound("muzyka","doszopy.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

const sanie = add([
    sprite("sanie"),
    pos(240,80)
])

onUpdate(()=>{
    
    if(sanie.pos.y< 250)

    {
        sanie.pos.x=sanie.pos.x-1
        sanie.pos.y=sanie.pos.y+1
    }

    else

    {
        sanie.pos.y = 0,
        sanie.pos.x = 350
        
        
    }

})

onKeyPress("space", ()=>{
    play("muzyka") 
})

