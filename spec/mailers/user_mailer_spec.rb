require "rails_helper"

RSpec.describe UserMailer, type: :mailer do
  describe "user_invitation" do
    let(:user_invitation) { create(:user_invitation) }
    let(:mail) { described_class.user_invitation(user_invitation) }

    it "renders the subject header" do
      expect(mail.subject).to eq("Invitation to join Bandar")
    end

    it "renders the to header" do
      expect(mail.to).to eq([user_invitation.email_address])
    end

    it "renders the from header" do
      expect(mail.from).to eq([Rails.configuration.x.mailers.user_mailer[:default][:from]])
    end

    # it "encoded the body" do
    #   expect(mail.body.encoded).to match("Hi")
    # end
  end
end
