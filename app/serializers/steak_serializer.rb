class SteakSerializer < ActiveModel::Serializer
  attributes :id, :restaurant, :toppings, :rating
end
