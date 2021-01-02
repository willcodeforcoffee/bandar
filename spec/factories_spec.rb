require "rails_helper"

RSpec.describe "FactoryBots" do
  FactoryBot.factories.map(&:name).each do |factory_name|
    describe "#{factory_name} factory" do
      it "will create a valid object" do
        o = build(factory_name)
        expect(o.errors.full_messages).to eq([])
        expect(o).to be_valid
      end
    end
  end
end
