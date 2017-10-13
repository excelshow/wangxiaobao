<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBasePost extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_post', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('area_id');
            $table->string('post');
            $table->string('code');
            $table->timestamps();
            $table->index(['area_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_post');
    }
}
