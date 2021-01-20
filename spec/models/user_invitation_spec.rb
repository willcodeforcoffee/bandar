require "rails_helper"

RSpec.describe UserInvitation, :type => :model do
  let(:test_email_address) { "test@example.com" }

  describe "#generate_for" do
    let(:generated_invitation) { described_class.generate_for(test_email_address) }

    before do
      Timecop.freeze
    end

    after do
      Timecop.return
    end

    it "generates a token #{described_class::TOKEN_LENGTH} characters long" do
      expect(generated_invitation.token.length).to eq described_class::TOKEN_LENGTH
    end

    it "generates with an expiry around DEFAULT_EXPIRES_AT" do
      expect(generated_invitation.expires_at).to eq described_class::DEFAULT_EXPIRES_AT.call
    end

    context "when an expires_at date is provided" do
      let(:generated_invitation) { described_class.generate_for(test_email_address, expires_at) }

      let(:expires_at) { 1.day.from_now }

      it "uses the provided expiry" do
        expect(generated_invitation.expires_at).to eq expires_at
      end
    end
  end

  describe "#sent?" do
    before do
      Timecop.freeze
    end

    after do
      Timecop.return
    end

    context "when no invitation was sent" do
      it "is false" do
        expect(described_class.new.sent?()).to be(false)
      end
    end

    context "when invitation is not accepted and not expired" do
      let(:user_invitation) { create(:user_invitation) }

      it "is sent" do
        expect(described_class.sent?(user_invitation.email_address)).to be(true)
      end
    end

    context "when invitation was accepted" do
      let(:user_invitation) { create(:user_invitation, :accepted) }

      it "is true" do
        expect(described_class.sent?(user_invitation.email_address)).to be(true)
      end
    end

    context "when invitation expired" do
      let(:user_invitation) { create(:user_invitation, :expired) }

      it "is false" do
        expect(described_class.sent?(user_invitation.email_address)).to be(false)
      end
    end
  end
end
