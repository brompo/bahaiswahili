<?php

use Illuminate\Database\Seeder;
use App\Resource;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(ResourcesTableSeeder::class);
    }
}
