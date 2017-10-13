<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTuiguangShop extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tuiguang_shop', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('nick')->nullable()->default(null);

            $table->bigInteger('company_id')->nullable()->default(null);
            $table->string('tp_logo')->nullable()->default(null);
            $table->string('tp_year')->nullable()->default(null);
            $table->string('tp_type')->nullable()->default(null);

            $table->string('company_name')->nullable()->default(null);
            $table->bigInteger('category_id')->nullable()->default(null);
            $table->string('category')->nullable()->default(null);
            $table->string('business')->nullable()->default(null);
            $table->string('introduction')->nullable()->default(null);
            $table->string('address')->nullable()->default(null);
            $table->string('mobile')->nullable()->default(null);
            $table->string('phone')->nullable()->default(null);
            $table->string('shop_url')->nullable()->default(null);
            $table->string('status')->nullable()->default('Y');
            $table->timestamps();
            $table->index(['user_id']);
            $table->index(['category_id']);
            $table->index(['company_name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tuiguang_shop');
    }
}
