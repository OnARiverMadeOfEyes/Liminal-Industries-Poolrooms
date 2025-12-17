scoreboard players set max RNG_Constant 8
function backrooms:rng

execute if score RNG RNG_Variable matches 1 run setblock ~ ~ ~ refurbished_furniture:light_electricity_generator[facing=north]
execute if score RNG RNG_Variable matches 2 run setblock ~ ~ ~ moyai:moyai[facing=south]
execute if score RNG RNG_Variable matches 3 run setblock ~ ~ ~ kubejs:batteries[waterlogged=true]
execute if score RNG RNG_Variable matches 4 run setblock ~ ~ ~ supplementaries:cannonball[balls=1,waterlogged=true]
execute if score RNG RNG_Variable matches 5 run setblock ~ ~ ~ supplementaries:cannonball[balls=2,waterlogged=true]
execute if score RNG RNG_Variable matches 6 run setblock ~ ~ ~ supplementaries:cannonball[balls=3,waterlogged=true]
execute if score RNG RNG_Variable matches 7 run setblock ~ ~ ~ supplementaries:cannonball[balls=4,waterlogged=true]