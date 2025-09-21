execute as @e[type=marker,name=pipe_placer_water] at @s if block ~ ~ ~ minecraft:air run setblock ~ ~ ~ create:fluid_pipe[waterlogged=true]
execute as @e[type=marker,name=pipe_placer_water] at @s if block ~ ~ ~ minecraft:light run setblock ~ ~ ~ create:fluid_pipe[waterlogged=true]
execute as @e[type=marker,name=pipe_placer_water] at @s if block ~ ~ ~ minecraft:water run setblock ~ ~ ~ create:fluid_pipe[waterlogged=true]
execute as @e[type=marker,name=pipe_placer_water] at @s run tp @s ~ ~1 ~
execute as @e[type=marker,name=pipe_placer_water] at @s unless block ~ ~ ~ minecraft:air unless block ~ ~ ~ minecraft:light unless block ~ ~ ~ minecraft:water run kill @s