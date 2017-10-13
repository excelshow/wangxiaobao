<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBaseUserInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('base_user_info', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('appkey');
            $table->string('app_name')->nullable()->default(null);
            $table->string('user_name');
            $table->string('user_password')->nullable()->default(null);
            $table->string('sex','10')->nullable()->default('M');
            $table->string('mobile')->nullable()->default(null);
            $table->string('phone')->nullable()->default(null);
            $table->string('email')->nullable()->default(null);
            $table->string('company')->nullable()->default(null);
            $table->string('bind_shop')->nullable()->default(null);
            $table->string('source','20')->nullable()->default('oauth');
            //oauth register relate
            $table->timestamps();
            $table->index(['appkey','user_name','user_password','bind_shop'],'index_key_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_user_info');
    }
}
