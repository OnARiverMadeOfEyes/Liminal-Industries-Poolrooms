scoreboard players set max RNG_Constant 9
function backrooms:rng

execute if score RNG RNG_Variable matches 1 run setblock ~ ~ ~ minecraft:water

execute if score RNG RNG_Variable matches 2 run setblock ~ ~ ~ mekanism:radioactive_waste_barrel[facing=west,fluid_logged=water]
execute if score RNG RNG_Variable matches 2 run summon marker ~ ~0.5 ~ {Tags:["radioactive_waste_barrel"]}
execute if score RNG RNG_Variable matches 3 run function backrooms:pipe_placer_water
execute if score RNG RNG_Variable matches 4 run setblock ~ ~ ~ dustrial_decor:cardboard_scrap

execute if score RNG RNG_Variable matches 5..8 run function backrooms:rare_water_loot_placer_west