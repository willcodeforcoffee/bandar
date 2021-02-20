FactoryBot.define do
  factory :user_credential do
    email { "bandar@example.com" }
    password { "Password123" }
    password_confirmation { "Password123" }
  end
end
