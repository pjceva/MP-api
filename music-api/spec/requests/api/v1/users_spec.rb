require 'rails_helper'

RSpec.describe Api::V1::UserController, type: :request do
    context 'GET #Index' do 
        it 'should show success status and render all users' do 
            get '/api/v1/user/index'
            expect(response).to have_http_status(:success)
        end
    end
end

    