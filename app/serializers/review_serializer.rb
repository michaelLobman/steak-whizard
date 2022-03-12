class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :steak_id, :rating, :title, :comment
end
