<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Election extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'election_date' => $this->election_date,
            'election_name' => $this->election_name,
            'election_image' => $this->election_image,
            'created_at' => (string)$this->created_at
        ];
    }
}
