class Steak < ApplicationRecord
    validates :restaurant, presence: true, uniqueness: true
    has_many :reviews
    has_many :users, through: :reviews

    def calc_avg_rating
        self.reviews.average(:rating)
    end
end
