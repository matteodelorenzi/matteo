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
        return array_merge($global, $projects);
    }

    public static function createSlug($title, $separator = '-'): string
    {
        // Convert all dashes/underscores into separator
        $flip = $separator === '-' ? '_' : '-';

        $title = preg_replace('!['.preg_quote($flip).']+!u', $separator, $title);

        // Replace @ with the word 'at'
        $title = str_replace('@', $separator.'at'.$separator, $title);

        // Remove all characters that are not the separator, letters, numbers, or whitespace.
        $title = preg_replace('![^'.preg_quote($separator).'\pL\pN\s]+!u', '', mb_strtolower($title, 'UTF-8'));

        // Replace all separator characters and whitespace by a single separator
        $title = preg_replace('!['.preg_quote($separator).'\s]+!u', $separator, $title);

        return trim($title, $separator);
    }
}
