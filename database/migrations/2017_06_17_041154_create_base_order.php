<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBaseOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_order', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('order_id')->unique();
            $table->string('product_name')->nullable()->default(null);
            $table->string('status')->nullable()->default('WAIT_BUYER_PAY');
            //'SUCCESS','CANCEL','WAIT_BUYER_PAY','WAIT_SELLER_SEND','WAIT_BUYER_RECEIVE','WAIT_SELLER_ACT','WAIT_BUYER_CONFIRM_ACTION','WAIT_SELLER_PUSH',
            //'WAIT_LOGISTICS_TAKE_IN','WAIT_BUYER_SIGN','SIGN_IN_SUCCESS','SIGN_IN_FAILED'
            $table->string('refund_status')->nullable()->default(null);
            //'WAIT_SELLER_AGREE','REFUND_SUCCESS','REFUND_CLOSED', 'WAIT_BUYER_MODIFY','WAIT_BUYER_SEND','WAIT_SELLER_RECEIVE'


            $table->string('buyer_rate_status','10')->nullable()->default('5');
            $table->string('seller_rate_status','10')->nullable()->default('5');

            $table->string('wireless_order')->nullable()->default('N');

            $table->dateTime('gmt_payment')->nullable()->default(null);
            $table->dateTime('gmt_goods_send')->nullable()->default(null);
            $table->dateTime('gmt_confirmed')->nullable()->default(null);
            $table->dateTime('gmt_modified')->nullable()->default(null);
            $table->dateTime('gmt_create')->nullable()->default(null);

            $table->string('business_type','50')->nullable()->default(null);

            $table->double('discount')->nullable()->default(null);
            $table->double('carriage')->nullable()->default(null);
            $table->double('refund_payment')->nullable()->default(null);
            $table->double('sum_payment')->nullable()->default(null);
            $table->double('sum_product_payment')->nullable()->default(null);
            $table->double('sum_product_payment_with_coupon')->nullable()->default(null);

            $table->text('close_reason')->nullable()->default(null);
            $table->text('buyer_message')->nullable()->default(null);
            $table->text('buyer_remark')->nullable()->default(null);
            $table->integer('buyer_remark_icon')->nullable()->default(null);
            $table->text('seller_remark')->nullable()->default(null);
            $table->integer('seller_remark_icon')->nullable()->default(null);
            $table->string('seller_remark_2')->nullable()->default(null);// 用户系统定义备注


            $table->string('seller_nick')->nullable()->default(null);
            $table->string('seller_member_id')->nullable();
            $table->string('seller_company_name')->nullable()->default(null);
            $table->string('seller_name')->nullable();
            $table->string('seller_phone')->nullable()->default(null);
            $table->string('seller_mobile')->nullable()->default(null);
            $table->string('seller_sex')->nullable()->default(null);
            $table->bigInteger('seller_ali_id')->nullable()->default(null);
            $table->string('seller_alipay_id')->nullable()->default(null);


            $table->string('buyer_nick')->nullable()->default(null);
            $table->string('buyer_member_id')->nullable()->default(null);
            $table->string('buyer_company_name')->nullable()->default(null);
            $table->string('buyer_name')->nullable()->default(null);
            $table->string('buyer_phone')->nullable()->default(null);
            $table->string('buyer_mobile')->nullable()->default(null);
            $table->string('buyer_sex')->nullable()->default(null);
            $table->bigInteger('buyer_ali_id')->nullable()->default(null);
            $table->string('buyer_alipay_id')->nullable()->default(null);


            $table->string('receiver_country')->nullable()->default(null);
            $table->string('receiver_province')->nullable()->default(null);
            $table->string('receiver_city')->nullable()->default(null);
            $table->string('receiver_area')->nullable()->default(null);
            $table->string('receiver_province_code')->nullable()->default(null);
            $table->string('receiver_city_code')->nullable()->default(null);
            $table->string('receiver_area_code')->nullable()->default(null);
            $table->string('receiver_street')->nullable()->default(null);
            $table->string('receiver_address')->nullable()->default(null);
            $table->string('receiver_post')->nullable()->default(null);
            $table->string('receiver_name')->nullable()->default(null);
            $table->string('receiver_phone')->nullable()->default(null);
            $table->string('receiver_mobile')->nullable()->default(null);


            $table->string('remind_pay_status','50')->nullable()->default(null);
            $table->dateTime('remind_pay_time')->nullable()->default(null);

            $table->string('product_list_print_status','50')->nullable()->default('WAIT_PRINT');
            $table->dateTime('product_list_print_time')->nullable()->default(null);
            $table->string('logistic_list_print_status','50')->nullable()->default('WAIT_PRINT');
            $table->dateTime('logistic_list_print_time')->nullable()->default(null);
            $table->string('electric_list_print_status','50')->nullable()->default('WAIT_PRINT');
            $table->dateTime('electric_list_print_time')->nullable()->default(null);

            $table->string('logistic_company_id')->nullable()->default(null);
            $table->string('logistic_company_name')->nullable()->default(null);
            $table->string('logistic_num')->nullable()->default(null);
            $table->bigInteger('sender_address_id')->nullable()->default(null);
            $table->string('sender_address')->nullable()->default(null);

            $table->timestamps();

            $table->index(['user_id','gmt_modified'],'index_order_modified');
            $table->index(['user_id','gmt_create','status'],'index_order_status');
            $table->index(['user_id','order_id'],'index_order_order_id');
            $table->index(['user_id','buyer_nick','buyer_mobile'],'index_order_buyer');
            $table->index(['user_id','gmt_create','buyer_rate_status','seller_rate_status'],'index_order_rate_status');
            $table->index(['user_id','gmt_create','seller_remark_icon'],'index_order_remark');
            $table->index(['user_id','gmt_create','refund_status'],'index_order_refund_status');
            $table->index(['user_id','gmt_create','product_list_print_status','logistic_list_print_status','electric_list_print_status'],'index_order_print_status');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_order');
    }
}
