class Steak < ApplicationRecord
    validates :restaurant, presence: true
    has_many :reviews
    has_many :users, through: :reviews

    # def self.highest_rated
        
    #     steaks = self.all
    #     steaks.each do |steak|
    #         if steak.id == 1
    #             high_value = steak
    #         else
    #             high_value = steak.avg_rating > high_value.avg_rating ? steak : high_value
    #         end
    #     end

    # end

    def calc_avg_rating
        self.reviews.average(:rating)
    end

end
