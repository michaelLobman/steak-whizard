class Steak < ApplicationRecord
    validates :restaurant, presence: true
    has_many :reviews
    has_many :users, through: :reviews

    def avg_rating
        self.reviews.average(:rating)
    end




end
