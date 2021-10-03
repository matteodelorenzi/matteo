<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Request;

class SingleController extends Controller
{
    protected ?string $route = "single";

    public function init()
    {
        $data = parent::init();

        $data = array_merge($data, static::getProject());

        return view("$this->folder/$this->route", $data);
    }

    /**
     * @return array | bool
    */
    private static function getProject()
    {
        $projects = json_decode(file_get_contents(storage_path() . "/data/projects.json"), true)["projects"];
        $response = collect($projects)->filter(function($item){
            return static::createSlug($item["title"]) === static::getSlugProject();
        });

        if($response->isNotEmpty()){
            return $response->first();
        }else{
            return [];
        }
    }

    private static function getSlugProject(): string
    {
        $url = Request::url();
        return collect(explode('/projects/', $url))->last();
    }
}
