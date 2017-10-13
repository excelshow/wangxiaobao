<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintProductTplItem extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_product_tpl_item', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('tpl_id');
            $table->string('item_name')->nullable()->default(null);;
            $table->string('content')->nullable()->default('打印内容');
            $table->string('font_family')->nullable()->default('微软雅黑');
            $table->string('font_size')->nullable()->default('12');
            $table->string('font_weight')->nullable()->default('400');
            $table->string('font_color')->nullable()->default('black');
            $table->string('text_underline')->nullable()->default(null);
            $table->string('text_alignment')->nullable()->default(null);
            $table->string('status','10')->default('Y');//['Y','N']
            $table->timestamps();
            $table->index(['tpl_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_product_tpl_item');
    }
}
