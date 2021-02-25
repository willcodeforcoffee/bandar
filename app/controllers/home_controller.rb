class HomeController < ApplicationController
  before_action :authenticate_user_credential!

  def index; end
end
