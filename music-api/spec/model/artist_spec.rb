require 'rails_helper'

RSpec.describe Artist, type: :model do
    describe 'factory' do
        context 'when using standard factory' do
            it 'is valid' do
                expect(build(:artist)).to be_valid
            end
        end
    end
    describe 'name' do 
        context 'when artist does not have name' do
            it "is not valid" do
                expect(build(:artist, name:nil)).to be_invalid
            end
        end
    end
    describe 'name' do 
        context 'when artist name already exists' do
            it "is not valid" do
                expect(create(:artist, name:"cantor")).to be_valid
                expect(build(:artist, name:"cantor")).to be_invalid
                
            end
        end
    end
end
