# frozen_string_literal: true

# Remove artista do banco de dados
class RemoveArtistFromMusic < ActiveRecord::Migration[7.0]
  def change
    remove_column :musics, :artist, :string
  end
end
