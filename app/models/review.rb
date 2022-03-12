class Review < ApplicationRecord
    validates :title, presence: true
    validates :comment, presence: true
    validates :rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }

    belongs_to :user
    belonges_to :steak
end
