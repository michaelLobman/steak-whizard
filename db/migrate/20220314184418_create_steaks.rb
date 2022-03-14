class CreateSteaks < ActiveRecord::Migration[7.0]
  def change
    create_table :steaks do |t|
      t.string :restaurant
      t.float :rating

      t.timestamps
    end
  end
end
