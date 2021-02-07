# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  # https://doorkeeper.gitbook.io/guides/ruby-on-rails/routes
  use_doorkeeper
  # https://www.rubydoc.info/github/heartcombo/devise/master/ActionDispatch/Routing/Mapper%3Adevise_for
  devise_for :users, :controllers => {
    :sessions => "users/sessions",
  }

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
