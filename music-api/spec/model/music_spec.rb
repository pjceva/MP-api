require 'rails_helper'

RSpec.describe Music, type: :model do
    describe 'factory' do
        context 'when using standard factory' do
            it 'is valid' do
                expect(build(:music)).to be_valid
            end
        end
    end
end
