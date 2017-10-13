<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintLogisticCompany extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_logistic_company', function (Blueprint $table) {
            $table->bigIncrements('company_id');
            $table->bigInteger('ali_id')->nullable()->default(null);
            $table->string('company_name')->nullable()->default(null);
            $table->string('company_no')->nullable()->default(null);
            $table->string('background_img')->nullable()->default(null);
            $table->string('often','10')->nullable()->default('N');//Y N
            $table->string('has_electric_tpl','10')->nullable()->default('N');
            $table->timestamps();

            $table->index(['company_id']);
            $table->index(['often']);
            $table->index(['has_electric_tpl']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_logistic_company');
    }
}
