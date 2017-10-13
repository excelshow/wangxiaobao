<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateYinliuShareSite extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yinliu_share_site', function (Blueprint $table) {
            $table->increments('id');
            $table->string('web_id')->nullable()->default(null);
            $table->string('name')->nullable()->default(null);
            $table->string('icon')->nullable()->default(null);
            $table->string('url')->nullable()->default(null);
            $table->string('status')->nullable()->default(null);
            $table->timestamps();
            $table->index(['status','web_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('yinliu_share_site');
    }
}
