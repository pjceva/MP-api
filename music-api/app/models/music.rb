=begin
class Music < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  
  belongs_to :artist
  belongs_to :genre
  # belongs_to :favorite
end
=end

class Music < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  
  belongs_to :artist
  belongs_to :genre
  # belongs_to :favorite
  has_many :users, through: :likes
end
