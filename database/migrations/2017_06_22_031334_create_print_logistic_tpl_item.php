<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintLogisticTplItem extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_logistic_tpl_item', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('tpl_id');
            $table->string('item_name')->nullable()->default(null);
            $table->integer('margin_top')->nullable()->default('10');
            $table->integer('margin_left')->nullable()->default('10');
            $table->integer('width')->nullable()->default('150');
            $table->integer('height')->nullable()->default('30');
            $table->string('content')->nullable()->default('打印内容');
            $table->string('font_family')->nullable()->default('宋体');
            $table->string('font_size')->nullable()->default('20');
            $table->string('font_weight')->nullable()->deault(null);
            $table->string('font_color')->nullable()->default('black');
            $table->string('text_underline')->nullable()->deault(null);
            $table->string('text_alignment')->nullable()->deault(null);
            $table->string('text_angle')->nullable()->deault(null);
            $table->string('status','10')->nullable()->deault('Y');//['Y','N']
            $table->timestamps();
            $table->index(['tpl_id','status']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_logistic_tpl_item');
    }
}
