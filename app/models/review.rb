class Review < ApplicationRecord
    validates :rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }
    validates :toppings, presence: true
    validates :title, presence: true

    belongs_to :user
    belongs_to :steak
end
