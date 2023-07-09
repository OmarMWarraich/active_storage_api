Rails.application.routes.draw do
  resources :books
  get 'latest', to: 'books#latest'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "books#index"
end
