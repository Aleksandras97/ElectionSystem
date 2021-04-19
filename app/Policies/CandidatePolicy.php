<?php

namespace App\Policies;

use App\Models\Candidate;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CandidatePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Candidate $candidate
     * @return mixed
     */
    public function view(User $user, Candidate $candidate)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Candidate $candidate
     * @return mixed
     */
    public function update(User $user, Candidate $candidate)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Candidate $candidate
     * @return mixed
     */
    public function delete(User $user, Candidate $candidate)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Candidate $candidate
     * @return mixed
     */
    public function restore(User $user, Candidate $candidate)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Candidate $candidate
     * @return mixed
     */
    public function forceDelete(User $user, Candidate $candidate)
    {
        //
    }
}
