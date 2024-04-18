<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function getProducts(Request $request)
    {
        $categories = Category::all();
        $productsQuery = Product::Query();

        if ($request->has('category')) {
            $categoryIds = $request->input('category');

            $productsQuery->whereHas('categories', function ($query) use ($categoryIds) {
                $query->whereIn('id', $categoryIds);
            });
        }


        if($request->filled('name')){
            $productsQuery->where('name', 'like', '%'. $request->input('name'). '%');
        }

        if($request->filled('priceFrom') && $request->filled('priceTo'))
        {
            $productsQuery->whereBetween('price', [$request->input('priceFrom'), $request->input('priceTo')]);
        } else{
            if($request->filled('priceFrom')) {
                $productsQuery->where('price', '>=', $request->input('priceFrom'));
            }

            if($request->filled('priceTo'))
            {
                $productsQuery->where('price', '<=', $request->input('priceTo'));
            }
        }

        $products = $productsQuery->paginate(15);;

        foreach ($products as $product) {
            $product->media = $product->getMedia('images');
            $product->categories = $product->categories()->select(['id', 'name'])->get();
        }
        return Inertia::render('Main', [
            'products' => $products,
            'categories' => $categories
        ]);
    }

    public function storeProduct(Request $request)
    {
        $product = Product::create($request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'price' => ['required'],
        ]));

        foreach ($request->file() as $file) {
            $product->addMedia($file)->toMediaCollection('images');
        }

        $categoryIds = explode(',', $request['category']);
        $product->categories()->attach($categoryIds);
        return to_route('products.show');
    }

    public function getSingleProduct($productId)
    {
        $product = Product::all()->find($productId);
        $product->media = $product->getMedia('images');
        $product->categories = $product->categories()->select(['id', 'name'])->get();
        return Inertia::render('Product', [
            'product' => $product
        ]);
    }

    public function destroy ($productId)
    {

        $product = Product::all()->find($productId);
        $product->delete();

        return to_route('products.show');
    }
}
