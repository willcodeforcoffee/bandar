class BandarSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  SCHEMA_PATH = "app/graphql/schema.graphql".freeze

  # Opt in to the new runtime (default in future graphql-ruby versions)
  use GraphQL::Execution::Interpreter
  use GraphQL::Analysis::AST

  # Add built-in connections for pagination
  use GraphQL::Pagination::Connections
end
