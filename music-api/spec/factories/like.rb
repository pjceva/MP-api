FactoryBot.define do 
    factory :like do 
        #user {build(:user)}
        #music {build(:music)}
        user {association :user}
        music{association :music}
        
        
    end
end


=begin
factory :music do 
    #name {generate (:names)}
    name {'musica1'}
    artist {association :artist}
    #artist{build(:artist)}
    #genre{build(:genre)}
    genre{association :genre}
end
end
=end

