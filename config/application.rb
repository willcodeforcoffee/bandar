require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Bandar
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    config.active_job.queue_adapter = :good_job

    config.x.pushover.token = ENV["PUSHOVER_TOKEN"]
    config.x.pushover.user_key = ENV["PUSHOVER_USERKEY"]

    # SystemEmailer emails should only go to the sysop(s) so a default :to must be set in the :defaults
    config.x.mailers.enable_smtp_sending = Rails.env.production? || ENV["ENABLE_SMTP_SENDING"]&.downcase == "true"
    config.x.mailers.system_mailer = {
      :default => {
        :from => ENV["SYSTEM_MAILER_DEFAULT_FROM_ADDRESS"],
        :to => ENV["SYSTEM_MAILER_DEFAULT_RECIPIENT_ADDRESS"],
      },
    }
    config.x.mailers.user_mailer = {
      :default => {
        :from => ENV["USER_MAILER_DEFAULT_FROM_ADDRESS"],
      },
    }
  end
end
