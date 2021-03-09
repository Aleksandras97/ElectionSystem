<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Voter
 *
 * @mixin Eloquent
 */
class Voter extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

}
