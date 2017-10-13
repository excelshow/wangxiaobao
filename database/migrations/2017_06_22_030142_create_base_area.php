<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBaseArea extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_area', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('area_id');
            $table->string('area');
            $table->string('city_id');
            $table->timestamps();
            $table->index(['area_id']);
            $table->index(['city_id','area_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_area');
    }
}
