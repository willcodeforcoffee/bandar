require "rails_helper"

# Specs in this file have access to a helper object that includes
# the ReactRoutesHelper. For example:
#
# describe ReactRoutesHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.describe ReactRoutesHelper, type: :helper do
  describe "#react_user_invitation_url" do
    let(:user_invitation) { create(:user_invitation) }

    it "will include the token" do
      expect(helper.react_user_invitation_url(user_invitation)).to end_with(user_invitation.token)
    end
  end
end
