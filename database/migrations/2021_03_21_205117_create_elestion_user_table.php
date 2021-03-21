<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElestionUserTable extends Migration
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
            $table->id();
            $table->unsignedBigInteger('election_id');
            $table->unsignedBigInteger('user_id');
            //is_vote_active - when odd votes
            $table->boolean('is_vote_active')->default('1');
            //is vote active
            $table->boolean('is_voted')->default('1');
            $table->timestamps();

            $table->unique(['election_id', 'user_id']);

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
        Schema::dropIfExists('elestion_user');
    }
}
