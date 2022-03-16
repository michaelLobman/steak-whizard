class CreateSteaks < ActiveRecord::Migration[7.0]
  def change
    create_table :steaks do |t|
      t.string :restaurant
      t.float :avg_rating
      t.timestamps
    end
  end
end
