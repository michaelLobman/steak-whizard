class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :steak_id, :rating, :title, :comment, :toppings, :restaurant

  belongs_to :user
  belongs_to :steak

  def restaurant
    self.object.steak.restaurant
  end
end
