<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElectionUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //election_user
        Schema::create('election_user', function (Blueprint $table) {
            $table->primary(['election_id', 'user_id']);
            $table->unsignedBigInteger('election_id');
            $table->unsignedBigInteger('user_id');
            //is vote active
            $table->boolean('is_voted')->default(false);
            $table->timestamps();

            $table->foreign('election_id')->references('id')->on('elections')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('election_user');
    }
}
