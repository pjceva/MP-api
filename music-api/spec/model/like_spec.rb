require 'rails_helper'

RSpec.describe Like, type: :model do
    describe 'factory' do
        context 'when using standard factory' do
            it 'is valid' do
                expect(build(:like)).to be_valid
            end
        
        end
    end
end