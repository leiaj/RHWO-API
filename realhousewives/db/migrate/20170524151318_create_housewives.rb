class CreateHousewives < ActiveRecord::Migration[5.1]
  def change
    create_table :housewives do |t|
      t.string :name
      t.string :franchise
      t.string :spouse
      t.integer :net_worth
      t.boolean :plastic_surgery

      t.timestamps
    end
  end
end
