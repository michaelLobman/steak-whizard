class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :fav_steak

  has_many :reviews
  has_many :steaks
end
