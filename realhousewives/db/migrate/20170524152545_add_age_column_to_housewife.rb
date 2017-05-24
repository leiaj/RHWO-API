class AddAgeColumnToHousewife < ActiveRecord::Migration[5.1]
  def change
    add_column :housewives, :age, :integer
  end
end
