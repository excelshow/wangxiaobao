<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintProductTpl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_product_tpl', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('user_nick');
            $table->string('tpl_name')->nullable()->default(null);
            $table->string('tpl_type','20')->nullable()->default('user');
            $table->double('page_width')->nullable()->default('241');
            $table->double('page_height')->nullable()->default('140');
            $table->string('page_name')->nullable()->dafault('三联二等分');
            $table->double('padding_top')->nullable()->default('0');
            $table->double('padding_left')->nullable()->default('0');
            $table->string('font_family')->nullable()->default('微软雅黑');
            $table->string('font_size')->nullable()->default('12');
            $table->string('font_weight')->nullable()->default('400');
            $table->string('sorter_name')->nullable()->default('产品货号升序');
            $table->string('sorter_key')->nullable()->default('product_cargo_number');
            $table->string('sorter_order')->nullable()->default('asc');
            $table->timestamps();
            $table->index(['user_id','tpl_type']);
            $table->index(['tpl_type']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_product_tpl');
    }
}
