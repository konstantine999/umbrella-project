<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function getAllCategories()
    {
        $categories = Category::all();

        return Inertia::render('Admin', [
            'categories' => $categories
        ]);
    }

    public function addCategory(Request $request)
    {
        Category::create($request->validate([
            'name' => ['required'],
        ]));
        return to_route('admin');
    }
}
