FactoryBot.define do 
    factory :music do 
        name {'musica1'}
        artist{build(:artist)}
        genre{build(:genre)}

    end
end
