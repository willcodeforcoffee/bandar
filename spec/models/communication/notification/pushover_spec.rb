require 'rails_helper'

RSpec.describe Communication::Notification::Pushover, type: :model do
  describe "a new Pushover Notification" do
    context "should be defaulting to" do
      let(:notification) { Communication::Notification::Pushover.new }

      it "status to :ready" do
        expect(notification.status).to eq "ready"
      end

      it "should be ready?" do
        expect(notification.ready?).to eq true
      end

      it "should be at zero retries" do
        expect(notification.retries.zero?).to eq true
      end

      context "#retry_delivery!" do
        it "should not be failed?" do
          expect(notification.failed?).to eq false
        end

        it "should not allow a retry if it has never been sent" do
          expect{ notification.retry_delivery }.to raise_error(AASM::InvalidTransition)
        end
      end
    end
  end
end
