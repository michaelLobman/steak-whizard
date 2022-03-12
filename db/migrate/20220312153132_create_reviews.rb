class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :steak_id
      t.integer :rating
      t.string :title
      t.text :comment

      t.timestamps
    end
  end
end
