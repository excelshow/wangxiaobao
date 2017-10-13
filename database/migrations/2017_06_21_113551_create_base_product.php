<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBaseProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_product', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('user_nick')->nullable()->default(null);
            $table->string('item_id');
            $table->string('category_id')->nullable()->default(null);
            $table->string('group_id')->nullable()->default(null);
            $table->string('img_url')->nullable()->default(null);
            $table->string('title')->nullable()->default(null);
            $table->double('price')->nullable()->default(null);
            $table->bigInteger('amount')->nullable()->default(0);
            $table->string('product_unit')->nullable()->default(null);
            $table->string('price_unit')->nullable()->default(null);
            $table->string('business_type')->nullable()->default(null);
            $table->timestamps();
            $table->index(['user_id','item_id']);
            $table->index(['user_id','group_id']);
            $table->index(['user_id','title']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_product');
    }
}
