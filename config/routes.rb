# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
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
