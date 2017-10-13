<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateYinliuProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yinliu_product', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('nick')->nullable()->default(null);
            $table->bigInteger('business_id');
            $table->string('business')->nullable()->default(null);
            $table->string('item_id');
            $table->string('img_url')->nullable()->default(null);
            $table->string('title')->nullable()->default(null);
            $table->double('price')->nullable()->default(null);
            $table->timestamps();
            $table->index(['user_id','business_id','item_id']);
            $table->index(['user_id','item_id']);
            $table->index(['item_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('yinliu_product');
    }
}
