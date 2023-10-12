import {v4 as uuidv4} from 'uuid'


export type InventoryItem={
    id:string;
    name:string;
    description:string;
    value:number
    attack?:string,
    defense?:string
}

///Inventorybag
type Bag = {
    id:string;
    items : InventoryItem[]
}

///creating inventory func

function createInventoryItem(name:string, description:string, value:number,attack:string,defense:string):InventoryItem{
    return{
        id: uuidv4(),
        name,
        description,
        value,
        attack,
        defense
    }
}

function createInventoryBag():Bag{
    return{
        id: uuidv4(),
        items : []
    }
}
//addto bag
function addtoBag(bag:Bag, item:InventoryItem):void{
    bag.items.push(item)
}
//remove from bag

function removefromBag(Bag:Bag, itemID:string):void{
    Bag.items= Bag.items.filter(items => items.id !=itemID)
}

//show bag

function ShowBag(bag:Bag):void{
    console.log('items in bag')
    bag.items.forEach(item=>{
        console.log(`${item.name}-${item.description}`)
    })
}

const bag = createInventoryBag()
const item1 = createInventoryItem('Sword','Fire Sword',1,'50:attack', '0:defense')
const item2 = createInventoryItem('Bow & Arrows','Fire arrows',1,'35:attack','0:defense')
const item3 = createInventoryItem('Club','stick',1,'1:attack','0:defense')
const item4 = createInventoryItem('Shield','steel shield',1,'25:attack','75:defense')
const item5 = createInventoryItem('Tunic','Cloth Armor',1,'25:attack','85:defense')
const item6 = createInventoryItem('Armor','Chain Mail',1,'30:attack','90:defense')
// console.log(item1)
// console.log(bag)
addtoBag(bag, item1)
addtoBag(bag,item2)
addtoBag(bag,item3)
addtoBag(bag,item4)
addtoBag(bag,item5)
addtoBag(bag,item6)
// console.log(bag)
// console.log(item1)
// console

export{
    item1,
    item2,
    item3,item4,item5,item6
} 