execute if score generation generation matches 1 unless block ~ ~ ~1 minecraft:water run function backrooms:rare_water_loot_placer_north
execute if score generation generation matches 1 unless block ~-1 ~ ~ minecraft:water run function backrooms:rare_water_loot_placer_east
execute if score generation generation matches 1 unless block ~ ~ ~-1 minecraft:water run function backrooms:rare_water_loot_placer_south
execute if score generation generation matches 1 unless block ~1 ~ ~ minecraft:water run function backrooms:rare_water_loot_placer_west

execute if score generation generation matches 1 if block ~1 ~ ~ minecraft:water if block ~-1 ~ ~ minecraft:water if block ~ ~ ~1 minecraft:water if block ~ ~ ~-1 minecraft:water run function backrooms:common_loot_placer_random