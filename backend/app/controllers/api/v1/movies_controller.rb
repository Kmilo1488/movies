class Api::V1::MoviesController < ApplicationController
  def index
    @movies = Movie.where('title LIKE ? OR overview LIKE ?', "%#{params[:key_word]}%", "%#{params[:key_word]}%")
    msg = { status: :ok, messages: :success, response: @movies }
    render json: msg
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      msg = { status: :ok, messages: :success, body: @movie }
      render json: msg
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :overview, :release_date)
  end
end
