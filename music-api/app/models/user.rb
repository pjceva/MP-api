# frozen_string_literal: true

class User < ApplicationRecord
  validates :username, :password, presence: true
  validates :username, uniqueness: true
end
