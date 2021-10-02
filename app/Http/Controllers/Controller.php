<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    protected ?string $folder = "pages";
    protected ?string $route = "404";

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function init()
    {
        return $this->getContent();
    }

    public function getContent(): array
    {
        $global = json_decode(file_get_contents(storage_path() . "/data/global.json"), true);
        $projects = json_decode(file_get_contents(storage_path() . "/data/projects.json"), true);
        $page = json_decode(file_get_contents(storage_path() . "/data/$this->route.json"), true);
        return array_merge($global, $page, $projects);
    }
}
