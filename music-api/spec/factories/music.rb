FactoryBot.define do 

    #sequence music :names do |n|
     #   "musica teste #{n}"
    #end

    factory :music do 
        #name {generate (:names)}
        name {'musica1'}
        artist {association :artist}
        #artist{build(:artist)}
        #genre{build(:genre)}
        genre{association :genre}
    end
end
