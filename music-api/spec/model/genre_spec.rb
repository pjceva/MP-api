require 'rails_helper'

RSpec.describe Genre, type: :model do
    describe 'factory' do
        context 'when using standard factory' do
            #let genero1  = build(:genre)
            it 'is valid' do
                expect(build(:genre)).to be_valid
            end
            #p genero1
            
        end
    end
    describe 'name' do 
        context 'when genre does not have name' do
            it "is not valid" do
                expect(build(:genre, name:nil)).to be_invalid
            end
        end
    end
    describe 'name' do 
        context 'when genre name already exists' do
            it "is not valid" do
                expect(create(:genre, name:"genero1")).to be_valid
                expect(build(:genre, name:"genero1")).to be_invalid
                
            end
        end
    end
end
