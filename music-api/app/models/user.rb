# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  validates :username, :password, presence: true
  validates :username, uniqueness: true
  validates :is_admin, inclusion: {in: [1,0]}
end
