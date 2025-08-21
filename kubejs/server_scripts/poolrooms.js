//Pool Locker

BlockEvents.placed('kubejs:pool_locker', event => {
    const {block, entity} = event
    const topHalf = block['up']
    if(topHalf.id != 'minecraft:air'){
        event.cancel()
        return
    }else{
        topHalf.set('kubejs:pool_locker', {
            facing: block.properties.facing,
            half: 'top'
        })
    }
})

BlockEvents.broken('kubejs:pool_locker', event => {
    const {block, entity} = event
    const otherHalf = block.properties.half == 'bottom' ? block['up'] : block['down']
    if(otherHalf.id == 'kubejs:pool_locker'){
        otherHalf.set('minecraft:air')
    }
})