Rails.application.routes.draw do
  resources :reviews
  resources :steaks, only: [:index]
  resources :users, only: [:update]

  get "/steaks/highest-rated", to: "steaks#highest_rated"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

end
