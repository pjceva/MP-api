class AddArtistToMusic < ActiveRecord::Migration[7.0]
  def change
    add_column :musics, :artist, :string
  end
end
