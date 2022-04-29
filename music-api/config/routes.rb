# frozen_string_literal: true

Rails.application.routes.draw do
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
