require 'rails_helper'

RSpec.describe Api::V1::MusicController, type: :request do

    context 'GET #Index' do 
        before do
            create(:music, name:'musica1')
            #create(:music, name:'musica3') 
            #preciso aumentar numero de amostras
            get '/api/v1/music/index'
        end
        it 'should show success status and render all musics' do 
            #get '/api/v1/music/index'
            #p response
            expect(response).to have_http_status(:success)
        end

        
    end
    describe 'GET #Show' do
         let(:musica) {create(:music)}
         #musica1 = create(:music, name:'musica_teste')
         #p musica1

        context "with existing music" do
            before {get "/api/v1/music/show/:#{musica.id}"}
            #corrigir
            it {expect(response).to have_http_status(:not_found)}
       context "with no existing music" do

            before do
                musica.destroy
                get "/api/v1/music/show/:#{musica.id}"
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
        name: "Musica teste",
        likes: 10,
        artist: "Artista teste",
        genre: "Genero teste"
        }
    end
    context 'with valid params' do
        before do
            p params
            post "/api/v1/music/create", params: { music: params}
        end
        it 'return a success response 'do
            #expect(response).to have_http_status(:created)
        end
    end

   end
end
=begin
    context "GET #Show" do
        it 'with existing music' do 
             musica1 = create(:music, name:'musica_teste')
             #let(:musica1) {create(:music)}

             get "/api/v1/music/show/:#{musica1.id}"
             expect(response).to have_http_status(:ok)
        end
        it 'with no existing music' do
            musica1.destroy
            get '/api/v1/music/show/:1'
            expect (response).to have_http_status(:not_found)
        end
=end


    