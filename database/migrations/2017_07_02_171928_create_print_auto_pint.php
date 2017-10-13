<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintAutoPint extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_auto_print', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('user_nick')->nullabel()->default(null);
            $table->string('logistic_type','10')->nullabel()->default(null);
            $table->string('print_product_list','10')->nullabel()->default(null);
            $table->string('print_logistic_list','10')->nullabel()->default(null);
            $table->string('print_electric_list','10')->nullabel()->default(null);
            $table->string('auto_send','10')->nullabel()->default(null);
            $table->integer('order_period')->nullabel()->default(null);
            $table->string('start_time')->nullabel()->default(null);
            $table->string('end_time')->nullabel()->default(null);
            $table->timestamps();
            $table->index(['user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_auto_print');
    }
}
