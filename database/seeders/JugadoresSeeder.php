<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JugadoresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('jugadores')->insert([
            ['name' => 'Jugador 1', 'posicion' => 'Delantero', 'edad' => 22],
            ['name' => 'Jugador 2', 'posicion' => 'Defensa', 'edad' => 18],
            ['name' => 'Jugador 3', 'posicion' => 'Portero', 'edad' => 30],
        ]);
    }
    }
    

