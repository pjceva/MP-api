require 'rails_helper'

RSpec.describe Music, type: :model do
    describe 'factory' do
        context 'when using standard factory' do
            it 'is valid' do
                expect(build(:music)).to be_valid
            end
        end
    end

    describe 'music'do
        context "when create a music" do
            it 'is valid' do
                #expect(create(:music, name:'musica1')).not_to eq(nil)
                musica_teste = create(:music, name:'musica_teste')
                expect(musica_teste).not_to eq(nil)
                umaMusica = build(:music, name:'minha_musica')
                p umaMusica
                p musica_teste
            end
        end
    end
end
