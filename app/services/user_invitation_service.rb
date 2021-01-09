class UserInvitationService
  class InvitationNotValidError < StandardError
    attr_accessor :user_invitation

    def initialize(user_invitation)
      super("UserInvitation is not valid")
      @user_invitation = user_invitation
    end
  end

  class EmailAddressInviteAlreadySentError < StandardError
    attr_accessor :email_address

    def initialize(email_address)
      super("Invitation for #{email_address} was already sent")
      @email_address = email_address
    end
  end

  def send_invitation(email_address)
    raise EmailAddressInviteAlreadySentError, email_address if UserInvitation.sent?(email_address)

    user_invitation = UserInvitation.generate_for(email_address)
    raise InvitationNotValidError, user_invitation unless user_invitation.valid?

    user_invitation.save!

    send_user_invitation_email(user_invitation)
  end

  private

  def send_user_invitation_email(user_invitation)
    UserMailer.user_invitation(user_invitation.id).deliver_later
  end
end
