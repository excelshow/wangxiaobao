<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateYinliuCompany extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yinliu_company', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('nick')->nullable()->default(null);;
            $table->string('domain')->nullable()->default(null);
            $table->string('site_address')->nullable()->default(null);
            $table->string('company_name')->nullable()->default(null);
            $table->string('business')->nullable()->default(null);
            $table->string('introduction')->nullable()->default(null);
            $table->text('detail')->nullable()->default(null);
            $table->string('address')->nullable()->default(null);
            $table->string('mobile')->nullable()->default(null);
            $table->string('phone')->nullable()->default(null);
            $table->string('shop_url')->nullable()->default(null);
            $table->bigInteger('site_tpl_id')->nullable()->default(null);
            $table->string('status')->nullable()->default('Y');
            $table->timestamps();
            $table->index(['user_id','domain']);
            $table->index(['domain']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('yinliu_company');
    }
}
