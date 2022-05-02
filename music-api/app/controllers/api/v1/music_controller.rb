# frozen_string_literal: true

module Api
  module V1
    # Controller para a parte de música, implementa os métodos para as músicas no banco de dados
    class MusicController < ApplicationController
      def index
        musics = Music.all
        render json: musics, status: :ok
      end

      def order
        musics = Music.order(:likes).reverse
        render json: musics, status: :ok
      end

      def show
        music = Music.find(params[:id])
        render json: music, status: :ok
      rescue StandardError
        head(:not_found)
      end

      def create
        music = Music.new(music_params)
        music.save!
        render json: music, status: 201
      rescue StandardError
        head(:unprocessable_entity)
      end

      private

      def music_params
        params.require(:music).permit(
          :name,
          :likes,
          :artist_id,
          :genre_id
        )
      end
    end
  end
end
