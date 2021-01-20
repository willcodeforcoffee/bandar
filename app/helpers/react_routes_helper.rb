module ReactRoutesHelper
  def react_user_invitation_url(user_invitation)
    "#{root_url}auth/accept?invitation=#{user_invitation.token}"
  end
end
