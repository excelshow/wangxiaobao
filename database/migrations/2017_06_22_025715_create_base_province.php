<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBaseProvince extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_province', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('province_id');
            $table->string('province');
            $table->timestamps();
            $table->index(['province_id'],'index_province_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_province');
    }
}
