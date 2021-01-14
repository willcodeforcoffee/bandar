require_relative "../rake_utils"

namespace :users do
  desc "Send an invitation to a new user"
  task :send_invitation, [:email_address] => :environment do |_t, args|
    email_address = args[:email_address]
    puts "Send out an invitation to create a user in the application."
    abort unless RakeUtils.default_yes_prompt "Do you want to send an invitation to #{email_address}?"

    service = UserInvitationService.new

    service.send_invitation(email_address)
    puts "Invitation sent."
  end
end
