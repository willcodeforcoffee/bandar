class UserMailer < ApplicationMailer
  default Rails.configuration.x.mailers.system_mailer[:default]
  layout "user_mailer"

  def user_invitation(user_invitation_id)
    @user_invitation = UserInvitation.find_by(:id => user_invitation_id)
    if @user_invitation.blank?
      logger.error("Invitation with ID #{user_invitation_id} could not be found.")
      return
    end

    logger.debug("Sending Invitation [#{user_invitation_id}] to [#{@user_invitation.email_address}]")

    mail(
      :subject => "Invitation to join Bandar",
      :to => @user_invitation.email_address,
    )

    @user_invitation.mark_sent!
  end
end
