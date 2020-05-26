module Movies
  class TheMovieDb
    attr_reader :url, :query

    def initialize(search)
      @url = 'https://api.themoviedb.org/3/search/movie?api_key=871f2c54e6706de7c7af7f83c2c8a2fa'
      @query = search
    end

    def search
      response = HTTParty.get(url, query: query_params)
      response['results']
    end

    private

    def query_params
      { query: query }
    end
  end
end