<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintLogisticTpl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_logistic_tpl', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id')->nullable();
            $table->string('user_nick')->nullable();
            $table->bigInteger('company_id');
            $table->string('company_no')->nullable()->default(null);
            $table->string('company_name')->nullable()->default(null);
            $table->string('tpl_name')->nullable()->default(null);
            $table->string('tpl_type','20')->default('user');//['sys','user']
            $table->double('page_width')->nullable()->default(null);
            $table->double('page_height')->nullable()->default(null);
            $table->string('background_img')->nullable()->default(null);
            $table->double('padding_top')->nullable()->default('0');
            $table->double('padding_left')->nullable()->default('0');
            $table->string('font_family')->nullable()->default('微软雅黑');
            $table->string('font_size')->nullable()->default('15');
            $table->string('font_weight')->nullable()->default('400');
            $table->timestamps();
            $table->index(['user_id','company_id','tpl_type']);
            $table->index(['company_id','tpl_type']);
            $table->index(['tpl_type','company_id','user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_logistic_tpl');
    }
}
