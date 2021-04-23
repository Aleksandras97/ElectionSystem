<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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

    public function elections(): BelongsToMany
    {
        return $this->BelongsToMany(Election::class)
            ->using(CandidateElection::class)
            ->withPivot('vote_counter')
            ->withTimestamps();
    }
}
