

export  type FightingStyle= 'ranged'|'melee'


function createAttack(attack:string){
    return{
        attack: 'ranged','melee'
    }

}
function displayUser(user:FightingStyle):void{
    console.log(user)
}