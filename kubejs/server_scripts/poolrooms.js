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

let horizontalDouble = (blockID) => {
    BlockEvents.placed(blockID, event => {
        const {block, entity} = event
        const backHalf = block[entity.horizontalDirection.opposite]
        if(backHalf.id != 'minecraft:air'){
            event.cancel()
            return
        }else{
            backHalf.set(blockID, {
                facing: block.properties.facing,
                half: 'back'
            })
        }
    })
}

//Pool Locker

verticleDouble('kubejs:pool_locker_single')
verticleDouble('kubejs:pool_locker_double')

//Pool chairs

horizontalDouble('kubejs:birch_pool_chair')
