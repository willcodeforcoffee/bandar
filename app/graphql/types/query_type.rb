module Types
  class QueryType < Types::BaseObject
    field :user_invitation, UserInvitationType, :null => true, :description => "User Invitations" do
      description "Find a UserInvitation by token"
      argument :token, String, required: true
    end
    def user_invitation(token:)
      UserInvitationType.build_from(
        UserInvitation.find_by(:token => token),
      )
    end
  end
end
