class User < ApplicationRecord
    validates :username, :password, presence: true
    validates :username, uniqueness: true
    validates :is_admin, inclusion: {in: [1,0]}
end
