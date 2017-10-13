<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintSetting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_setting', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('user_nick')->nullable()->default(null);;

            $table->bigInteger('default_product_tpl_id')->nullable()->default(null);
            $table->string('default_product_tpl_name')->nullable()->default(null);
            $table->string('default_product_tpl_type','20')->nullable()->default('user');

            $table->string('logistic_tpl_printer_index')->nullable()->default(null);
            $table->string('logistic_tpl_printer_name')->nullable()->default(null);
            $table->string('product_tpl_printer_index')->nullable()->default(null);
            $table->string('product_tpl_printer_name')->nullable()->default(null);
            $table->string('electric_tpl_printer_index')->nullable()->default(null);
            $table->string('electric_tpl_printer_name')->nullable()->default(null);
            $table->timestamps();
            $table->index(['user_id','default_product_tpl_id'],'index_product_tpl_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_setting');
    }
}
