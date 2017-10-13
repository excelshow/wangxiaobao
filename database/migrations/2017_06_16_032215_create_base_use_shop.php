<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBaseUseShop extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_user_shop', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('appkey');
            $table->string('app_name')->nullable()->default(null);
            $table->bigInteger('user_id')->nullable()->default(null);
            $table->string('nick');
            $table->string('device','20')->default('alipc');
            //'alipc','qnpc','qnandroid','qnios'
            $table->string('login_id')->nullable()->default(null);
            $table->string('member_id')->nullable()->default(null);
            $table->bigInteger('ali_id')->nullable()->default(null);
            $table->string('access_token')->nullable()->default(null);
            $table->integer('expires_in')->nullable()->default('3600');
            $table->dateTime('expire_time')->nullable()->default(null);
            $table->string('refresh_token')->nullable()->default(null);
            $table->dateTime('refresh_token_valid_time')->nullable()->default(null);
            $table->integer('re_expires_in')->nullable()->default(null);
            $table->timestamps();
            $table->index(['appkey','user_id','nick']);
            $table->index(['appkey','nick']);
            $table->index(['device']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_user_shop');
    }
}
