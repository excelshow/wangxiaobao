<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecordBaseOrderDownload extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('record_base_order_download', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('user_nick')->nullable()->default(null);
            $table->integer('order_total')->nullable()->default(0);
            $table->integer('download_total')->nullable()->default(0);
            $table->string('failed_order_ids')->nullable()->default(null);
            $table->string('failed_reason')->nullable()->default(null);
            $table->dateTime('start_time')->nullable()->default(null);
            $table->dateTime('end_time')->nullable()->default(null);;
            $table->integer('period')->nullable()->default(0);
            $table->timestamps();
            $table->index(['user_id'],'index_record_download_user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('record_base_order_download');
    }
}
