<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecordPrintAndSend extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('record_print_and_send', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('user_nick')->nullable()->default(null);
            $table->string('order_id');
            $table->string('buyer_nick')->nullable()->default(null);
            $table->string('product_name')->nullable()->default(null);

            $table->dateTime('gmt_create')->nullable()->default(null);
            $table->dateTime('gmt_payment')->nullable()->default(null);


            $table->string('product_list_print_status','50')->nullable()->default('WAIT_PRINT');
            $table->dateTime('product_list_print_time')->nullable()->default(null);
            $table->string('logistic_list_print_status','50')->nullable()->default('WAIT_PRINT');
            $table->dateTime('logistic_list_print_time')->nullable()->default(null);
            $table->string('logistic_tpl_type')->nullable()->default(null);//运单类型  普通面单，电子面单


            $table->string('logistic_type')->nullable()->default(null);//物流方式 虚拟 线下
            $table->string('logistic_company_id')->nullable()->default(null);
            $table->string('logistic_company_name')->nullable()->default(null);
            $table->string('logistic_num')->nullable()->default(null);

            $table->dateTime('send_time')->nullable()->default(null);
            $table->string('send_success')->nullable()->default(null);// success fail
            $table->string('send_failed_reason')->nullable()->default(null);//
            $table->string('print_type')->nullable()->default(null);// auto hand
            $table->timestamps();
            $table->index(['user_id','order_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('record_print_and_send');
    }
}
