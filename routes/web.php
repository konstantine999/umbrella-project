<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\ProductController::class, 'getProducts'])->name('products.show');
Route::get('admin', [\App\Http\Controllers\CategoryController::class, 'getAllCategories'])->name('admin');
Route::post('product', [\App\Http\Controllers\ProductController::class, 'storeProduct'])->name('product.add');
Route::delete('product/delete/{productId}', [\App\Http\Controllers\ProductController::class, 'destroy']);
Route::get('product/{productId}', [\App\Http\Controllers\ProductController::class, 'getSingleProduct'])->name('product.single');
Route::post('category', [\App\Http\Controllers\CategoryController::class, 'addCategory'])->name('category.add');
require __DIR__.'/auth.php';
