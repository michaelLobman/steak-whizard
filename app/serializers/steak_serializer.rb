class SteakSerializer < ActiveModel::Serializer
  attributes :id, :restaurant

  has_many :reviews

  # def avg_rating
  #   self.reviews.average(:rating)
  # end
end
