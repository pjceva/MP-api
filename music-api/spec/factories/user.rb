FactoryBot.define do 
    factory :user do 
        username { 'Fulano' }
        password {"123"}
        is_admin{"0"}
        
    end
end

