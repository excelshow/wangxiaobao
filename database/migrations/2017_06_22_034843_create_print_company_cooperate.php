<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintCompanyCooperate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_company_cooperate', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('user_nick')->nullable()->default(null);
            $table->integer('company_id')->nullable()->default(null);
            $table->integer('ali_id')->nullable()->default(null);
            $table->string('company_name')->nullable()->default(null);
            $table->string('company_no')->nullable()->default(null);
            $table->string('is_default','10')->nullable()->default('N');//默认快递
            $table->string('has_electric_tpl','10')->nullable()->default('N');//支持面单
            $table->bigInteger('tpl_id')->nullable()->default(null);
            $table->string('tpl_type','20')->nullable()->default(null);//['sys','user']
            $table->string('tpl_name')->nullable()->default(null);
            $table->timestamps();
            $table->index(['user_id','is_default']);
            $table->index(['user_id','company_id','tpl_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_company_cooperate');
    }
}
