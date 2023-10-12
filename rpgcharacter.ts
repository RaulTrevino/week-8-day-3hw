import {v4 as uuidv4} from 'uuid'
import { FightingStyle } from './fightingstyle'
import { InventoryItem, item1, item2, item4 } from './hw'


type Character={
    id:string;
    name:string;
    description:string;
    archtype: string
    fightingStyle?: FightingStyle
    inventory?: InventoryItem[]}
    
function createCharacters(name:string,description:string,archtype:string,inventory:InventoryItem[],fightingStyle:FightingStyle){
    return{
        id: uuidv4(),
        name,
        description,
        inventory,
        archtype,
        fightingStyle
}}

const character1 = createCharacters('Lyla','Eye roll','Rogue Elf',[item1],'melee')
const character2 = createCharacters('Toby','Nonstop Laughter','Undead',[],'ranged')

console.log(`${character1.name} the ${character1.archtype} has a ${item1.name} and a ${item4.name} and has a ${character1.fightingStyle} fighting style`)
console.log(`${character2.name} the ${character2.archtype} has a ${item2.name} and a ${item4.name} and has a ${character2.fightingStyle} fighting style`)
// console.log(character2)
// console.log(item1)