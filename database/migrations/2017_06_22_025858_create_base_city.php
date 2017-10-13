<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBaseCity extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_city', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('city_id');
            $table->string('city');
            $table->string('province_id');
            $table->timestamps();
            $table->index(['city_id']);
            $table->index(['province_id','city_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_city');
    }
}
