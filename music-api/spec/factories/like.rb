FactoryBot.define do 
    factory :like do 
        user {build(:user)}
        music {build(:music)}
        
    end
end