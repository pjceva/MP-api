# frozen_string_literal: true

module Api
  module V1
    # Controller para a parte de usuários, implementa os métodos para os usuários no banco de dados
    class UserController < ApplicationController
      def index
        users = User.all
        render json: users, status: :ok
      end

      def show
        user = User.find(params[:id])
        render json: user, status: :ok
      rescue StandardError
        head(:not_found)
      end

      def create
        user = User.new(user_params)
        user.save!
        render json: user, status: 201
      rescue StandardError
        head(:unprocessable_entity)
      end

      private

      def user_params
        params.require(:user).permit(
          :username,
          :password
        )
      end
    end
  end
end
