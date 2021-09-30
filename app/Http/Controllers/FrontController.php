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
        return view("$this->folder/$this->route", $data);
    }
}
