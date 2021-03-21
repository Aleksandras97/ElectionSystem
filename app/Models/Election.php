<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Election extends Model
{
    use HasFactory;

    protected $fillable = [
        'election_date',
        'election_name',
        'election_image',
    ];

    public function candidates(): HasMany
    {
        return $this->hasMany(Candidate::class);
    }

    //election has many voters(users)
    //voter(user) belongs to an elections

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)->withPivot('is_vote_active', 'is_voted')->withTimestamps();
    }

}
