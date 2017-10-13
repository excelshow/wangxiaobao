<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CteateBaseOrderProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_order_product', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('order_id');
            $table->string('entry_id')->nullable()->default(null);
            $table->string('seller_nick')->nullable()->default(null);
            $table->string('buyer_nick')->nullable()->default(null);
            $table->string('item_id')->nullable()->default(null);
            $table->string('category_id')->nullable()->default(null);
            $table->string('sku_id')->nullable()->default(null);
            $table->string('spec_id')->nullable()->default(null);
            $table->string('product_cargo_number')->nullable()->default(null);//产品货号
            $table->string('cargo_number')->nullable()->default(null);//单品货号
            $table->string('product_name')->nullable()->default(null);
            $table->string('img_url')->nullable()->default(null);
            $table->string('activity_id')->nullable()->default(null);
            $table->double('price')->nullable()->default(null);//单价
            $table->double('price_after_promotion')->nullable()->default(null);//促销价
            $table->double('amount')->nullable()->default(null);//amount 总金额
            $table->double('amount_with_discount_and_promotion')->nullable()->default(null);//实付金额
            $table->double('discount')->nullable()->default(1);//折扣
            $table->double('discount_price')->nullable()->default(null);//折扣价
            $table->double('entry_discount')->nullable()->default(null)->default(0);
            $table->bigInteger('quantity')->nullable()->default(null);//购买数量
            $table->double('weight')->nullable()->default(null);//商品重量
            $table->string('weight_unit')->nullable()->default(null);
            $table->text('spec_items')->nullable()->default(null);
            $table->string('product_unit')->nullable()->default(null);
            $table->string('price_unit')->nullable()->default(null);
            $table->dateTime('gmt_create')->nullable()->default(null);
            $table->dateTime('gmt_modified')->nullable()->default(null);
            $table->timestamps();

            $table->index(['user_id','buyer_nick'],'index_order_product_user_id');
            $table->index(['user_id','order_id'],'index_order_product_order_id');
            $table->index(['user_id','item_id'],'index_order_product_item_id');
            $table->index(['user_id','order_id','item_id','spec_id'],'index_order_product_spec_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_order_product');
    }
}
