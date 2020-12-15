require "clockwork"

require_relative "../config/boot"
require_relative "../config/environment"

module Clockwork
  # https://github.com/Rykian/clockwork#configuration
  configure do |config|
    config[:sleep_timeout] = 5
    config[:logger] = Rails.logger
    config[:thread] = true
  end
end
