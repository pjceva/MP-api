FactoryBot.define do 
    factory :artist do 
        name {'gustavo'}
        #genre{build(:genre)}
        #genre_id {'1'}
        #artist_id{'1'}
        #genre{association :genre}
    end
end
