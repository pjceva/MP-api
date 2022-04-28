require 'rails_helper'

RSpec.describe User, type: :model do
    describe 'factory' do
        context 'when using standard factory' do
            it 'is valid' do
                expect(build(:user)).to be_valid
            end
        end
    end
    describe 'username' do 
        context 'when user does not have username' do
            it "is not valid" do
                expect(build(:user, username:nil)).to be_invalid
            end
        end
    end

    describe 'username' do 
        context 'when username already exists' do
            it "is not valid" do
                expect(create(:user, username:"usuario1")).to be_valid
                expect(build(:user, username:"usuario1")).to be_invalid
                
            end
        end
    end
    
    describe 'password' do
        context 'when user does not have password' do
            it 'is not valid' do
                expect(build(:user, password:nil)).to be_invalid 
            end
        end
    end    
end
