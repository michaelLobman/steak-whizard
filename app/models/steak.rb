class Steak < ApplicationRecord
    validates :restaurant, presence: true
    validates :toppings, presence: true
    validates :rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }

    has_many :reviews
    has_many :users, through: :reviews
end
