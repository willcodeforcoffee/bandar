FactoryBot.define do
  factory :user_invitation do
    token { "1234567890abcdef1234567890abcd" }
    email_address { "test@example.com" }
    expires_at { UserInvitation::DEFAULT_EXPIRES_AT.call }
    accepted_at { nil }
    sent_at { nil }

    trait :accepted do
      accepted_at { 1.second.ago }
    end

    trait :sent do
      sent_at { 1.second.ago }
    end

    trait :expired do
      accepted_at { nil }
      expires_at { 1.minute.ago }
    end
  end
end
