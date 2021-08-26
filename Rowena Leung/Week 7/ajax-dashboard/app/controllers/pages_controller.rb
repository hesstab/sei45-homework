class PagesController < ApplicationController
  def home
    @brother = %w( Groucho Harpo Chico).sample
    @time = Time.now
    @uptime = `uptime` #backticks don't work on heroku  
  end
end
