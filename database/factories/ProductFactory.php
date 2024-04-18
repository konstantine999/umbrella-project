<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(2),
            'description' => $this->faker->sentence(10),
            'price' => $this->faker->numberBetween(10, 1000),
        ];
    }

    public function configure()
    {


        return $this->afterCreating(function (Product $product) {
            $categories = Category::inRandomOrder()->limit(rand(1, 3))->get();
            $product->categories()->attach($categories);
        });

    }
}
