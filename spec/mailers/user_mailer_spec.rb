require "rails_helper"

RSpec.describe UserMailer, type: :mailer do
  describe "user_invitation" do
    let(:mail) { described_class.user_invitation }

    it "renders the subject header" do
      expect(mail.subject).to eq("User invitation")
    end

    it "renders the to header" do
      expect(mail.to).to eq(["to@example.org"])
    end

    it "renders the from header" do
      expect(mail.from).to eq(["from@example.com"])
    end

    it "encoded the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end
end
