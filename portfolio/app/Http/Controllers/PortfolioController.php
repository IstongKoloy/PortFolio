<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index() {
        return view('index');
    }

    public function about() {
        return view('about');
    }

    public function projects() {
        return view('projects');
    }

    public function contact() {
        return view('contact');
    }
}
