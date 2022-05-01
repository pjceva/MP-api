# frozen_string_literal: true

# Cria usuário para o banco de dados, com senha e um nome de usuário
class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password

      t.timestamps
    end
  end
end
