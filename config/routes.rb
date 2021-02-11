# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  devise_for :user_credentials, controllers: {
    sessions: "user_credentials/sessions",
    confirmations: "user_credentials/confirmations",
    passwords: "user_credentials/passwords",
    registrations: "user_credentials/registrations",
    unlocks: "user_credentials/unlocks",
    omniauth_callbacks: "user_credentials/omniauth_callbacks",
  }
  post "/auth/:provider/callback", to: "user_credentials/omniauth_callbacks#create"

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, :at => "/graphiql", :graphql_path => "/graphql"
    mount LetterOpenerWeb::Engine, :at => "/letter_opener"
  end

  post "/graphql", :to => "graphql#execute"
  get "home/index"
  root :to => "home#index"

  # React routes - So router routes will go to the right React page component
  get "/test", to: "home#index"
end
