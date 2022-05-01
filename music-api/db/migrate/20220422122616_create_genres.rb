# frozen_string_literal: true

# cria generos no banco de dados, passando um nome
class CreateGenres < ActiveRecord::Migration[7.0]
  def change
    create_table :genres do |t|
      t.string :name

      t.timestamps
    end
  end
end
