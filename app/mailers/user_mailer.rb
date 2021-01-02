class UserMailer < ApplicationMailer
  default Rails.configuration.x.mailers.system_mailer[:default]
  layout "user_mailer"

  def user_invitation(user_invitation)
    @user_invitation = user_invitation

    mail(
      :to => user_invitation.email_address,
      :subject => "Invitation to join Bandar",

    )
  end
end
