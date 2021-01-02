require "rails_helper"

RSpec.describe UserInvitationService do
  let(:test_email_address) { "test@example.com" }

  it "creates a UserInvitation" do
    expect { described_class.new.send_invitation(test_email_address) }.to change(UserInvitation, :count).by(1)
  end

  it "sends a UserMailer#user_invitation" do
    user_mailer = class_double("UserMailer").as_stubbed_const(:transfer_nested_constants => true)
    allow(user_mailer).to receive(:user_invitation)

    described_class.new.send_invitation(test_email_address)

    expect(user_mailer).to have_received(:user_invitation)
  end
end
