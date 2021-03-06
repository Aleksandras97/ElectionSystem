<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'birthdate' => $this->birthdate,
            'street_address' => $this->street_address,
            'city' => $this->city,
            'district' => $this->district,
            'gender' => $this->gender,
            'is_admin' => $this->is_admin,
            'created_at' => (string)$this->created_at
        ];
    }
}
