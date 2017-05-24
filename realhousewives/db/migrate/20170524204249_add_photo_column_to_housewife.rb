class AddPhotoColumnToHousewife < ActiveRecord::Migration[5.1]
  def change
    add_column :housewives, :photo, :string
  end
end
