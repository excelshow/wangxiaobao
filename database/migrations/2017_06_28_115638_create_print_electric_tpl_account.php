<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintElectricTplAccount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_electric_tpl_account', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('user_nick')->nullable()->default(null);
            $table->bigInteger('company_id');
            $table->string('company_name')->nullable()->default(null);
            $table->string('company_no')->nullable()->default(null);
            $table->string('customer_name')->nullable()->default(null);
            $table->string('customer_pwd')->nullable()->default(null);
            $table->string('month_code')->nullable()->default(null);
            $table->string('send_site')->nullable()->default(null);
            $table->timestamps();
            $table->index(['user_id','company_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_electric_tpl_account');
    }
}
