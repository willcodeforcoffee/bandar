namespace :graphql do
  desc "Generate a GraphQL Schema"
  task :create_graphql_schema => :environment do
    exit unless Rails.env.development?

    File.write(Rails.root.join(BandarSchema::SCHEMA_PATH), BandarSchema.to_definition)
    puts "Updated schema at #{BandarSchema::SCHEMA_PATH}"
  end
end
