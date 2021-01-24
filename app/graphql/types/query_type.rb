module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :user_invitation, UserInvitationType, :null => true, :description => "User Invitations" do
      description "Find a UserInvitation by token"
      argument :token, String, required: true
    end
    def user_invitation(token:)
      UserInvitationType.build_from(
        UserInvitation.find_by(:token => token)
      )
    end

    # TODO: remove me
    field :test_field, String, :null => false,
                               :description => "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end
