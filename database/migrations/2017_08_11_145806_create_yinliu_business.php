<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateYinliuBusiness extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yinliu_business', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('nick')->nullable()->default(null);
            $table->string('business')->nullable()->default(null);
            $table->string('keywords')->nullable()->default(null);
            $table->text('introduction')->nullable()->default(null);
            $table->text('detail')->nullable()->default(null);
            $table->timestamps();
            $table->index(['user_id']);
            $table->index(['business']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('yinliu_business');
    }
}
