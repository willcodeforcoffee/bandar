# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Invoking Database seed"

puts "Checking for [db/seeds/user_credentials.csv]"
if File.exist?("db/seeds/user_credentials.csv")
  row_index = 0
  CSV.foreach("db/seeds/user_credentials.csv", headers: true) do |row|
    row_index += 1
    if UserCredential.exists?(:email => row["email_address"])
      puts "Skipping [#{row_index}:#{row['email_address']}] because that email exists"
      next
    end

    user_credential = UserCredential.new({
                                           email: row["email_address"],
                                           password: row["password"],
                                           password_confirmation: row["password"],
                                         })

    unless user_credential.valid?
      puts "Skipping [#{row_index}:#{row['email_address']}]: the credentials are invalid"
      next
    end

    puts "Seeding UserCredential [#{user_credential.email}]"
    user_credential.save!
  end
else
  puts "Create the file [db/seeds/user_credentials.csv] to seed users"
end

puts "Database seed copmlete"
