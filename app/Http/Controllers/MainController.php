<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller {

	public function __construct()
	{

	}

	/**
	 * Handles home page
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('app');
	}
}
