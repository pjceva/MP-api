# frozen_string_literal: true

class Artist < ApplicationRecord
    validates :name, presence: true
    validates :name, uniqueness: true
    #has_many :musics
    #belongs_to :genre
    #has_many :genres, through: :musics
end



