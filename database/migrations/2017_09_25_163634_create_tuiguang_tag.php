<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTuiguangTag extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tuiguang_tag', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('text');
            $table->bigInteger('count')->nullable()->default(0);
            $table->timestamps();
            $table->index(['text']);
            $table->index(['count']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tuiguang_tag');
    }
}
