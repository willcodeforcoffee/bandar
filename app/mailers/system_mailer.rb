class SystemMailer < ApplicationMailer
  # System Emails should only go to the sysop to a default :to must be set in the :defaults
  default Rails.configuration.x.mailers.user_mailer[:default]
  layout "system_mailer"

  def welcome_email
    mail(:subject => "Welcome to Bandar")
  end
end
