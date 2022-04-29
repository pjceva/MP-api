Rails.application.routes.draw do
  resources :notes
  resources :music
  resources :user, only: [:create]
  post '/login', to: 'user#login'
  get '/auto_login', to: 'user#auto_login'


  scope 'music' do
    get 'index', to: 'music#index'
    get 'order', to: 'music#order'
    get 'show/:id', to: 'music#show'
  end

  namespace 'api' do 
    namespace 'v1' do 
      scope 'user' do
        get 'index', to: 'user#index'
        get 'show/:id', to: 'user#show'
        post 'create', to: 'user#create'
        
      end

      scope 'music' do 
        get 'index', to: 'music#index'
        get 'order', to: 'music#order'
        get 'show/:id', to: 'music#show'
        
      end
    end
  end
end
