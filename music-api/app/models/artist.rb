class Artist < ApplicationRecord
    validates :name, presence: true
    validates :name, uniqueness: true
    has_many :musics
    #belongs_to :genre

end
