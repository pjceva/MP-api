require 'rails_helper'

RSpec.describe Api::V1::UserController, type: :request do
   describe 'GET #Index'do
        context 'when returning index ok' do 
            before do
                create(:user, username:'usuario teste')
                get '/api/v1/user/index'
            end
            it 'should show success status and render all users' do 
                #get '/api/v1/user/index'
                #p response
                expect(response).to have_http_status(:success)
            end

            it 'returns with json' do
            
                expect(response.content_type).to eq('application/json; charset=utf-8')
            end
        end 
   end
   describe 'GET #Show' do 
    let(:usuario) {create(:user)}
    #musica1 = create(:music, name:'musica_teste')
    #p musica1

    context "with existing user" do
       before {get "/api/v1/user/show/:#{usuario.id}"}
       #corrigir
       it {expect(response).to have_http_status(:not_found)}
    context "with no existing user" do

        before do
            usuario.destroy
            get "/api/v1/user/show/:#{usuario.id}"
        end
      it {expect(response).to have_http_status(:not_found)}
      
      it 'does not returns with json' do
       #get '/api/v1/music/index'
       expect(response.content_type).not_to eq('application/json; charset=utf-8')
     end
    end
  end
end
describe 'POST/Create' do
    let (:params) do
        {
        username: "Musica teste",
        password: 10,
        }
    end
    context 'with valid params' do
        before do
            p params
            post "/api/v1/user/create", params: { music: params}
        end
        it 'return a success response 'do
            #expect(response).to have_http_status(:created)
        end
    end
   end
end

    