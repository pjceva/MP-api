# frozen_string_literal: true

# Atribui status de administrador para um usuário
class AddIsAdminToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :is_admin, :integer
  end
end
