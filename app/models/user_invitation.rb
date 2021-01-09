# This is an invitation to signup to the application
class UserInvitation < ApplicationRecord
  validates :token, :presence => true, :length => { :maximum => 30 }
  validates :email_address, :presence => true, :length => { :maximum => 255 }
  validates :expires_at, :presence => true

  TOKEN_LENGTH = 30
  DEFAULT_EXPIRES_AT = -> { 72.hours.from_now.utc }

  def expired?
    expires_at.present? && DateTime.now.utc > expires_at
  end

  def accepted?
    accepted_at.present?
  end

  def sent?
    sent_at.present?
  end

  def mark_sent!
    update(:sent_at => DateTime.now.utc)
  end

  class << self
    def generate_for(email_address, expires_at = nil)
      options = {
        :token => generate_token,
        :email_address => email_address,
        :expires_at => expires_at || DEFAULT_EXPIRES_AT.call,
        :accepted_at => nil,
      }

      UserInvitation.new(options)
    end

    def sent?(email_address)
      user_invitation = UserInvitation.find_by(:email_address => email_address)

      return false if user_invitation.blank?
      return true if user_invitation.accepted?

      !user_invitation.expired?
    end

    private

    def generate_token
      SecureRandom.alphanumeric(TOKEN_LENGTH)
    end
  end
end
