<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintSender extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_sender', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('user_nick')->nullable()->default(null);
            $table->string('sender_name')->nullable()->default(null);
            $table->string('province')->nullable()->default(null);
            $table->string('city')->nullable()->default(null);
            $table->string('area')->nullable()->default(null);
            $table->string('street')->nullable()->default(null);
            $table->string('address')->nullable()->default(null);
            $table->string('post')->nullable()->default(null);
            $table->string('mobile')->nullable()->default(null);
            $table->string('phone')->nullable()->default(null);
            $table->string('is_default','10')->default('N');
            $table->timestamps();
            $table->index(['user_id','sender_name']);
            $table->index(['user_id','is_default']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_sender');
    }
}
