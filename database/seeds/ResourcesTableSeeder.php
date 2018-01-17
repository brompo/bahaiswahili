<?php

use Illuminate\Database\Seeder;
use App\Resource;

class ResourcesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $resources = factory(Resource::class, 10)->create();
    }
}
