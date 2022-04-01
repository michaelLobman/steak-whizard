class SteakSerializer < ActiveModel::Serializer
  attributes :id, :restaurant, :rating
  has_many :reviews
end
