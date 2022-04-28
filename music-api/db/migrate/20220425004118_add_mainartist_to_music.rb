# frozen_string_literal: true

# adiciona o nome do artista a uma música
class AddMainartistToMusic < ActiveRecord::Migration[7.0]
  def change
    add_column :musics, :mainartist, :string
  end
end
