class Api::V1::Movies::SearchController < ApplicationController
  def index
    @movies = Movies::TheMovieDb.new(params[:name]).search
    msg = { status: :ok, messages: :success, response: @movies }
    render json: msg
  end
end

