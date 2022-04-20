Rails.application.routes.draw do
  resources :reviews, only: [:create]
  resources :steaks, only: [:index, :create]
  resources :users, only: [:update]

  get "/steaks/highest-rated", to: "steaks#highest_rated"
  get "/steaks/high-to-low", to: "steaks#high_to_low"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  get "*path",
    to: "fallback#index",
    constraints: ->(req) { !req.xhr? && req.format.html? }

end
