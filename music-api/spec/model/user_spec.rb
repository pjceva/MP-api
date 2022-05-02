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
    describe 'password' do
        context 'when user does not have password' do
            it 'is not valid' do
                expect(build(:user, password:nil)).to be_invalid 
            end
        end
    end 
    describe 'is_admin' do
        context 'when fild is_admin is not equal to 1 or 0'
        it 'is not valid' do
            expect(build(:user, is_admin:5)).to be_invalid
        end
        context 'when fild is_admin is equal to 1 or 0'
        it 'is valid' do 
            expect(build(:user, is_admin:0)).to be_valid
            expect(build(:user, is_admin:1)).to be_valid
        end
    end
end
