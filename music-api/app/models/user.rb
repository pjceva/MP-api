# frozen_string_literal: true

class User < ApplicationRecord
AutenticaUser
    has_secure_password
    validates :username, :password, presence: true
    validates :username, uniqueness: true

  validates :username, :password, presence: true
  validates :username, uniqueness: true
main
end
