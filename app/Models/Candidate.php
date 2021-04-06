<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Candidate extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'birthdate',
        'street_address',
        'city',
        'district',
        'gender',
        'entry_id'
    ];

    public function election(): BelongsTo
    {
        return $this->belongsTo(Election::class, 'entry_id');
    }
}
