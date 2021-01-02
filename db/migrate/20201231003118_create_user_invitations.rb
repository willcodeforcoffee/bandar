class CreateUserInvitations < ActiveRecord::Migration[6.0]
  def change
    create_table :user_invitations do |t|
      t.string :token, :limit => 30, :null => false
      t.string :email_address, :limit => 255, :null => false
      t.datetime :expires_at, :null => false
      t.datetime :accepted_at

      t.timestamps
    end
    add_index :user_invitations, :token, unique: true
  end
end
