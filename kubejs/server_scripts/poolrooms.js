let verticleDouble = (blockID) => {
    BlockEvents.placed(blockID, event => {
        const {block, entity} = event
        const topHalf = block['up']
        if(topHalf.id != 'minecraft:air'){
            event.cancel()
            return
        }else{
            topHalf.set(blockID, {
                facing: block.properties.facing,
                half: 'top'
            })
        }
    })

    BlockEvents.broken(blockID, event => {
        const {block, entity} = event
        const otherHalf = block.properties.half == 'bottom' ? block['up'] : block['down']
        if(otherHalf.id == blockID){
            otherHalf.set('minecraft:air')
        }
    })
}

let backSide = (dir) => {
    if(dir == "north"){
        return "south"
    }else if(dir == "west"){
        return "east"
    }else if(dir == "east"){
        return "west"
    }
    return "north"
}

let horizontalDouble = (blockID) => {
    BlockEvents.placed(blockID, event => {
        const {block, entity} = event
        const backHalf = block[backSide(block.properties.facing)]
        if(backHalf.id != 'minecraft:air'){
            event.cancel()
            return
        }else{
            backHalf.set(blockID, {
                facing: block.properties.facing,
                half: 'top'
            })
        }
    })

    BlockEvents.broken(blockID, event => {
        const {block, entity} = event
        const otherHalf = block.properties.half == 'bottom' ? block[backSide(block.properties.facing)] : block[block.properties.facing]
        if(otherHalf.id == blockID){
            otherHalf.set('minecraft:air')
        }
    })
}

//Pool Locker

verticleDouble('kubejs:pool_locker_single')
verticleDouble('kubejs:pool_locker_double')

//Pool chairs

horizontalDouble('kubejs:oak_pool_chair')
horizontalDouble('kubejs:oil_treated_oak_pool_chair')
horizontalDouble('kubejs:white_painted_oak_pool_chair')