# frozen_string_literal: true

# Cria artistas no banco de dados, passando o nome do artista
class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :name

      t.timestamps
    end
  end
end
