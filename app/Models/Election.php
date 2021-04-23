<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Election extends Model
{
    use HasFactory;

    protected $fillable = [
        'election_date',
        'election_name',
        'election_image',
    ];

    public function candidates(): BelongsToMany
    {
        return $this->BelongsToMany(Candidate::class)
        ->using(CandidateElection::class)
        ->withPivot('vote_counter')
        ->withTimestamps();
    }

    //election has many voters(users)
    //voter(user) belongs to an elections

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->using(ElectionUser::class)
            ->withPivot( 'is_voted')
            ->withTimestamps();
    }

}
