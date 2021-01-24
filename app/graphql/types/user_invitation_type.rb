module Types
  class UserInvitationType < Types::BaseObject
    field :id, ID, null: false
    field :token, String, null: false
    field :email_address, String, null: false
    field :expires_at, GraphQL::Types::ISO8601DateTime, null: false
    field :sent_at, GraphQL::Types::ISO8601DateTime, null: true
    field :accepted_at, GraphQL::Types::ISO8601DateTime, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :is_expired, Boolean, null: true
    field :is_accepted, Boolean, null: true
    field :is_sent, Boolean, null: true

    def self.build_from(user_invitation)
      {
        id: user_invitation.id,
        token: user_invitation.token,
        email_address: user_invitation.email_address,
        expires_at: user_invitation.expires_at,
        sent_at: user_invitation.sent_at,
        accepted_at: user_invitation.accepted_at,
        created_at: user_invitation.created_at,
        updated_at: user_invitation.updated_at,
        is_expired: user_invitation.expired?,
        is_accepted: user_invitation.accepted?,
        is_sent: user_invitation.sent?,
      }
    end
  end
end
