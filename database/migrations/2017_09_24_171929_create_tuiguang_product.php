<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTuiguangProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tuiguang_product', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('user_id');
            $table->string('nick')->nullable()->default(null);
            $table->bigInteger('category_id')->nullable()->default(null);
            $table->string('category')->nullable()->default(null);
            $table->string('item_id');
            $table->string('img_url')->nullable()->default(null);
            $table->string('title')->nullable()->default(null);
            $table->double('price')->nullable()->default(null);
            $table->bigInteger('amount')->nullable()->default(0);
            $table->json('tags')->nullable()->default(null);
            $table->timestamps();
            $table->index(['user_id','item_id']);
            $table->index(['category_id']);
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
        Schema::dropIfExists('tuiguang_product');
    }
}
