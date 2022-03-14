class Steak < ApplicationRecord
    validates :restaurant, presence: true
    validates :rating, presence: true

    has_many :reviews
    has_many :users, through: :reviews
end
