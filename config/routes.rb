# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  get "home/index"
  root :to => "home#index"

  mount LetterOpenerWeb::Engine, :at => "/letter_opener" if Rails.env.development?
end
