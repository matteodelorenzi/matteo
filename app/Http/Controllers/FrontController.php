<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class FrontController extends Controller
{
    protected ?string $route = "front";

    public function init()
    {
        $data = parent::init();

        $data["projects"] = collect($data["projects"])->map(function($project){
            return array_merge($project, [
                "url" => url("/") . "/projects/" . static::createSlug($project["title"])
            ]);
        });

        return view("$this->folder/$this->route", $data);
    }
}
